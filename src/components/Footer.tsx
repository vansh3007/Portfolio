import { Heart, Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/vansh3007",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://linkedin.com/in/vansh-shrivastava-b59b05295",
    },
    {
      icon: Mail,
      label: "Email",
      url: "https://mail.google.com/mail/?view=cm&to=vanshshrivastava30@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      url: "tel:+918103579233",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Vansh Shrivastava</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Full Stack Developer passionate about creating innovative web and mobile solutions 
              that make a difference in people's lives.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {['About', 'Experience', 'Projects', 'Services', 'Skills', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase());
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-left text-primary-foreground/80 hover:text-accent transition-colors duration-200"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect With Me</h4>
            <div className="space-y-2">
              <p className="text-primary-foreground/80">vanshshrivastava30@gmail.com</p>
              <p className="text-primary-foreground/80">+91 8103579233</p>
              <p className="text-primary-foreground/80">Gwalior, India</p>
            </div>
            
            <div className="flex gap-4 pt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-1 text-primary-foreground/80">
              <span>© {currentYear} Made with</span>
              <Heart className="w-4 h-4 text-accent fill-current" />
              <span>by Vansh Shrivastava</span>
            </div>
            
            <button
              onClick={scrollToTop}
              className="px-4 py-2 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg transition-colors duration-200 text-sm font-medium"
            >
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;