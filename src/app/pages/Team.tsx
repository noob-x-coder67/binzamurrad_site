import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Github, Linkedin, Mail } from "lucide-react";

export function Team() {
  const teamMembers = [
    {
      name: "Ahmed Khan",
      role: "Lead Developer",
      bio: "Full-stack developer with expertise in React, Node.js, and cloud technologies. Passionate about building scalable applications.",
      skills: ["React", "Node.js", "TypeScript", "AWS"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      name: "Fatima Ali",
      role: "UI/UX Designer",
      bio: "Creative designer focused on user-centered design principles. Specializes in creating intuitive and beautiful interfaces.",
      skills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
    {
      name: "Hassan Raza",
      role: "Full Stack Developer",
      bio: "Versatile developer skilled in both frontend and backend technologies. Loves solving complex problems.",
      skills: ["JavaScript", "Python", "MongoDB", "Docker"],
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    },
    {
      name: "Zainab Malik",
      role: "Graphic Designer",
      bio: "Visual storyteller with a keen eye for detail. Creates compelling graphics that communicate brand messages effectively.",
      skills: ["Illustrator", "Photoshop", "Branding", "Print Design"],
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    },
    {
      name: "Ali Ahmed",
      role: "Video Editor",
      bio: "Creative video editor bringing stories to life through compelling visual narratives and seamless editing.",
      skills: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Motion Graphics"],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    },
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <section className="py-24 px-6 bg-gradient-to-b from-[#0F3D2E]/20 to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl mb-6 text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Our Team
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Meet the talented individuals behind BinZamurrad. Students from Pakistan Sweet Home working together to create exceptional digital experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-[#111111] rounded-xl overflow-hidden border border-white/10 hover:border-[#C8A96A]/50 transition-all group"
              >
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl mb-2 text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
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
                    <a href="#" className="text-gray-400 hover:text-[#C8A96A] transition-colors">
                      <Github size={20} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-[#C8A96A] transition-colors">
                      <Linkedin size={20} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-[#C8A96A] transition-colors">
                      <Mail size={20} />
                    </a>
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
            Join Our Mission
          </h2>
          <p className="text-gray-200 mb-8 text-lg">
            We're always looking for talented individuals to join our growing team.
          </p>
          <a
            href="mailto:careers@binzamurrad.com"
            className="inline-block px-8 py-4 bg-[#C8A96A] text-black rounded-lg hover:bg-[#C8A96A]/90 transition-all"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
