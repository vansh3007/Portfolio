import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Eye } from 'lucide-react';
import foodDeliveryApp from '@/assets/food-delivery-app.jpg';
import quizApp from '@/assets/quiz-app.png';
import wanderlustApp from '@/assets/wanderlust-app.png';

const Projects = () => {
  const projects = [
    {
      title: "Food Delivery App",
      description:
        "A comprehensive food delivery application featuring real-time order tracking, admin dashboard, and seamless user experience. Built with modern mobile development practices.",
      image: foodDeliveryApp,
      technologies: [
        "React Native",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Socket.io",
      ],
      features: [
        "Real-time order tracking",
        "Admin dashboard",
        "Payment integration",
        "Restaurant management",
        "Push notifications",
      ],
      links: {
        live: "https://drive.google.com/file/d/15Em8sHogV1nilJFw0wVE3ExCRyH6WuX7/view",
        github: "#",
      },
    },
    {
      title: "Placement Preparation Web App",
      description:
        "An interactive quiz platform designed for placement preparation with real-time testing, progress tracking, and comprehensive analytics.",
      image: quizApp,
      technologies: [
        "React.js",
        "Express.js",
        "MySQL",
        "Prisma ORM",
        "Tailwind CSS",
      ],
      features: [
        "Real-time quiz testing",
        "Progress analytics",
        "Performance tracking",
        "Multiple question types",
        "Leaderboard system",
      ],
      links: {
        live: "https://placement-quiz-practice-portal.netlify.app/login",
        github: "https://github.com/vansh3007/PlacementQuizProject",
      },
    },
    {
      title: "Wanderlust",
      description:
        "A modern property rental application with advanced booking system, user authentication, and seamless property management features.",
      image: wanderlustApp,
      technologies: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Render CI/CD",
      ],
      features: [
        "Property booking system",
        "User authentication",
        "Property listings",
        "Search and filtering",
        "Review system",
      ],
      links: {
        live: "https://wanderlust-mini-project.onrender.com/listing",
        github: "https://github.com/vansh3007/Wanderlust-Project",
      },
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing innovative solutions built with modern technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-card overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">{project.title}</h3>
                  <p className="text-foreground/80 text-sm leading-relaxed">{project.description}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2 text-sm">Key Features</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-foreground/70">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2 text-sm">Technologies</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs border-accent/30 text-accent">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
                    onClick={() => window.open(project.links.live, '_blank')}
                  >
                    <Eye className="w-4 h-4 mr-1" />
                    Live Demo
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => window.open(project.links.github, '_blank')}
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;