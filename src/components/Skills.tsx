const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 85 },
      { name: "TypeScript", level: 70 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Angular", level: 80 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js / Express", level: 90 },
      { name: "MongoDB", level: 88 },
      { name: " REST APIs", level: 92 },
    ],
  },
  {
    title: "AI & Tools",
    skills: [
      { name: "OpenAI", level: 75 },
      { name: "Git / GitHub", level: 95 },
      { name: "Figma", level: 75 },
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 lg:py-32 bg-secondary/20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            My Expertise
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit built over years of hands-on experience with 
            modern technologies and best practices.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="glass-card p-6 lg:p-8"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="font-heading text-xl font-semibold mb-6 gradient-text">
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 4 + skillIndex) * 0.1}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
