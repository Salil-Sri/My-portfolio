import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Alex is an exceptional developer who consistently delivers high-quality work. Their problem-solving skills and attention to detail are remarkable.",
    name: "Sarah Johnson",
    role: "CTO, TechCorp Inc.",
    avatar: "SJ",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 lg:py-32 bg-secondary/20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            What People Say
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card p-6 lg:p-8 hover-glow transition-all duration-300 hover:-translate-y-2"
            >
              <Quote className="w-10 h-10 text-primary/30 mb-4" />
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="font-heading font-semibold text-primary-foreground">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <h4 className="font-heading font-semibold">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
