import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Download,
  Mail,
  Eye,
  ArrowRight,
  Sparkles,
  Code,
  Smartphone,
} from "lucide-react";
import vanshProfile from "@/assets/vansh-profile.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-background to-gray-100">
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent/10 rounded-full animate-float"></div>
        <div
          className="absolute top-40 right-20 w-16 h-16 bg-primary/10 rounded-xl rotate-45 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-12 h-12 bg-accent/20 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-40 w-24 h-24 bg-primary/5 rounded-xl animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-mesh opacity-60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-8 animate-slide-right">
            {/* Badge + Stats at top on mobile */}
            <div className="space-y-6 lg:order-none order-first">
              {/* Floating badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium backdrop-blur-sm">
                <Sparkles className="w-4 h-4" />
                Available for new opportunities
              </div>

              {/* Stats */}
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-primary">Vansh</span>
                <br />
                <span className="bg-gradient-to-r from-accent to-orange-600 bg-clip-text text-transparent animate-glow drop-shadow-md">
                  Shrivastava
                </span>
              </h1>

              <div className="space-y-4">
                <p className="text-2xl lg:text-3xl text-foreground/90 font-medium">
                  Building intuitive web and mobile solutions
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                  with a passion for user experience and performance. Full Stack
                  Developer from Gwalior, India.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="text-center group">
                <div className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform">
                  3+
                </div>
                <div className="text-xs text-muted-foreground">Projects</div>
              </div>
              <div className="text-center group">
                <div className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform">
                  2
                </div>
                <div className="text-xs text-muted-foreground">Internships</div>
              </div>
              <div className="text-center group">
                <div className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform">
                  5+
                </div>
                <div className="text-xs text-muted-foreground">
                  Technologies
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="group bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <Eye className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1p4cFxwZmKp9bTtCrLx4FsCvM_yinpC95/view?usp=sharing",
                    "_blank"
                  )
                }
                className="group border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1"
              >
                <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Resume
              </Button>

              <Button
                size="lg"
                variant="secondary"
                onClick={() => scrollToSection("contact")}
                className="group hover:bg-accent/10 hover:text-accent transition-all duration-300 hover:-translate-y-1"
              >
                <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Let's Talk
              </Button>
            </div>
          </div>

          {/* RIGHT PROFILE (Hidden on mobile) */}
          <div className="hidden lg:flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              {/* Floating tech icons */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-blue-500/10 rounded-xl flex items-center justify-center animate-float backdrop-blur-sm border border-blue-500/20">
                <Code className="w-8 h-8 text-blue-500" />
              </div>
              <div
                className="absolute -bottom-8 -right-8 w-16 h-16 bg-green-500/10 rounded-xl flex items-center justify-center animate-float backdrop-blur-sm border border-green-500/20"
                style={{ animationDelay: "1.5s" }}
              >
                <Smartphone className="w-8 h-8 text-green-500" />
              </div>

              {/* Profile Card */}
              <Card className="relative p-8 bg-white/70 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-accent rounded-full p-1 animate-glow">
                    <div className="w-full h-full rounded-full bg-background"></div>
                  </div>
                  <div className="relative w-80 h-80 rounded-full overflow-hidden bg-gradient-to-br from-accent to-primary p-1">
                    <div className="w-full h-full rounded-full overflow-hidden bg-background">
                      <img
                        src={vanshProfile}
                        alt="Vansh Shrivastava"
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent rounded-full flex items-center justify-center shadow-lg animate-bounce">
                    <span className="text-3xl">👨‍💻</span>
                  </div>
                </div>
              </Card>
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
