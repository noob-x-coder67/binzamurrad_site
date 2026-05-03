import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect this form to a real email service
    // Options: EmailJS, Formspree, or your own backend
    console.log("Form submitted:", formData);
    alert("Message sent! We will get back to you soon.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl mb-6 text-white" style={{ fontFamily: "Poppins, sans-serif" }}>
              Get in Touch
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Have a project in mind? We would love to hear from you. Send us a message
              and we will respond as soon as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">

            {/* LEFT — CONTACT INFO */}
            <div>
              <h2 className="text-3xl mb-6 text-white" style={{ fontFamily: "Poppins, sans-serif" }}>
                Contact Information
              </h2>
              <div className="space-y-6 mb-12">

                {/* EMAIL — Replace with real email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#0F3D2E] flex items-center justify-center text-[#C8A96A] flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="text-white mb-1">Email</h3>
                    <p className="text-gray-400">info@binzamurrad.com</p>
                  </div>
                </div>

                {/* PHONE — Replace with real phone number */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#0F3D2E] flex items-center justify-center text-[#C8A96A] flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="text-white mb-1">Phone</h3>
                    <p className="text-gray-400">+92 302 0676767</p>
                  </div>
                </div>

                {/* LOCATION */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#0F3D2E] flex items-center justify-center text-[#C8A96A] flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="text-white mb-1">Location</h3>
                    <p className="text-gray-400">Pakistan Sweet Home</p>
                    <p className="text-gray-400">H-9/4, Islamabad, Pakistan</p>
                  </div>
                </div>
              </div>

              {/* WHATSAPP — Replace number with real WhatsApp number */}
              <div className="bg-gradient-to-br from-[#0F3D2E]/30 to-transparent border border-[#0F3D2E]/50 rounded-xl p-8">
                <h3 className="text-xl mb-4 text-white" style={{ fontFamily: "Poppins, sans-serif" }}>
                  Prefer WhatsApp?
                </h3>
                <p className="text-gray-400 mb-6">
                  Get in touch with us directly on WhatsApp for quick responses.
                </p>
                {/* Replace 92XXXXXXXXXX with real WhatsApp number (no spaces or dashes) */}
                <a
                  href="https://wa.me/923020676767"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-lg hover:bg-[#25D366]/90 transition-all"
                >
                  <MessageSquare size={20} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* RIGHT — CONTACT FORM */}
            <div>
              <form onSubmit={handleSubmit} className="bg-[#111111] rounded-xl p-8 border border-white/10">
                <h2 className="text-3xl mb-6 text-white" style={{ fontFamily: "Poppins, sans-serif" }}>
                  Send us a Message
                </h2>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2">Your Name</label>
                    <input
                      type="text" id="name" name="name"
                      value={formData.name} onChange={handleChange} required
                      className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#C8A96A] transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white mb-2">Email Address</label>
                    <input
                      type="email" id="email" name="email"
                      value={formData.email} onChange={handleChange} required
                      className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#C8A96A] transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-white mb-2">Message</label>
                    <textarea
                      id="message" name="message"
                      value={formData.message} onChange={handleChange} required rows={6}
                      className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#C8A96A] transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-[#0F3D2E] text-white rounded-lg hover:bg-[#0F3D2E]/90 transition-all flex items-center justify-center gap-2 group"
                  >
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>

              <div className="mt-6 p-6 bg-gradient-to-br from-[#C8A96A]/20 to-transparent border border-[#C8A96A]/30 rounded-xl">
                <h3 className="text-white mb-2">Quick Response Time</h3>
                <p className="text-gray-400 text-sm">
                  We typically respond to all inquiries within 24 hours during business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
