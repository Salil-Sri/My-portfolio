import { Briefcase, Calendar } from "lucide-react";

const experiences = [
 
  {
    title: "Product Development Development Intern",
    company: "Probtosoft Technologies Pvt Ltd",
    period: "12 Apr 2025 - 12 Jul 2025",
    description: "Gained foundational experience in web development while contributing to real client projects.",
    responsibilities: [
      "Built many features for using Angular and Firebase during my Probtosoft internship, gaining hands-on experience in real-world product development.",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 lg:py-32 bg-secondary/20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/4 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Career Journey
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 lg:pl-0 pb-12 last:pb-0">
              {/* Timeline Line */}
              <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px bg-border lg:-translate-x-1/2" />
              
              {/* Timeline Dot */}
              <div className="absolute left-0 lg:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background" />

              {/* Content */}
              <div className={`lg:w-1/2 ${index % 2 === 0 ? "lg:pr-12 lg:text-right" : "lg:pl-12 lg:ml-auto"}`}>
                <div className="glass-card p-6 hover-glow transition-all duration-300">
                  <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "lg:justify-end" : ""}`}>
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-sm text-primary font-medium">{exp.period}</span>
                  </div>
                  
                  <h3 className="font-heading text-xl font-semibold mb-1">
                    {exp.title}
                  </h3>
                  
                  <div className={`flex items-center gap-2 mb-3 text-muted-foreground ${index % 2 === 0 ? "lg:justify-end" : ""}`}>
                    <Briefcase className="w-4 h-4" />
                    <span className="text-sm">{exp.company}</span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    {exp.description}
                  </p>
                  
                  <ul className={`space-y-2 ${index % 2 === 0 ? "lg:text-right" : ""}`}>
                    {exp.responsibilities.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
