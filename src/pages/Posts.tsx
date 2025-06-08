
import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Posts = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Best is yet to come!!!";

  useEffect(() => {
    let index = 0;
    const typingSpeed = 100;

    const typeText = () => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
        setTimeout(typeText, typingSpeed);
      } else {
        setShowCursor(false);
      }
    };

    const timer = setTimeout(typeText, 500);
    return () => clearTimeout(timer);
  }, [fullText]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-8 px-4">
      <div className="max-w-4xl mx-auto w-full">
        {/* Back button */}
        <div className="absolute top-8 left-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors duration-300 group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-mono">cd ..</span>
          </Link>
        </div>

        {/* Main content */}
        <div className="text-center">
          <div className="border-2 border-foreground rounded-lg p-12 glow-effect max-w-2xl mx-auto">
            <div className="font-mono">
              <div className="text-sm text-muted-foreground mb-4">
                $ cat posts.txt
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold min-h-[4rem] flex items-center justify-center">
                <span className="text-developer-green">
                  {displayedText}
                  {showCursor && <span className="animate-pulse">|</span>}
                </span>
              </h1>
              
              <div className="text-sm text-muted-foreground mt-8 space-y-2">
                <p>// More content coming soon...</p>
                <p>// Stay tuned for exciting updates!</p>
              </div>
            </div>
          </div>

          {/* Terminal-style additional info */}
          <div className="mt-8 text-sm text-muted-foreground font-mono">
            <p>$ ls -la posts/</p>
            <p>drwxr-xr-x 2 pranav pranav 4096 Jun  8 2025 .</p>
            <p>drwxr-xr-x 3 pranav pranav 4096 Jun  8 2025 ..</p>
            <p>-rw-r--r-- 1 pranav pranav   23 Jun  8 2025 motivation.txt</p>
            <p className="text-developer-orange">// Future posts will appear here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
