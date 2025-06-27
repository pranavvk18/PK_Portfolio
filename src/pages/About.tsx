
// import { useState, useEffect } from "react";
// import { ArrowLeft, Instagram, Linkedin } from "lucide-react";
// import { Link } from "react-router-dom";

// const About = () => {
//   const [age, setAge] = useState("20");

//   useEffect(() => {
//     const updateAge = () => {
//       const birthDate = new Date(2004, 5, 15); // June 15, 2004
//       const currentDate = new Date();
      
//       const millisecondsSinceBirth = currentDate.getTime() - birthDate.getTime();
//       const millisecondsInYear = 365.25 * 24 * 60 * 60 * 1000;
      
//       const preciseAge = millisecondsSinceBirth / millisecondsInYear;
//       setAge(preciseAge.toFixed(9));
//     };

//     updateAge();
//     const interval = setInterval(updateAge, 10);
    
//     return () => clearInterval(interval);
//   }, []);

//   const interests = [
//     { icon: "🤖", title: "Machine Learning", description: "Training models that make an impact." },
//     { icon: "📊", title: "Data Analysis", description: "Finding patterns in chaos." },
//     { icon: "⚡", title: "Optimization in ML", description: "Making AI models smarter & faster." },
//     { icon: "💻", title: "Operating Systems", description: "Understanding the magic behind computers." }
//   ];

//   return (
//     <div className="min-h-screen bg-background py-8 px-4">
//       <div className="max-w-4xl mx-auto">
//         {/* Back button */}
//         <Link 
//           to="/" 
//           className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors duration-300 mb-8 group"
//         >
//           <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
//           <span className="font-mono">cd ..</span>
//         </Link>

//         {/* Main content */}
//         <div className="border-2 border-foreground rounded-lg p-8 glow-effect animate-fade-in">
//           <div className="text-center space-y-6">
//             <h1 className="text-4xl font-bold mb-6">Hey there! 👋</h1>
            
//             <div className="text-lg space-y-4 max-w-3xl mx-auto text-left">
//               <p>
//                 I'm <strong className="text-developer-orange">Pranav P Kulkarni</strong>, a 3rd-year{" "}
//                 <strong className="text-developer-blue">Computer Science</strong> student at{" "}
//                 <strong>Rashtreeya Vidyalaya University, Bengaluru</strong>.
//               </p>
              
//               <p>A passionate problem solver who loves collaborating to tackle real-world challenges! 🚀</p>
//             </div>

//             <div className="mt-8">
//               <h2 className="text-2xl font-bold mb-6 text-developer-green">🔥 Areas That Spark My Curiosity</h2>
              
//               <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
//                 {interests.map((interest, index) => (
//                   <div 
//                     key={index}
//                     className="border border-foreground rounded-lg p-4 hover:border-developer-orange transition-colors duration-300 text-left"
//                   >
//                     <div className="flex items-start space-x-3">
//                       <span className="text-2xl">{interest.icon}</span>
//                       <div>
//                         <h3 className="font-bold text-developer-orange">{interest.title}</h3>
//                         <p className="text-sm text-muted-foreground">{interest.description}</p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <p className="text-lg mt-8">
//               Always excited to build something cool and push the boundaries of tech! 💡✨
//             </p>

//             <p className="text-lg">
//               Oh, and I'm <span className="font-bold text-developer-green font-mono">{age}</span> years old, 
//               but my curiosity never ages! 😎
//             </p>

//             {/* Social links */}
//             <div className="mt-8">
//               <h2 className="text-2xl font-bold mb-4">Connect With Me</h2>
//               <div className="flex justify-center space-x-6">
//                 <a
//                   href="https://www.instagram.com/k.pranavv?igsh=am1zd2RpYzh0NG14"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="p-3 border border-foreground rounded-lg hover:border-developer-orange hover:text-developer-orange transition-colors duration-300"
//                 >
//                   <Instagram className="w-8 h-8" />
//                 </a>
//                 <a
//                   href="https://www.linkedin.com/in/pranav-p-kulkarni-5553b1317/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="p-3 border border-foreground rounded-lg hover:border-developer-blue hover:text-developer-blue transition-colors duration-300"
//                 >
//                   <Linkedin className="w-8 h-8" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

