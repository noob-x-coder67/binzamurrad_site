import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

export function RootLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
    document.body.scrollTo(0, 0);
    window.scrollTo(0, 0);
  }, [pathname]);

  // Ensure clicking a nav link to the current route also scrolls to top
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const anchor = target.closest("a") as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href) return;
      // only handle internal links
      try {
        const url = new URL(href, window.location.href);
        if (url.pathname === pathname) {
          // smooth scroll to top when clicking the same-route link
          document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
          document.body.scrollTo({ top: 0, behavior: "smooth" });
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      } catch {
        // ignore invalid URLs
      }
    };

    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navigation />
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
