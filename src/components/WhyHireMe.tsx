import { Card } from "@/components/ui/card";
import { Code2, Briefcase, Rocket, Users, Zap } from "lucide-react";

const WhyHireMe = () => {
  const reasons = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Strong Full-Stack Foundation",
      description: "Comprehensive knowledge across frontend, backend, and database technologies"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Real-World Internship Experience",
      description: "Hands-on experience from multiple internships with production-level projects"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Production-Level Exposure",
      description: "Currently contributing to US-based real-time production application under Google mentorship"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Clean & Scalable Coding",
      description: "Committed to writing clean, maintainable code following best practices"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Quick Learner & Team Player",
      description: "Adaptable, collaborative, and always eager to learn new technologies"
    }
  ];

  return (
    <section id="why-hire-me" className="py-20 px-6 bg-gradient-to-b from-slate-900 to-blue-950">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Hire Me?
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border border-blue-600/30 p-6 hover:border-blue-500 hover:bg-slate-800 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-600/20 rounded-lg flex-shrink-0">
                  <div className="text-blue-400">
                    {reason.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;
