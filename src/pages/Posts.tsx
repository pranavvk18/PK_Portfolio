
// import { useState, useEffect } from "react";
// import { ArrowLeft } from "lucide-react";
// import { Link } from "react-router-dom";

// const Posts = () => {
//   const [displayedText, setDisplayedText] = useState("");
//   const [showCursor, setShowCursor] = useState(true);
//   const fullText = "Best is yet to come!!!";

//   useEffect(() => {
//     let index = 0;
//     const typingSpeed = 100;

//     const typeText = () => {
//       if (index < fullText.length) {
//         setDisplayedText(fullText.slice(0, index + 1));
//         index++;
//         setTimeout(typeText, typingSpeed);
//       } else {
//         setShowCursor(false);
//       }
//     };

//     const timer = setTimeout(typeText, 500);
//     return () => clearTimeout(timer);
//   }, [fullText]);

//   useEffect(() => {
//     const cursorTimer = setInterval(() => {
//       setShowCursor(prev => !prev);
//     }, 500);

//     return () => clearInterval(cursorTimer);
//   }, []);

//   return (
//     <div className="min-h-screen bg-background flex items-center justify-center py-8 px-4">
//       <div className="max-w-4xl mx-auto w-full">
//         {/* Back button */}
//         <div className="absolute top-8 left-8">
//           <Link 
//             to="/" 
//             className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors duration-300 group"
//           >
//             <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
//             <span className="font-mono">cd ..</span>
//           </Link>
//         </div>

//         {/* Main content */}
//         <div className="text-center">
//           <div className="border-2 border-foreground rounded-lg p-12 glow-effect max-w-2xl mx-auto">
//             <div className="font-mono">
//               <div className="text-sm text-muted-foreground mb-4">
//                 $ cat posts.txt
//               </div>
              
//               <h1 className="text-3xl md:text-4xl font-bold min-h-[4rem] flex items-center justify-center">
//                 <span className="text-developer-green">
//                   {displayedText}
//                   {showCursor && <span className="animate-pulse">|</span>}
//                 </span>
//               </h1>
              
//               <div className="text-sm text-muted-foreground mt-8 space-y-2">
//                 <p>// More content coming soon...</p>
//                 <p>// Stay tuned for exciting updates!</p>
//               </div>
//             </div>
//           </div>

//           {/* Terminal-style additional info */}
//           <div className="mt-8 text-sm text-muted-foreground font-mono">
//             <p>$ ls -la posts/</p>
//             <p>drwxr-xr-x 2 pranav pranav 4096 Jun  8 2025 .</p>
//             <p>drwxr-xr-x 3 pranav pranav 4096 Jun  8 2025 ..</p>
//             <p>-rw-r--r-- 1 pranav pranav   23 Jun  8 2025 motivation.txt</p>
//             <p className="text-developer-orange">// Future posts will appear here</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Posts;
import { ArrowLeft, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Posts = () => {
  const videos = [
    {
      id: "zGbLGzO8SKo",
      url: "https://youtu.be/zGbLGzO8SKo?si=qROw01iSd-8L1MYx",
      title: "From Wealth to Well-being: Exploring GDP and Health Expenditure Across Nations",
      description: "Gross Domestic Product (GDP) is widely regarded as one of the most powerful indicators of national development and economic progress. It measures the market value of all final goods and services produced within a country during a specific period. GDP per capita, derived by dividing the GDP by the total population, serves as an approximate measure of the standard of living and facilitates international comparisons. Current Health Expenditure as a percentage of GDP is another critical measure, providing insights into the level of resources allocated to health relative to other sectors."
    },
    {
      id: "Zb50VrAXLkY", 
      url: "https://youtu.be/Zb50VrAXLkY?si=a1aPKWFUt69SAPED",
      title: "How Database Indexing Works: B Tree, B+ Tree & M-Way Search Explained",
      description: "In this video, we explore how database indexing works by diving into the fundamentals of disk storage and how data is organized using tracks, sectors, and blocks. We then compare the performance of querying data with and without indexing, demonstrating how indexes significantly reduce read time by narrowing down the search space. You'll learn about the role of smaller referential tables (indexes), and how advanced data structures like B-Trees, B+ Trees, and M-Way Trees are used in modern databases to support multi-level indexing and efficient range queries."
    }
  ];

  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-8 px-4">
      <div className="max-w-6xl mx-auto w-full">
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
          <div className="border-2 border-foreground rounded-lg p-8 glow-effect mx-auto">
            <div className="font-mono">
              <div className="text-sm text-muted-foreground mb-6 flex items-center justify-center gap-2">
                <Youtube className="w-4 h-4" />
                <span>$ ls -la videos/</span>
              </div>
              
              <h1 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
                Video Collection
              </h1>
              
              {/* Video list */}
              <div className="space-y-6 text-left">
                {videos.map((video, index) => (
                  <div 
                    key={video.id}
                    className="border border-muted rounded-lg p-4 hover:border-foreground transition-colors duration-300 group"
                  >
                    <div className="flex flex-col md:flex-row gap-4">
                      {/* Thumbnail */}
                      <div className="flex-shrink-0">
                        <a 
                          href={video.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block relative group-hover:scale-105 transition-transform duration-300"
                        >
                          <img 
                            src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                            alt={video.title}
                            className="w-full md:w-48 h-auto rounded border border-muted"
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded">
                            <Youtube className="w-8 h-8 text-white" />
                          </div>
                        </a>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 space-y-3">
                        <div className="text-xs text-muted-foreground">
                          # Video {(index + 1).toString().padStart(2, '0')}
                        </div>
                        
                        <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                          <a 
                            href={video.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:underline"
                          >
                            {video.title}
                          </a>
                        </h3>
                        
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {video.description}
                        </p>
                        
                        <div className="text-xs text-muted-foreground pt-2 border-t border-muted">
                          <span className="text-primary">→</span> {video.url}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-sm text-muted-foreground mt-8 space-y-1">
                <p>// Found {videos.length} video(s)</p>
                <p>// Click any thumbnail or title to watch</p>
              </div>
            </div>
          </div>

          {/* Terminal-style additional info */}
          <div className="mt-8 text-sm text-muted-foreground font-mono text-left max-w-2xl mx-auto">
            <p>$ find . -name "*.mp4" -type f</p>
            <p>./videos/gdp_analysis.mp4</p>
            <p>./videos/database_indexing.mp4</p>
            <p className="text-primary mt-2">// External links to YouTube content</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;