import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Centurion University of Technology and Management",
      period: "2022 – 2026",
      grade: "CGPA: 8.54"
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Rao's Junior College",
      period: "2020 – 2022",
      grade: "Score: 78%"
    },
    {
      degree: "Secondary School (SSC)",
      institution: "Good Day English Medium School",
      period: "2019 – 2020",
      grade: "Score: 98%"
    }
  ];

  const certifications = [
    {
      title: "Frontend Web Development with React.js",
      issuer: "Udemy",
      type: "Development"
    },
    {
      title: "Web Development Fundamentals",
      issuer: "Skill Shop",
      type: "Development"
    },
    {
      title: "Data Structures and Algorithms",
      issuer: "GeeksforGeeks",
      type: "Programming"
    },
    {
      title: "Oracle SQL & PL/SQL",
      issuer: "Udemy",
      type: "Database"
    },
    {
      title: "Getting Started with Enterprise-grade AI",
      issuer: "IBM",
      type: "AI / Cloud"
    }
  ];

  return (
    <section id="education" className="py-20 px-6 bg-gradient-to-b from-slate-900 to-blue-950">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Education & Certifications
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto"></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">Education</h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card 
                  key={index}
                  className="bg-slate-800/50 border border-blue-600/30 p-6 md:p-8 hover:border-blue-500 hover:bg-slate-800 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-6">
                    <div className="p-3 bg-blue-600/20 rounded-lg flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-white mb-2">{edu.degree}</h4>
                      <p className="text-blue-400 font-medium text-lg mb-3">{edu.institution}</p>
                      <div className="flex justify-between items-center text-slate-400">
                        <span>{edu.period}</span>
                        <span className="text-white font-semibold">{edu.grade}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">Certifications</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {certifications.map((cert, index) => (
                <Card 
                  key={index} 
                  className="bg-slate-800/50 border border-blue-600/30 p-6 hover:border-blue-500 hover:bg-slate-800 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center border border-blue-600/30">
                      <span className="text-blue-400 text-lg font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <span className="px-2 py-1 bg-purple-600/20 text-purple-400 text-xs font-medium rounded border border-purple-600/30 mb-2 inline-block">
                        {cert.type}
                      </span>
                      <h4 className="text-white font-semibold mb-1 text-sm">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-slate-400">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
