import { useState, useEffect } from "react";
import { GithubIcon, LinkedinIcon, MailIcon, BriefcaseIcon, AwardIcon, BookOpenIcon, SunIcon, MoonIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  );

  useEffect(() => {
    setIsLoaded(true);
    
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen transition-colors duration-300">
      {/* Theme Toggle */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 right-4 z-50 rounded-full p-2 backdrop-blur-md bg-background/50 border border-border hover:scale-110 transition-all duration-300"
        onClick={toggleTheme}
      >
        {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
      </Button>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center container-padding bg-gradient-to-b from-background via-secondary/20 to-background">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1.5 text-sm bg-secondary rounded-full mb-6 shadow-lg animate-fade-up hover:scale-105 transition-transform duration-300">
            Welcome to my portfolio
          </span>
          <h1 className="text-4xl md:text-7xl font-bold mb-6 animate-fade-up bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary">
            Aniketh K
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up leading-relaxed">
            MERN Stack Developer passionate about crafting beautiful digital experiences with attention to detail
          </p>
          <div className="flex items-center justify-center space-x-4">
            <a 
              href="https://github.com/Anikethkunder" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 hover:bg-background rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <GithubIcon className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/anikethk" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 hover:bg-background rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <LinkedinIcon className="w-6 h-6" />
            </a>
            <a 
              href="mailto:anikethk724@gmail.com" 
              className="p-3 hover:bg-background rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <MailIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-secondary/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl container-padding">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-block px-4 py-1.5 text-sm bg-background rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
                About Me
              </span>
              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                Passionate MERN Stack Developer
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                I'm a dedicated web developer with expertise in the MERN (MongoDB, Express.js, React.js, Node.js) stack. 
                With a strong foundation in HTML, CSS, and JavaScript, I create responsive and dynamic web applications. 
                My SQL knowledge enables me to work effectively with databases, ensuring robust data management solutions.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {["MongoDB", "Express.js", "React.js", "Node.js", "SQL", "HTML", "CSS", "JavaScript"].map((tech) => (
                  <span key={tech} className="px-4 py-1.5 text-sm bg-background rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative group">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-100 hover:shadow-2xl">
                <img
                  src="/AnikethK.jpg"
                  alt="Aniketh K"
                  className="w-full h-full object-cover object-top animate-fade-in"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding">
        <div className="container mx-auto max-w-6xl container-padding">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 text-sm bg-secondary rounded-full mb-4 shadow-md hover:shadow-lg transition-shadow duration-300">
              Skills & Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">What I Do Best</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <BriefcaseIcon className="w-6 h-6" />,
                title: "Web Development",
                description: "Building responsive and performant web applications using MERN stack",
              },
              {
                icon: <AwardIcon className="w-6 h-6" />,
                title: "Database Management",
                description: "Designing and implementing efficient database solutions with SQL and MongoDB",
              },
              {
                icon: <BookOpenIcon className="w-6 h-6" />,
                title: "Frontend Development",
                description: "Creating intuitive user interfaces with React.js and modern CSS",
              },
            ].map((skill, index) => (
              <div
                key={index}
                className="glass-card p-8 rounded-2xl hover:translate-y-[-8px] transition-all duration-300 hover:shadow-2xl group"
              >
                <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-secondary/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl container-padding text-center">
          <span className="inline-block px-4 py-1.5 text-sm bg-background rounded-full mb-4 shadow-md hover:shadow-lg transition-shadow duration-300">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">Let's Work Together</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <a
            href="mailto:anikethk724@gmail.com"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <MailIcon className="w-5 h-5" />
            <span>Send me an email</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Index;
