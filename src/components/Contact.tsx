import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "vanshshrivastava30@gmail.com",
      link: "https://mail.google.com/mail/?view=cm&to=vanshshrivastava30@gmail.com",
    },

    {
      icon: Phone,
      label: "Phone",
      value: "+91 8103579233",
      link: "tel:+918103579233",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "vansh-shrivastava-b59b05295",
      link: "https://linkedin.com/in/vansh-shrivastava-b59b05295",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "vansh3007",
      link: "https://github.com/vansh3007",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Gwalior, India",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interested in collaborating or just want to say hello? Here's how
            you can reach me.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
         
            <Card className="shadow-lg border-0 bg-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <p className="font-semibold text-primary">
                          {item.label}
                        </p>
                        {item.link !== "#" ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground/80 hover:text-accent transition-colors duration-200"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-foreground/80">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-gradient-to-br from-accent/5 to-primary/5">
              <CardContent className="p-8 text-center">
                <h4 className="text-xl font-bold text-primary mb-4">
                  Let's Build Something Amazing
                </h4>
                <p className="text-foreground/80 mb-6">
                  Whether you’re planning a product, starting a company, or just
                  want to brainstorm, I’m excited to connect and contribute.
                  Let’s make your vision a reality.
                </p>
                <div className="flex justify-center gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      window.open(
                        "https://linkedin.com/in/vansh-shrivastava-b59b05295",
                        "_blank"
                      )
                    }
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      window.open("https://github.com/vansh3007", "_blank")
                    }
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>
         
        </div>
      </div>
    </section>
  );
};

export default Contact;
