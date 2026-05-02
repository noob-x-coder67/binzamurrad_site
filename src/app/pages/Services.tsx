import { Code, Smartphone, Palette, Layers, Video, TrendingUp, Check } from "lucide-react";
import { Link } from "react-router";

export function Services() {
  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Website Development",
      description: "We create modern, responsive websites that engage your audience and drive results.",
      features: [
        "Custom website design and development",
        "Responsive layouts for all devices",
        "SEO optimization",
        "Content Management Systems",
        "E-commerce solutions",
        "Performance optimization",
      ],
      technologies: ["React", "Next.js", "WordPress", "Tailwind CSS"],
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Web Applications",
      description: "Full-stack web applications built with cutting-edge technologies to solve your business challenges.",
      features: [
        "Custom web application development",
        "Database design and integration",
        "API development and integration",
        "User authentication and authorization",
        "Real-time features",
        "Cloud deployment",
      ],
      technologies: ["Node.js", "React", "MongoDB", "PostgreSQL"],
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "UI/UX Design",
      description: "User-centered design that creates intuitive and delightful experiences for your customers.",
      features: [
        "User research and testing",
        "Wireframing and prototyping",
        "Visual design",
        "Design systems",
        "Usability testing",
        "Accessibility compliance",
      ],
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision"],
    },
    {
      icon: <Layers className="w-12 h-12" />,
      title: "Graphic Design",
      description: "Eye-catching visuals that communicate your brand message and captivate your audience.",
      features: [
        "Brand identity design",
        "Logo design",
        "Marketing materials",
        "Social media graphics",
        "Print design",
        "Illustration",
      ],
      technologies: ["Illustrator", "Photoshop", "InDesign", "Canva"],
    },
    {
      icon: <Video className="w-12 h-12" />,
      title: "Video Editing",
      description: "Professional video content that tells your story and engages your audience.",
      features: [
        "Video editing and post-production",
        "Motion graphics",
        "Color grading",
        "Sound design",
        "Social media video content",
        "Promotional videos",
      ],
      technologies: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Final Cut Pro"],
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies that grow your online presence and drive conversions.",
      features: [
        "Social media management",
        "Content marketing",
        "SEO and SEM",
        "Email marketing",
        "Analytics and reporting",
        "Brand strategy",
      ],
      technologies: ["Google Analytics", "Meta Ads", "Mailchimp", "SEMrush"],
    },
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <section className="py-24 px-6 bg-gradient-to-b from-[#0F3D2E]/20 to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl mb-6 text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Our Services
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive digital solutions to help your business grow and succeed online.
            </p>
          </div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#111111] rounded-2xl p-8 md:p-12 border border-white/10 hover:border-[#C8A96A]/50 transition-all"
              >
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-1">
                    <div className="w-20 h-20 rounded-xl bg-[#0F3D2E] flex items-center justify-center mb-6 text-[#C8A96A]">
                      {service.icon}
                    </div>
                    <h3 className="text-3xl mb-4 text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {service.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-[#0F3D2E]/30 border border-[#0F3D2E]/50 text-[#C8A96A] text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <h4 className="text-xl mb-6 text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      What We Offer
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-[#C8A96A] flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-black" />
                          </div>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-r from-[#0F3D2E] to-[#0F3D2E]/80">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-6 text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Ready to Get Started?
          </h2>
          <p className="text-gray-200 mb-8 text-lg">
            Let's discuss how we can help bring your project to life.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-[#C8A96A] text-black rounded-lg hover:bg-[#C8A96A]/90 transition-all"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
