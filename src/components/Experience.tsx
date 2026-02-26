import { Card } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";
import { EXPERIENCES } from "@/lib/constants";

const Experience = () => {
  const experiences = EXPERIENCES;

  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-b from-blue-950 to-slate-900">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional Experience
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="bg-slate-800 border border-slate-700 p-6 md:p-8 hover:border-purple-600 transition-colors duration-200"
            >
              <div className="flex items-start gap-6">
                <div className="p-4 bg-purple-600/20 rounded-lg flex-shrink-0">
                  <Briefcase className="w-8 h-8 text-purple-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {exp.role}
                  </h3>
                  <p className="text-purple-400 font-semibold text-lg mb-3">{exp.company}</p>
                  <div className="flex items-center gap-2 text-slate-400 mb-4">
                    <Calendar className="w-5 h-5" />
                    <span className="text-base">{exp.period}</span>
                  </div>
                  <ul className="space-y-2 text-slate-300">
                    {exp.description.split('.').filter(item => item.trim()).map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>{item.trim()}.</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
