import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "Growthline Solutions LLP",
      period: "Dec 2024 – Feb 2025",
      location: "Remote",
      type: "Internship",
      achievements: [
        "Built a full-stack MERN application with high performance optimization",
        "Designed cloud SQL data pipelines, improving data retrieval efficiency by 45%",
        "Implemented real-time features using WebSocket technology",
        "Collaborated with cross-functional teams to deliver scalable solutions"
      ],
      skills: ["React.js", "Node.js", "MongoDB", "Express.js", "Cloud SQL", "WebSocket"]
    },
    {
      title: "Web Development Intern",
      company: "NULLCLASS EdTech Pvt. Ltd.",
      period: "Jun 2024 – Jul 2024",
      location: "Remote",
      type: "Internship",
      achievements: [
        "Delivered React and Node-based projects with reusable component architecture",
        "Reduced UI development and rework time by 30% through component optimization",
        "Implemented responsive design patterns for better user experience",
        "Contributed to the development of educational technology platforms"
      ],
      skills: ["React.js", "Node.js", "JavaScript", "CSS3", "Responsive Design"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building expertise through hands-on experience and innovative projects
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-card">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-3 gap-6">
                  {/* Company Info */}
                  <div className="lg:col-span-1 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                        <Briefcase className="w-6 h-6 text-accent" />
                      </div>
                      <Badge variant="secondary" className="bg-accent/10 text-accent">
                        {exp.type}
                      </Badge>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">{exp.title}</h3>
                      <p className="text-lg font-semibold text-foreground/80 mb-3">{exp.company}</p>
                      
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h4 className="font-semibold text-primary mb-4">Key Achievements</h4>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-foreground/80">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-primary mb-4">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <Badge key={i} variant="outline" className="border-accent/30 text-accent">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;