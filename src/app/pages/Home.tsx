import { Link } from "react-router";
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
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

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
      description: "We're with you every step of the way.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Growing Talent",
      description: "Passionate students eager to excel.",
    },
  ];

  const teamMembers = [
    {
      name: "Ahmed Khan",
      role: "Lead Developer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      name: "Fatima Ali",
      role: "UI/UX Designer",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
    {
      name: "Hassan Raza",
      role: "Full Stack Developer",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    },
  ];

  return (
    <div className="bg-[#0a0a0a]">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop"
            alt="Team collaboration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-[#0a0a0a]"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1
            className="text-6xl md:text-8xl mb-6 text-white tracking-tight"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            BinZamurrad
          </h1>
          <p
            className="text-2xl md:text-3xl text-[#C8A96A] mb-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            A Student-Led Digital Agency
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Building websites, apps, and digital experiences with purpose.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/portfolio"
              className="px-8 py-4 bg-[#0F3D2E] text-white rounded-lg hover:bg-[#0F3D2E]/90 transition-all flex items-center justify-center gap-2 group"
            >
              View Our Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-transparent border-2 border-[#C8A96A] text-[#C8A96A] rounded-lg hover:bg-[#C8A96A] hover:text-black transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-4xl md:text-5xl mb-6 text-white"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                About Us
              </h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                BinZamurrad is a student-led digital agency comprised of
                talented individuals from Pakistan Sweet Home. We are a
                mission-driven team of young professionals passionate about
                technology and making a positive impact.
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Our focus is on delivering high-quality IT services while
                fostering growth, learning, and community support. Every project
                we take on helps us develop our skills and contributes to our
                collective success.
              </p>
              <p className="text-gray-400 leading-relaxed">
                We combine fresh perspectives with dedication to create digital
                solutions that matter.
              </p>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=800&fit=crop"
                  alt="Team working together"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#0F3D2E] rounded-2xl -z-10"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#C8A96A] rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-[#0a0a0a] to-[#0F3D2E]/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
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
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 rounded-xl bg-[#111111] border border-white/10 hover:border-[#C8A96A]/50 transition-all group hover:shadow-xl"
              >
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
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-[#C8A96A] hover:text-white transition-colors group"
            >
              View All Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
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
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-[#0a0a0a] to-[#0F3D2E]/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl mb-4 text-white"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Meet Our Team
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Talented students passionate about technology and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#0F3D2E] group-hover:border-[#C8A96A] transition-all">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3
                  className="text-xl mb-2 text-white"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {member.name}
                </h3>
                <p className="text-[#C8A96A]">{member.role}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/team"
              className="inline-block px-8 py-4 bg-[#0F3D2E] text-white rounded-lg hover:bg-[#0F3D2E]/90 transition-all"
            >
              View Full Team
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-r from-[#0F3D2E] to-[#0F3D2E]/80">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-4xl md:text-5xl mb-6 text-white"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Let's Build Something Together
          </h2>
          <p className="text-gray-200 mb-8 text-lg">
            Ready to bring your digital project to life? Get in touch with us
            today.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-[#C8A96A] text-black rounded-lg hover:bg-[#C8A96A]/90 transition-all"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
