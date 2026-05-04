import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code,
  Palette,
  Video,
  TrendingUp,
  Layers,
  Smartphone,
  Target,
  Users,
  Award,
  Heart,
} from "lucide-react";

export function Home() {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Website Development",
      description:
        "Custom websites built with modern technologies and best practices.",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Web Applications",
      description: "Full-stack applications tailored to your business needs.",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that users love.",
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Graphic Design",
      description: "Eye-catching visuals for your brand and marketing.",
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Video Editing",
      description: "Professional video content that tells your story.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "Strategies that drive growth and engagement.",
    },
  ];

  const reasons = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Purpose-Driven Team",
      description: "Every project supports our mission and growth.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Affordable Solutions",
      description: "Quality services at competitive rates.",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Creative Mindset",
      description: "Fresh perspectives and innovative approaches.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Dedicated Support",
      description: "We are with you every step of the way.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Growing Talent",
      description: "Passionate students eager to excel.",
    },
  ];

  const teamMembers = [
    {
      name: "Ali Ashir",
      role: "Full Stack Developer",
      image: "/Team/Ali_Ashir.jpg",
    },
    {
      name: "Ameer Khan",
      role: "Video Editor",
      image: "/Team/Ameer_Khan.jpg",
    },
    {
      name: "Meer Ahmad",
      role: "Frontend Developer",
      image: "/Team/Meer_Ahmad.jpg",
    },
    { name: "Saud Akbar", role: "AI Engineer", image: "/Team/Saud.jpg" },
    {
      name: "Hafiz M Maaz",
      role: "UI/UX & React Developer",
      image: "/Team/Maaz.jpg",
    },
  ];

  return (
    <div className="bg-[#0a0a0a]">
      {/* ── HERO SECTION ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/Hero_pic.jpg"
            alt="Team collaboration"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-[#0a0a0a]"></div>
        </div>

        {/* MOTION: hero text fades up on page load */}
        <motion.div
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1
            className="text-6xl md:text-8xl mb-6 text-white tracking-tight font-bold"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            BinZamurrad
          </h1>
          <p
            className="text-2xl md:text-3xl text-[#C8A96A] mb-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            A Student-Led Digital Agency.
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Building websites, apps, and digital experiences with purpose.
          </p>

          {/* MOTION: buttons fade in slightly after heading */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Portfolio link — uncomment when first project is ready
            <Link to="/portfolio" className="px-8 py-4 bg-[#0F3D2E] text-white rounded-lg hover:bg-[#0F3D2E]/90 transition-all flex items-center justify-center gap-2 group">
              View Our Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link> */}
            <Link
              to="/services"
              className="px-8 py-4 bg-[#0F3D2E] text-white rounded-lg hover:bg-[#0F3D2E]/90 transition-all flex items-center justify-center gap-2 group"
            >
              Our Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-transparent border-2 border-[#C8A96A] text-[#C8A96A] rounded-lg hover:bg-[#C8A96A] hover:text-black transition-all"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ── ABOUT US SECTION ── */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* MOTION: text slides in from left on scroll */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h2
                className="text-4xl md:text-5xl mb-6 text-white"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                About Us
              </h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                BinZamurrad is a student-led digital agency born from the heart
                of <span className="text-[#C8A96A]">Pakistan Sweet Home</span> —
                the largest orphanage in South Asia, founded by the legendary{" "}
                <span className="text-white font-semibold">
                  Mr. Zamurrad Khan (Hilal-e-Imtiaz)
                </span>
                . Our agency reflects his vision: empowering young talent to
                build, create, and make a positive impact through technology.
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                We are a team of passionate students delivering high-quality
                digital services from web development and UI/UX design to
                graphic design, video editing, and digital marketing. Every
                project we take on helps us grow and contributes to our
                collective mission.
              </p>
              <p className="text-gray-400 leading-relaxed">
                We combine fresh perspectives with dedication to create digital
                solutions that matter.
              </p>
            </motion.div>

            {/* MOTION: image slides in from right on scroll */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/about_us_pic.JPG"
                  alt="Mr. Zamurrad Khan - Founder, Pakistan Sweet Home"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#0F3D2E] rounded-2xl -z-10"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#C8A96A] rounded-2xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SERVICES SECTION ── */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#0a0a0a] to-[#0F3D2E]/10">
        <div className="max-w-7xl mx-auto">
          {/* MOTION: heading fades up on scroll */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-4xl md:text-5xl mb-4 text-white"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Our Services
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We offer a comprehensive range of digital services to help your
              business thrive online.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              // MOTION: each card fades up one by one with stagger delay + lifts on hover
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="p-8 rounded-xl bg-[#111111] border border-white/10 hover:border-[#C8A96A]/50 transition-all group hover:shadow-xl h-full">
                  <div className="w-16 h-16 rounded-lg bg-[#0F3D2E] flex items-center justify-center mb-6 text-[#C8A96A] group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3
                    className="text-xl mb-3 text-white"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* MOTION: link fades in after cards */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-[#C8A96A] hover:text-white transition-colors group"
            >
              View All Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── WHY CHOOSE US SECTION ── */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          {/* MOTION: heading fades up */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-4xl md:text-5xl mb-4 text-white"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Why Choose Us
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We bring unique value through our commitment, creativity, and
              drive to succeed.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              // MOTION: each card scales up one by one + lifts on hover
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="p-6 rounded-xl bg-gradient-to-br from-[#0F3D2E]/20 to-transparent border border-[#0F3D2E]/30 hover:border-[#C8A96A]/50 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-[#C8A96A] flex items-center justify-center mb-4 text-black">
                  {reason.icon}
                </div>
                <h3
                  className="text-lg mb-2 text-white"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {reason.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM SECTION ── */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#0a0a0a] to-[#0F3D2E]/10">
        <div className="max-w-7xl mx-auto">
          {/* MOTION: heading fades up */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-4xl md:text-5xl mb-4 text-white"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Meet Our Team
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Talented students from Pakistan Sweet Home, passionate about
              technology and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
            {teamMembers.map((member, index) => (
              // MOTION: each member scales up one by one + lifts on hover
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
              >
                <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#0F3D2E] group-hover:border-[#C8A96A] transition-all bg-[#111111] flex items-center justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
                <h3
                  className="text-xl mb-2 text-white"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {member.name}
                </h3>
                <p className="text-[#C8A96A] text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>

          {/* MOTION: button fades in last */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link
              to="/team"
              className="inline-block px-8 py-4 bg-[#0F3D2E] text-white rounded-lg hover:bg-[#0F3D2E]/90 transition-all"
            >
              View Full Team
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="py-24 px-6 bg-gradient-to-r from-[#0F3D2E] to-[#0F3D2E]/80">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2
            className="text-4xl md:text-5xl mb-6 text-white"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Let us Build Something Together
          </h2>
          <p className="text-gray-200 mb-8 text-lg">
            Ready to bring your digital project to life? Get in touch with us
            today.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-[#C8A96A] text-black rounded-lg hover:bg-[#C8A96A]/90 transition-all font-semibold"
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
