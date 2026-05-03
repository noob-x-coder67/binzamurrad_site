import { Link } from "react-router";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* BRAND */}
          <div>
            <h3
              className="text-xl font-bold text-white mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              BinZamurrad
            </h3>
            <p className="text-gray-400 text-sm">
              A student-led digital agency from Pakistan Sweet Home, building
              digital experiences with purpose.
            </p>
          </div>

          {/* QUICK LINKS — Portfolio hidden until first project is ready */}
          <div>
            <h4 className="text-white mb-4 font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <Link
                to="/"
                className="block text-gray-400 hover:text-[#C8A96A] transition-colors text-sm"
              >
                Home
              </Link>
              <Link
                to="/services"
                className="block text-gray-400 hover:text-[#C8A96A] transition-colors text-sm"
              >
                Services
              </Link>
              {/* Portfolio — uncomment when first project is ready
              <Link to="/portfolio" className="block text-gray-400 hover:text-[#C8A96A] transition-colors text-sm">Portfolio</Link> */}
              <Link
                to="/team"
                className="block text-gray-400 hover:text-[#C8A96A] transition-colors text-sm"
              >
                Team
              </Link>
              <Link
                to="/contact"
                className="block text-gray-400 hover:text-[#C8A96A] transition-colors text-sm"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* CONTACT INFO — Replace with real info */}
          <div>
            <h4 className="text-white mb-4 font-semibold">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail size={16} />
                {/* Replace with real email */}
                <span>info@binzamurrad.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone size={16} />
                {/* Replace with real phone number */}
                <span>+92 302 0676767</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin size={16} />
                <span>Pakistan Sweet Home, H-9/4, Islamabad</span>
              </div>
            </div>
          </div>

          {/* SOCIAL LINKS — Replace # with real URLs */}
          <div>
            <h4 className="text-white mb-4 font-semibold">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/PakistanSweetHome"
                className="text-gray-400 hover:text-[#C8A96A] transition-colors"
              >
                {/* Replace href with real Facebook URL */}
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/pakistansweethomeofficial/"
                className="text-gray-400 hover:text-[#C8A96A] transition-colors"
              >
                {/* Replace href with real Instagram URL */}
                <Instagram size={20} />
              </a>
      
              <a
                href="https://www.linkedin.com/company/pakistan-sweet-home-official"
                className="text-gray-400 hover:text-[#C8A96A] transition-colors"
              >
                {/* Replace href with real LinkedIn URL */}
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
          <p>&copy; 2026 BinZamurrad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
