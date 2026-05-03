import { Github, Linkedin, Mail } from "lucide-react";

export function Team() {
  // ─────────────────────────────────────────────────────────────────────
  // TEAM MEMBERS — Update all 5 members with real info
  // Step 1: Create folder: public/team/
  // Step 2: Place each member photo inside public/team/
  // Step 3: Update name, role, bio, skills, image, and social links below
  // ─────────────────────────────────────────────────────────────────────
  const teamMembers = [
    {
      name: "Ali Ashir", // Replace with real name
      role: "Full Stack Developer", // Replace with real role
      bio: "Ali Ashir drives the technological vision and execution of the company’s digital products. With a strong foundation in web development, software engineering, and AI-driven solutions", // Replace with real bio
      skills: ["JavaScript", "Node JS", "Next Js", "MongoDB"], // Replace with real skills
      image: "public/Team/Ali_Ashir.jpeg", // Place photo as: public/team/member1.jpg
      github: "#", // Replace with real GitHub URL or remove
      linkedin: "#", // Replace with real LinkedIn URL or remove
      email: "member1@binzamurrad.com", // Replace with real email
    },
    {
      name: "Ameer Khan",
      role: "Video Editor",
      bio: "Video Grapher and Video Editor with 3+ years of experience in video production and editing. Passionate about creating compelling visual narratives.", // Replace with real bio
      skills: ["Premiere Pro", "After Effects", "DaVinci Resolve"], // Replace with real skills
      image: "public/Team/Ameer_Khan.jpeg", // Place photo as: public/team/member2.jpg
      github: "#",
      linkedin: "#",
      email: "member2@binzamurrad.com",
    },

    {
      name: "Meer Ahmad",
      role: "Database Manager",
      bio: "Meer Ahmad oversees the organization and management of our databases, ensuring data integrity, security, and optimal performance. With expertise in database design.", // Replace with real bio
      skills: ["SQL", "MongoDB", "PostgreSQL", "Oracle"],
      image: "/team/member4.jpg", // Place photo as: public/team/member4.jpg
      github: "#",
      linkedin: "#",
      email: "member4@binzamurrad.com",
    },
    {
      name: "Saud Akbar",
      role: "Ai Engineer",
      bio: "Saud Akbar is responsible for developing and implementing AI-driven solutions that enhance our digital products and services. Currently Learning Agentic Ai.", // Replace with real bio
      skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn"],
      image: "public/team/Saud.jpg", // Place photo as: public/team/member5.jpg
      github: "#",
      linkedin: "#",
      email: "member5@binzamurrad.com",
    },
    {
      name: "Hafiz Muhammad Maaz",
      role: "UI/UX Designer & React Developer",
      bio: "Creative graphic designer with 5+ years experience in logo design, branding, social media, UI/UX, and print design. Working with Pakistan Sweet Home since 2023.",
      skills: ["React", "Photoshop", "Figma", "Illustrator"],
      image: "public/team/Maaz.jpeg", // Place photo as: public/team/maaz.jpg
      github: "#", // Add GitHub if available
      linkedin: "#", // Add LinkedIn if available
      email: "maaz@binzamurrad.com",
    },
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <section className="py-24 px-6 bg-gradient-to-b from-[#0F3D2E]/20 to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl mb-6 text-white" style={{ fontFamily: "Poppins, sans-serif" }}>
              Our Team
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Meet the talented individuals behind BinZamurrad. Students from Pakistan Sweet Home
              working together to create exceptional digital experiences.
            </p>
          </div>

          {/* TEAM CARDS GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-[#111111] rounded-xl overflow-hidden border border-white/10 hover:border-[#C8A96A]/50 transition-all group">

                {/* MEMBER PHOTO
                    Place photo in public/team/ folder
                    Update image path in teamMembers array above */}
                <div className="aspect-square overflow-hidden bg-[#1a1a1a] flex items-center justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      // Shows placeholder text if photo not added yet
                      const parent = (e.target as HTMLImageElement).parentElement;
                      if (parent) {
                        (e.target as HTMLImageElement).style.display = "none";
                        parent.innerHTML = `<div class="text-[#C8A96A] text-6xl font-bold">${member.name.charAt(0)}</div>`;
                      }
                    }}
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl mb-2 text-white" style={{ fontFamily: "Poppins, sans-serif" }}>
                    {member.name}
                  </h3>
                  <p className="text-[#C8A96A] mb-4">{member.role}</p>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{member.bio}</p>

                  {/* SKILLS TAGS */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.skills.map((skill, idx) => (
                      <span key={idx} className="px-3 py-1 bg-[#0F3D2E]/30 border border-[#0F3D2E]/50 text-[#C8A96A] text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* SOCIAL LINKS — Replace # with real URLs */}
                  <div className="flex gap-3 pt-4 border-t border-white/10">
                    <a href={member.github} className="text-gray-400 hover:text-[#C8A96A] transition-colors">
                      <Github size={20} />
                    </a>
                    <a href={member.linkedin} className="text-gray-400 hover:text-[#C8A96A] transition-colors">
                      <Linkedin size={20} />
                    </a>
                    <a href={"mailto:" + member.email} className="text-gray-400 hover:text-[#C8A96A] transition-colors">
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOIN OUR MISSION CTA */}
      <section className="py-24 px-6 bg-gradient-to-r from-[#0F3D2E] to-[#0F3D2E]/80">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-6 text-white" style={{ fontFamily: "Poppins, sans-serif" }}>
            Join Our Mission
          </h2>
          <p className="text-gray-200 mb-8 text-lg">
            We are always looking for talented individuals to join our growing team.
          </p>
          {/* Update email below with real contact email */}
          <a
            href="mailto:info@binzamurrad.com"
            className="inline-block px-8 py-4 bg-[#C8A96A] text-black rounded-lg hover:bg-[#C8A96A]/90 transition-all"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
