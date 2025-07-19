import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: "B.Tech in Electronics and Telecommunications",
      school: "Madhav Institute of Technology and Science",
      period: "2022 – 2026",
      location: "Gwalior, India"
    },
    {
      degree: "Senior Secondary (XII)",
      school: "Kiddy's Corner School",
      period: "2020 – 2022",
      location: "Gwalior, India"
    },
    {
      degree: "Secondary (X)",
      school: "K.G Children School",
      period: "2018 – 2020",
      location: "Gwalior, India"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating innovative solutions that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-6">
            <Card className="p-8 shadow-lg border-0 bg-gradient-to-br from-card to-gray-50">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-primary mb-6">My Journey</h3>
                <div className="space-y-4 text-foreground/80 leading-relaxed">
                  <p>
                    I'm a passionate Full Stack Developer with a deep enthusiasm for creating 
                    scalable, user-centric applications that solve real-world problems. My journey 
                    in technology began with a curiosity about how things work, which evolved into 
                    a commitment to innovation in web technologies.
                  </p>
                  <p>
                    Specializing in the MERN stack, I focus on building intuitive web and mobile 
                    solutions that prioritize both user experience and performance. My approach 
                    combines technical expertise with a keen eye for design, ensuring that every 
                    project not only functions flawlessly but also delivers an exceptional user experience.
                  </p>
                  <p>
                    Beyond coding, I'm passionate about leadership and community building. As the 
                    President of the Nutrition Ninja Club and a Web Team Lead, I enjoy mentoring 
                    others and contributing to initiatives that make a positive impact.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary mb-8">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                          <GraduationCap className="w-6 h-6 text-accent" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-primary mb-2">{edu.degree}</h4>
                        <p className="text-foreground/80 font-medium mb-2">{edu.school}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {edu.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {edu.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;