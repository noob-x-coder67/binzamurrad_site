import { Link } from "react-router";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
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
              {/* <Link to="/portfolio" className="block text-gray-400 hover:text-[#C8A96A] transition-colors text-sm">
                Portfolio
              </Link> */}
              <Link
                to="/team"
                className="block text-gray-400 hover:text-[#C8A96A] transition-colors text-sm"
              >
                Team
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white mb-4 font-semibold">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail size={16} />
                <span>info@binzamurrad.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone size={16} />
                <span>+92 300 1234567</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin size={16} />
                <span>Pakistan Sweet Home</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white mb-4 font-semibold">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-[#C8A96A] transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#C8A96A] transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#C8A96A] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#C8A96A] transition-colors"
              >
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
