import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export function Team() {
  const teamMembers = [
    {
      name: "Ali Ashir",
      role: "Full Stack Developer",
      bio: "Ali Ashir drives the technological vision...",
      skills: ["JavaScript", "Node JS", "Next Js", "MongoDB"],
      image: "/Team/Ali_Ashir.jpeg",
      github: "#",
      linkedin: "#",
      email: "member1@binzamurrad.com",
    },
    {
      name: "Ameer Khan",
      role: "Video Editor",
      bio: "Video Grapher and Video Editor with 3+ years...",
      skills: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
      image: "/Team/Ameer_Khan.jpeg",
      github: "#",
      linkedin: "#",
      email: "member2@binzamurrad.com",
    },
    {
      name: "Meer Ahmad",
      role: "Database Manager",
      bio: "Meer Ahmad oversees the organization...",
      skills: ["SQL", "MongoDB", "PostgreSQL", "Oracle"],
      image: "/Team/Meer_Ahmad.jpeg",
      github: "#",
      linkedin: "#",
      email: "member3@binzamurrad.com",
    },
    {
      name: "Saud Akbar",
      role: "Ai Engineer",
      bio: "Saud Akbar is responsible for developing...",
      skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn"],
      image: "/Team/Saud.jpg",
      github: "#",
      linkedin: "#",
      email: "member4@binzamurrad.com",
    },
    {
      name: "Hafiz Muhammad Maaz",
      role: "UI/UX Designer & React Developer",
      bio: "Creative graphic designer with 5+ years...",
      skills: ["React", "Photoshop", "Figma", "Illustrator"],
      image: "/Team/Maaz.jpeg",
      github: "#",
      linkedin: "#",
      email: "maaz@binzamurrad.com",
    },
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <section className="py-24 px-6 bg-gradient-to-b from-[#0F3D2E]/20 to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1
              className="text-5xl md:text-6xl mb-6 text-white"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Our Team
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Meet the talented individuals behind BinZamurrad. Students from
              Pakistan Sweet Home working together to create exceptional digital
              experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                className="bg-[#111111] rounded-xl overflow-hidden border border-white/10 hover:border-[#C8A96A]/50 transition-colors group"
              >
                <div className="aspect-square overflow-hidden bg-[#1a1a1a] flex items-center justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      const parent = img.parentElement;
                      if (parent) {
                        img.style.display = "none";
                        const placeholder = document.createElement("div");
                        placeholder.className =
                          "text-[#C8A96A] text-6xl font-bold";
                        placeholder.textContent = member.name.charAt(0);
                        parent.appendChild(placeholder);
                      }
                    }}
                  />
                </div>

                <div className="p-6">
                  <h3
                    className="text-2xl mb-2 text-white"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {member.name}
                  </h3>
                  <p className="text-[#C8A96A] mb-4">{member.role}</p>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-[#0F3D2E]/30 border border-[#0F3D2E]/50 text-[#C8A96A] text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4 border-t border-white/10">
                    <a
                      href={member.github}
                      className="text-gray-400 hover:text-[#C8A96A] transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={member.linkedin}
                      className="text-gray-400 hover:text-[#C8A96A] transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href={"mailto:" + member.email}
                      className="text-gray-400 hover:text-[#C8A96A] transition-colors"
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <motion.section
        className="py-24 px-6 bg-gradient-to-r from-[#0F3D2E] to-[#0F3D2E]/80"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-4xl md:text-5xl mb-6 text-white"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Join Our Mission
          </h2>
          <p className="text-gray-200 mb-8 text-lg">
            We are always looking for talented individuals to join our growing
            team.
          </p>
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <a
              href="mailto:info@binzamurrad.com"
              className="inline-block px-8 py-4 bg-[#C8A96A] text-black rounded-lg hover:bg-[#C8A96A]/90 transition-all font-semibold"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
