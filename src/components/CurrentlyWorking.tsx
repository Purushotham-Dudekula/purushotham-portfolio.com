import { Card } from "@/components/ui/card";
import { Code2, Server, Smartphone, TrendingUp } from "lucide-react";

const CurrentlyWorking = () => {
  const activities = [
    {
      icon: <Server className="w-8 h-8" />,
      title: "Building Scalable REST APIs",
      description: "Designing and implementing robust RESTful APIs with Node.js and Express.js"
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Improving Backend Architecture",
      description: "Enhancing backend architecture using Node.js with focus on scalability and performance"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Enhancing Flutter Applications",
      description: "Developing and improving Flutter mobile applications with modern UI/UX patterns"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Data Structures & Algorithms",
      description: "Practicing DSA daily to strengthen problem-solving skills and algorithmic thinking"
    }
  ];

  return (
    <section id="currently-working" className="py-20 px-6 bg-gradient-to-b from-blue-950 to-slate-900">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Currently Working On
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {activities.map((activity, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border border-blue-600/30 p-6 hover:border-blue-500 hover:bg-slate-800 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-blue-600/20 rounded-lg mb-4">
                  <div className="text-blue-400">
                    {activity.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {activity.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {activity.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentlyWorking;
