
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      name: "Monopoly",
      description: "This Java-based Monopoly game offers a simplified version of the classic board game for 2 to 4 players. Players roll dice, move, buy properties, pay rent, and compete to be the last one with money. The goal is to outlast opponents through strategic property management.",
      tools: ["Java"],
      github: "https://github.com/pranavvk18/monopoly_in_java",
      category: "Game Development"
    },
    {
      name: "Netflix Data Analysis",
      description: "The Netflix data analysis project in Tableau visualizes content distribution (68.42% movies, 31.58% TV shows), tracks content growth (2008-2020), and maps global production. It highlights TV-MA as the most common rating and documentaries as the leading genre.",
      tools: ["Excel", "Tableau"],
      github: "https://github.com/pranavvk18/netflix_data_analysis/tree/main",
      category: "Data Analysis"
    },
    {
      name: "Sunspot Detection using YOLOv5",
      description: "Developed a YOLOv5-based AI model to detect and count sunspots in solar images, leveraging deep learning for automated analysis. Fine-tuned on 2000+ images from the Bass2000 Solar Survey for enhanced detection accuracy.",
      tools: ["TensorFlow", "YOLOv5"],
      github: "https://github.com/pranavvk18/sunspot_detection_using_yolo",
      category: "Computer Vision"
    },
    {
      name: "Plant Disease Classification",
      description: "Built a CNN-based model achieving 97% accuracy in plant disease classification using 87,000 images. Optimized performance with Adam optimizer, ReLU activation, and dropout regularization to prevent overfitting.",
      tools: ["Pandas", "TensorFlow"],
      github: "https://github.com/pranavvk18/plant_disease_classification",
      category: "Machine Learning"
    },
    {
      name: "Mobile Price Classification on ESP32",
      description: "Developed a mobile price classification model using TensorFlow Lite and deployed it on an ESP32 microcontroller for edge computing applications.",
      tools: ["TensorFlow Lite", "ESP32"],
      github: "https://github.com/pranavvk18/mobile_price_classification_model_on_ESP32",
      category: "IoT & Edge Computing"
    },
    {
    name: "Extraction of Dark Data from EHR using Ensemble Models",
    description: "Developed a system to extract dark data from unstructured EHR fields in a synthetic Blood Cancer dataset using en_ner_bc5cdr_md for biomedical entity recognition. Used ensemble models like Random Forest, XGBoost, LightGBM, and Stacking Classifier to enhance predictive accuracy.",
    tools: ["Python", "SciSpaCy", "scikit-learn"],
    github: "https://github.com/pranavvk18/Extraction-of-dark-data-in-EHR-using-ensemble-models",
    category: "Healthcare AI"
  },
  {
    name: "Congestion Control Simulator and Secure Chat Application",
    description: "Developed a TCP Congestion Control Simulator (Tahoe, Reno, NewReno) using Streamlit, and a Secure Chat App with TCP-like communication, login via MySQL, and congestion window control. Created for the Network Security course.",
    tools: ["Python", "MySQL", "Streamlit"],
    github: "https://github.com/pranavvk18/Congestion-_Control_-Simulator-_and_Chat_Application",
    category: "Network Security"
  }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Object Oriented Programming in Java": "text-developer-orange border-developer-orange",
      "Data Analysis": "text-developer-blue border-developer-blue",
      "Computer Vision": "text-developer-green border-developer-green",
      "Machine Learning": "text-purple-400 border-purple-400",
      "IoT & Edge Computing": "text-yellow-400 border-yellow-400",
      "Machine Learning": "text-purple-400 border-purple-400",
      "Network Security": "text-blue-400 border-blue-400"
    };
    return colors[category] || "text-foreground border-foreground";
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Back button */}
        <Link 
          to="/" 
          className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors duration-300 mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="font-mono">cd ..</span>
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
          <p className="text-muted-foreground font-mono">$ ls -la ~/projects/</p>
        </div>

        {/* Projects grid */}
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="border-2 border-foreground rounded-lg p-6 glow-effect hover:border-developer-orange transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Project header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-developer-orange transition-colors duration-300">
                    {project.name}
                  </h3>
                  <span className={`text-xs px-2 py-1 border rounded-md font-mono ${getCategoryColor(project.category)}`}>
                    {project.category}
                  </span>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-foreground rounded-lg hover:border-developer-orange hover:text-developer-orange transition-colors duration-300"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tools.map((tool, toolIndex) => (
                  <span 
                    key={toolIndex}
                    className="text-xs px-3 py-1 bg-secondary rounded-full font-mono"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex space-x-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  <Github className="w-4 h-4 mr-1" />
                  Source
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Terminal footer */}
        <div className="mt-12 text-center text-sm text-muted-foreground font-mono">
          <p>$ find ~/projects -name "*.md" | wc -l</p>
          <p className="text-developer-green">{projects.length}</p>
          <p className="mt-2">// More projects in development...</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
