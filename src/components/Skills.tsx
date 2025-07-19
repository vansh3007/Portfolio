import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Monitor, Server, Database, Settings, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["JavaScript", "Python", "Java", "C", "C++", "TypeScript"],
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      title: "Frontend Development",
      icon: Monitor,
      skills: ["React.js", "React Native", "Next.js", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3"],
      color: "bg-green-500/10 text-green-600"
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: ["Node.js", "Express.js", "RESTful APIs", "GraphQL", "WebSocket", "Microservices"],
      color: "bg-purple-500/10 text-purple-600"
    },
    {
      title: "Database & ORM",
      icon: Database,
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Prisma", "Mongoose", "SQL"],
      color: "bg-orange-500/10 text-orange-600"
    },
    {
      title: "Tools & Technologies",
      icon: Settings,
      skills: ["Git", "GitHub", "WordPress", "Docker", "AWS", "Render", "Vercel", "Postman"],
      color: "bg-red-500/10 text-red-600"
    },
    {
      title: "Leadership & Soft Skills",
      icon: Users,
      skills: ["Team Leadership", "Project Management", "Mentoring", "Public Speaking", "Problem Solving"],
      color: "bg-indigo-500/10 text-indigo-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern digital solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-card group">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, i) => (
                    <Badge 
                      key={i} 
                      variant="secondary" 
                      className="px-3 py-1 bg-accent/10 text-accent hover:bg-accent/20 transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Leadership Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-primary text-center mb-12">Leadership Experience</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-lg border-0 bg-gradient-to-br from-accent/5 to-primary/5">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h4 className="text-xl font-bold text-primary">President</h4>
                <p className="text-lg font-semibold text-foreground/80">Nutrition Ninja Club</p>
                <p className="text-sm text-muted-foreground">2024 – Present</p>
                <p className="text-foreground/70">
                  Leading wellness initiatives and promoting healthy lifestyle choices among students
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Code className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-primary">Web Team Lead</h4>
                <p className="text-lg font-semibold text-foreground/80">College Fest</p>
                <p className="text-sm text-muted-foreground">2023 – 2024</p>
                <p className="text-foreground/70">
                  Led the development team for college festival website and digital initiatives
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;