import { useState, useEffect } from "react";
import { ArrowLeft, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import AcademicGraph from "../components/ui/AcademicGraph";

const About = () => {
  const [age, setAge] = useState("20");

  useEffect(() => {
    const updateAge = () => {
      const birthDate = new Date(2004, 5, 15); // June 15, 2004
      const currentDate = new Date();
      
      const millisecondsSinceBirth = currentDate.getTime() - birthDate.getTime();
      const millisecondsInYear = 365.25 * 24 * 60 * 60 * 1000;
      
      const preciseAge = millisecondsSinceBirth / millisecondsInYear;
      setAge(preciseAge.toFixed(9));
    };

    updateAge();
    const interval = setInterval(updateAge, 10);
    
    return () => clearInterval(interval);
  }, []);

  const interests = [
    { icon: "🤖", title: "Machine Learning", description: "Training models that make an impact." },
    { icon: "📊", title: "Data Analysis", description: "Finding patterns in chaos." },
    { icon: "⚡", title: "Optimization in ML", description: "Making AI models smarter & faster." },
    { icon: "💻", title: "Operating Systems", description: "Understanding the magic behind computers." }
  ];

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <Link 
          to="/" 
          className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors duration-300 mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="font-mono">cd ..</span>
        </Link>

        {/* Main content */}
        <div className="border-2 border-foreground rounded-lg p-8 glow-effect animate-fade-in">
          <div className="text-center space-y-6">
            <h1 className="text-4xl font-bold mb-6">Hey there! 👋</h1>
            
            <div className="text-lg space-y-4 max-w-3xl mx-auto text-left">
              <p>
                I'm <strong className="text-developer-orange">Pranav P Kulkarni</strong>, a 3rd-year{" "}
                <strong className="text-developer-blue">Computer Science</strong> student at{" "}
                <strong>Rashtreeya Vidyalaya University, Bengaluru</strong>.
              </p>
              
              <p>A passionate problem solver who loves collaborating to tackle real-world challenges! 🚀</p>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-6 text-developer-green">🔥 Areas That Spark My Curiosity</h2>
              
              <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                {interests.map((interest, index) => (
                  <div 
                    key={index}
                    className="border border-foreground rounded-lg p-4 hover:border-developer-orange transition-colors duration-300 text-left"
                  >
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl">{interest.icon}</span>
                      <div>
                        <h3 className="font-bold text-developer-orange">{interest.title}</h3>
                        <p className="text-sm text-muted-foreground">{interest.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-lg mt-8">
              Always excited to build something cool and push the boundaries of tech! 💡✨
            </p>

            <p className="text-lg">
              Oh, and I'm <span className="font-bold text-developer-green font-mono">{age}</span> years old, 
              but my curiosity never ages! 😎
            </p>

            {/* Social links */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Connect With Me</h2>
              <div className="flex justify-center space-x-6">
                <a
                  href="https://www.instagram.com/k.pranavv?igsh=am1zd2RpYzh0NG14"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-foreground rounded-lg hover:border-developer-orange hover:text-developer-orange transition-colors duration-300"
                >
                  <Instagram className="w-8 h-8" />
                </a>
                <a
                  href="https://www.linkedin.com/in/pranav-p-kulkarni-5553b1317/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-foreground rounded-lg hover:border-developer-blue hover:text-developer-blue transition-colors duration-300"
                >
                  <Linkedin className="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Academic Performance Graph */}
        <div className="mt-8">
          <AcademicGraph />
        </div>
      </div>
    </div>
  );
};

export default About;