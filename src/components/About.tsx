import { Code, Lightbulb, Rocket, Award } from "lucide-react";

const highlights = [
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable, scalable code with best practices",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Turning complex challenges into elegant solutions",
  },
  {
    icon: Rocket,
    title: "Fast Learner",
    description: "Quickly adapting to new technologies and frameworks",
  },
  {
    icon: Award,
    title: "Quality Focused",
    description: "Delivering pixel-perfect, high-performance applications",
  },
];

const achievements = [
  {
    label: "3 months Internship as Product Development Intern",
    link: "https://www.probtosoft.com/salil", // put your actual certificate URL here
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            About Me
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            Passionate Developer &{" "}
            <span className="gradient-text">Tech Enthusiast</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a full-stack developer web applications. My journey in tech
              started with a curiosity about how things work, which evolved into
              a passion for building digital solutions that make a difference.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in modern JavaScript frameworks. When I'm not coding,
              you'll find me exploring new technologies, contributing to
              open-source projects, or sharing knowledge with the developer
              community.
            </p>

            {/* Achievements */}
            <div className="pt-6">
              <h3 className="font-heading text-xl font-semibold mb-4">
                Certifications & Achievements
              </h3>
              <div className="flex flex-wrap gap-3">
                {achievements.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary hover:bg-primary/20 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Highlight Cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass-card p-6 hover-glow group transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-heading font-semibold text-lg mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
