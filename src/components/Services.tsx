import { Card, CardContent } from '@/components/ui/card';
import { Code, Smartphone, Palette, Database, Cloud, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Full Stack Web Development",
      description: "Building scalable web applications using the MERN stack with modern development practices and clean architecture.",
      features: ["React.js & Next.js", "Node.js & Express.js", "MongoDB & SQL", "RESTful APIs"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Creating cross-platform mobile applications with React Native for seamless user experiences across iOS and Android.",
      features: ["React Native", "Cross-platform", "Native Performance", "App Store Deployment"]
    },
    {
      icon: Palette,
      title: "UI/UX Design & Components",
      description: "Designing intuitive user interfaces and building reusable component libraries for consistent user experiences.",
      features: ["Component Libraries", "Responsive Design", "Tailwind CSS", "Modern UI Patterns"]
    },
    {
      icon: Database,
      title: "API Integration & Database Design",
      description: "Integrating third-party APIs and designing efficient database schemas for optimal performance and scalability.",
      features: ["REST & GraphQL", "Database Optimization", "Prisma ORM", "Data Modeling"]
    },
    {
      icon: Cloud,
      title: "Deployment & CI/CD",
      description: "Setting up robust deployment pipelines and cloud infrastructure for reliable application delivery.",
      features: ["Cloud Deployment", "CI/CD Pipelines", "Performance Monitoring", "Scalable Architecture"]
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimizing applications for speed, efficiency, and user experience through best practices and modern techniques.",
      features: ["Code Optimization", "Bundle Analysis", "Performance Metrics", "SEO Enhancement"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            Services I Offer
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive development solutions tailored to your needs
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-card hover:-translate-y-1">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">{service.title}</h3>
                </div>

                <p className="text-foreground/80 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-foreground/70">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;