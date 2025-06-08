
import { ArrowLeft, Mail, Copy, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "pranavpk1807@gmail.com";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-8 px-4">
      <div className="max-w-2xl mx-auto w-full">
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
          <div className="border-2 border-foreground rounded-lg p-8 glow-effect animate-fade-in">
            <div className="mb-6">
              <Mail className="w-16 h-16 mx-auto mb-4 text-developer-blue" />
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h1>
              <p className="text-muted-foreground font-mono mb-8">
                $ echo "Let's collaborate on something amazing!"
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-lg mb-4">You can reach me at:</p>
                
                <div className="bg-secondary rounded-lg p-4 font-mono text-lg border border-foreground">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="break-all">{email}</span>
                    <button
                      onClick={copyToClipboard}
                      className="p-2 hover:bg-foreground hover:text-background rounded transition-colors duration-300 ml-2"
                      title="Copy to clipboard"
                    >
                      {copied ? (
                        <CheckCircle className="w-5 h-5 text-developer-green" />
                      ) : (
                        <Copy className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {copied && (
                  <p className="text-developer-green text-sm mt-2 font-mono">
                    ✓ Email copied to clipboard!
                  </p>
                )}
              </div>

              <div className="text-center space-y-2">
                <p className="text-muted-foreground">
                  Whether you have a project idea, want to collaborate, or just want to say hi!
                </p>
                <p className="text-developer-orange font-mono">
                  I'm always excited to connect with fellow developers and innovators.
                </p>
              </div>
            </div>
          </div>

          {/* Terminal-style footer */}
          <div className="mt-8 text-sm text-muted-foreground font-mono space-y-1">
            <p>$ ping pranav@portfolio.dev</p>
            <p className="text-developer-green">PING successful: Host is reachable</p>
            <p>$ status</p>
            <p className="text-developer-blue">Status: Ready for new opportunities</p>
            <p className="text-developer-orange">Response time: Usually within 24 hours</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
