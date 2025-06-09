
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Index = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navigationItems = [
    { name: "about", path: "/about" },
    { name: "posts", path: "/posts" },
    { name: "projects", path: "/projects" },
    { name: "contact", path: "/contact" }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-2xl px-8">
        <div className="text-center space-y-8">
          {/* Main heading */}
          <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
              Pranav P Kulkarni
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              Computer Science Student and Developer
            </p>
          </div>

          {/* Navigation links */}
          <div className={`space-y-6 transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {navigationItems.map((item, index) => (
              <div 
                key={item.name}
                className={`transition-all duration-700`}
                style={{ transitionDelay: `${600 + index * 150}ms` }}
              >
                <Link
                  to={item.path}
                  className="group block"
                >
                  <div className="text-4xl md:text-5xl font-bold text-foreground hover:text-developer-orange transition-colors duration-300 border-2 border-foreground hover:border-developer-orange rounded-lg p-6 glow-effect">
                    <span className="underline decoration-2 underline-offset-8 group-hover:decoration-developer-orange transition-colors duration-300">
                      {item.name}
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Terminal-style footer */}
          <div className={`mt-12 text-sm text-muted-foreground transition-all duration-1000 delay-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="font-mono">$ whoami</p>
            <p className="font-mono">pranav@portfolio:~$ passionate_learner</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
