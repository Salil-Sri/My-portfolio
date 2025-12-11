import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = [
  {
    degree: "Bachelor's Of Technology in Computer Science",
    institution: "Kamla Nehru Institute Of Technology, Sultanpur",
    year: "2023-26",
    achievements: ["GPA:8.6/10.0"],
    icon: GraduationCap,
  },
];

const certifications = [
  // { name: "AWS Solutions Architect", issuer: "Amazon", year: "2023" },
  // { name: "Google Cloud Professional", issuer: "Google", year: "2022" },
  // { name: "Meta Frontend Developer", issuer: "Meta", year: "2022" },
  // { name: "MongoDB Developer", issuer: "MongoDB", year: "2021" },
];

export const Education = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Academic Background
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Education */}
          <div>
            <h3 className="font-heading text-2xl font-semibold mb-6 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-primary" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="glass-card p-6 hover-glow transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <edu.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-lg mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-muted-foreground text-sm mb-2">
                        {edu.institution} • {edu.year}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {edu.achievements.map((achievement) => (
                          <span
                            key={achievement}
                            className="px-2 py-1 bg-secondary text-xs font-medium rounded"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          {/* <div>
            <h3 className="font-heading text-2xl font-semibold mb-6 flex items-center gap-3">
              <Award className="w-6 h-6 text-primary" />
              Certifications
            </h3>
            <div className="grid gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="glass-card p-4 flex items-center justify-between hover-glow transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">{cert.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {cert.year}
                  </span>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};
