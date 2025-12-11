import { ArrowDown, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "-3s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full animate-fade-in">
              <span className="text-primary text-sm font-medium">
                Available for opportunities
              </span>
            </div>

            <h1
              className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold mb-6 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              Hi, I'm <span className="gradient-text">Salil Srivastava</span>
            </h1>

            <p
              className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Full-Stack Developer(Mern Stack , Mean Stack)
            </p>

            <p
              className="text-muted-foreground mb-10 max-w-xl animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              Crafting elegant digital experiences with cutting-edge
              technologies. Passionate about building scalable applications and
              exploring AI innovations.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <a href="/SalilSris_Resume.pdf" download>
                <Button variant="hero" size="lg">
                  <Download size={20} />
                  Download Resume
                </Button>
              </a>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#contact">
                  <Mail size={20} />
                  Hire Me
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div
            className="flex-shrink-0 animate-scale-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/50 to-accent/50 rounded-full blur-2xl opacity-40 animate-pulse-glow" />

              {/* Image Container */}
              <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary/30">
                <div className="w-full h-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                  <span className="text-6xl lg:text-8xl font-heading font-bold gradient-text">
                    SS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a
            href="#about"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};
