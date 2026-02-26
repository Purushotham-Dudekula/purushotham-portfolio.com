import React from "react";
import { Card } from "@/components/ui/card";
import { 
  Code, 
  FileCode, 
  Globe, 
  Database, 
  GitBranch, 
  Terminal,
  Server,
  Layers,
  Box,
  Sparkles
} from "lucide-react";

const Skills = () => {
  const techStack = {
    programming: [
      { name: "C", icon: <Code className="w-10 h-10" />, gradient: "from-purple-500 to-indigo-600" },
      { name: "Java", icon: <Code className="w-10 h-10" />, gradient: "from-indigo-500 to-purple-600" },
      { name: "JavaScript", icon: <FileCode className="w-10 h-10" />, gradient: "from-yellow-500 to-orange-500" },
    ],
    frontend: [
      { name: "HTML", icon: <Globe className="w-10 h-10" />, gradient: "from-orange-500 to-red-500" },
      { name: "CSS", icon: <Globe className="w-10 h-10" />, gradient: "from-blue-500 to-cyan-500" },
      { name: "React.js", icon: <Layers className="w-10 h-10" />, gradient: "from-cyan-500 to-blue-500" },
    ],
    backend: [
      { name: "Node.js", icon: <Server className="w-10 h-10" />, gradient: "from-green-500 to-emerald-500" },
      { name: "Express.js", icon: <Server className="w-10 h-10" />, gradient: "from-gray-500 to-gray-700" },
      { name: "REST APIs", icon: <Terminal className="w-10 h-10" />, gradient: "from-purple-500 to-pink-500" },
    ],
    databases: [
      { name: "MySQL", icon: <Database className="w-10 h-10" />, gradient: "from-blue-600 to-blue-800" },
      { name: "MongoDB", icon: <Database className="w-10 h-10" />, gradient: "from-green-600 to-green-800" },
      { name: "PostgreSQL", icon: <Database className="w-10 h-10" />, gradient: "from-blue-500 to-indigo-600" },
      { name: "SQL", icon: <Database className="w-10 h-10" />, gradient: "from-indigo-500 to-purple-600" },
    ],
    tools: [
      { name: "Git", icon: <GitBranch className="w-10 h-10" />, gradient: "from-orange-500 to-red-500" },
      { name: "GitHub", icon: <GitBranch className="w-10 h-10" />, gradient: "from-gray-700 to-gray-900" },
      { name: "Postman", icon: <Terminal className="w-10 h-10" />, gradient: "from-orange-400 to-orange-600" },
      { name: "VS Code", icon: <Code className="w-10 h-10" />, gradient: "from-blue-500 to-blue-700" },
      { name: "Figma", icon: <Box className="w-10 h-10" />, gradient: "from-purple-500 to-pink-500" },
    ],
  };

  const categories = [
    { 
      title: "Programming", 
      items: techStack.programming, 
      icon: <Code className="w-6 h-6" />,
      gradient: "from-purple-500/30 via-indigo-500/30 to-purple-500/30",
      borderGradient: "from-purple-500 to-indigo-500"
    },
    { 
      title: "Frontend", 
      items: techStack.frontend, 
      icon: <Layers className="w-6 h-6" />,
      gradient: "from-pink-500/30 via-purple-500/30 to-pink-500/30",
      borderGradient: "from-pink-500 to-purple-500"
    },
    { 
      title: "Backend", 
      items: techStack.backend, 
      icon: <Server className="w-6 h-6" />,
      gradient: "from-indigo-500/30 via-purple-500/30 to-indigo-500/30",
      borderGradient: "from-indigo-500 to-purple-500"
    },
    { 
      title: "Databases", 
      items: techStack.databases, 
      icon: <Database className="w-6 h-6" />,
      gradient: "from-purple-500/30 via-pink-500/30 to-purple-500/30",
      borderGradient: "from-purple-500 to-pink-500"
    },
    { 
      title: "Tools", 
      items: techStack.tools, 
      icon: <Sparkles className="w-6 h-6" />,
      gradient: "from-pink-500/30 via-indigo-500/30 to-pink-500/30",
      borderGradient: "from-pink-500 to-indigo-500"
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-slate-900">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Tech Stack
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-6">
            Technologies and tools I use to build amazing applications
          </p>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto"></div>
        </div>
        
        <div className="space-y-16">
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              {/* Category Header */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="p-3 rounded-lg bg-purple-600/20 border border-purple-600/30">
                  <div className="text-purple-400">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  {category.title}
                </h3>
                <div className="h-px flex-1 max-w-32 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
              </div>
              
              {/* Tech Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
                {category.items && category.items.length > 0 ? (
                  category.items.map((item, index) => (
                    <Card
                      key={`${category.title}-${index}`}
                      className="bg-slate-800 border border-slate-700 p-6 flex flex-col items-center justify-center hover:border-purple-600 transition-colors duration-200"
                    >
                    {/* Icon Container */}
                    <div className={`p-4 rounded-lg bg-gradient-to-br ${item.gradient} mb-4`}>
                      <div className="text-white">
                        {item.icon}
                      </div>
                    </div>
                    
                    {/* Tech Name */}
                    <span className="text-sm md:text-base font-semibold text-white text-center">
                      {item.name}
                    </span>
                  </Card>
                  ))
                ) : (
                  <div className="col-span-full text-center text-slate-400 py-8">
                    No items in this category
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
