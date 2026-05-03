import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

export function Portfolio() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce platform with real-time inventory management and secure payment integration.",
      image:
        "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=600&fit=crop",
      tools: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Web Development",
    },
    {
      title: "Healthcare Dashboard",
      description:
        "Comprehensive dashboard for managing patient records, appointments, and medical data.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      tools: ["React", "TypeScript", "PostgreSQL", "Chart.js"],
      category: "Web Application",
    },
    {
      title: "Restaurant Mobile App Design",
      description:
        "Beautiful and intuitive mobile app design for a premium restaurant chain.",
      image:
        "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&h=600&fit=crop",
      tools: ["Figma", "Adobe XD", "Prototyping"],
      category: "UI/UX Design",
    },
    {
      title: "Brand Identity Package",
      description:
        "Complete brand identity design including logo, color palette, and marketing materials.",
      image:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop",
      tools: ["Illustrator", "Photoshop", "InDesign"],
      category: "Graphic Design",
    },
    {
      title: "Product Launch Video",
      description:
        "Dynamic promotional video for a tech startup product launch campaign.",
      image:
        "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop",
      tools: ["Premiere Pro", "After Effects", "Motion Graphics"],
      category: "Video Editing",
    },
    {
      title: "Social Media Campaign",
      description:
        "Comprehensive digital marketing campaign that increased engagement by 300%.",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
      tools: ["Meta Ads", "Analytics", "Canva", "Mailchimp"],
      category: "Digital Marketing",
    },
    {
      title: "Education Platform",
      description:
        "Online learning platform with video courses, quizzes, and progress tracking.",
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
      tools: ["React", "Firebase", "Tailwind CSS"],
      category: "Web Application",
    },
    {
      title: "Real Estate Website",
      description:
        "Modern property listing website with advanced search and virtual tour features.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      tools: ["Next.js", "Sanity CMS", "Mapbox"],
      category: "Web Development",
    },
    {
      title: "Fitness App Interface",
      description:
        "Clean and motivating UI design for a fitness tracking mobile application.",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop",
      tools: ["Figma", "User Research", "Prototyping"],
      category: "UI/UX Design",
    },
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <section className="py-24 px-6 bg-gradient-to-b from-[#0F3D2E]/20 to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          {/* MOTION: heading fades up on scroll */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1
              className="text-5xl md:text-6xl mb-6 text-white"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Our Portfolio
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Explore our recent projects and see how we have helped clients
              achieve their digital goals.
            </p>
          </motion.div>

          {/* MOTION: each project card fades up one by one with stagger + lifts on hover */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-[#111111] rounded-xl overflow-hidden border border-white/10 hover:border-[#C8A96A]/50 transition-all"
              >
                <div className="aspect-video overflow-hidden bg-[#1a1a1a]">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <div className="mb-3">
                    <span className="px-3 py-1 bg-[#0F3D2E]/30 border border-[#0F3D2E]/50 text-[#C8A96A] text-xs rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3
                    className="text-xl mb-3 text-white"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-[#1a1a1a] text-gray-400 text-xs rounded"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-4 border-t border-white/10">
                    <a
                      href="#"
                      className="flex items-center gap-2 text-gray-400 hover:text-[#C8A96A] transition-colors text-sm"
                    >
                      <ExternalLink size={16} />
                      View Project
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2 text-gray-400 hover:text-[#C8A96A] transition-colors text-sm"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MOTION: CTA section fades up */}
      <motion.section
        className="py-24 px-6 bg-gradient-to-r from-[#0F3D2E] to-[#0F3D2E]/80"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-4xl md:text-5xl mb-6 text-white"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Want to See Your Project Here?
          </h2>
          <p className="text-gray-200 mb-8 text-lg">
            Let us collaborate and create something amazing together.
          </p>
          <motion.a
            href="/contact"
            className="inline-block px-8 py-4 bg-[#C8A96A] text-black rounded-lg hover:bg-[#C8A96A]/90 transition-all font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
}
