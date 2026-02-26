import { Card } from "@/components/ui/card";
import { Code2, Database, GitBranch, Zap, Shield } from "lucide-react";

const RealTimeProject = () => {
  const responsibilities = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Backend API Development",
      description: "Building robust REST APIs with Node.js and Express.js"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Database Design & Optimization",
      description: "Designing scalable database schemas and optimizing queries"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Scalable Architecture",
      description: "Implementing scalable architecture patterns and best practices"
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Code Optimization",
      description: "Writing clean, maintainable code following best practices"
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: "Collaborative Development",
      description: "Working with Git for version control and team collaboration"
    }
  ];

  return (
    <section id="realtime-project" className="py-20 px-6 bg-gradient-to-b from-slate-900 to-blue-950">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Production-Level Project Experience
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto"></div>
        </div>

        <Card className="bg-slate-800 border border-slate-700 p-8 md:p-12 mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-purple-600/20 rounded-lg">
                <Shield className="w-8 h-8 text-purple-400" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  US-Based Real-Time Production Application
                </h3>
                <p className="text-slate-400">
                  Under Google Mentorship
                </p>
              </div>
            </div>
            
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              Contributing to a US-based real-time production application under Google mentorship. 
              Gaining hands-on experience in scalable architecture, database management, and production-level 
              development practices.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {responsibilities.map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-slate-700 border border-slate-600 rounded-lg hover:border-purple-600 transition-colors duration-200"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-2 bg-purple-600/20 rounded-lg">
                      <div className="text-purple-400">
                        {item.icon}
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-white">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default RealTimeProject;
