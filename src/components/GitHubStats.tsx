import { Card } from "@/components/ui/card";
import { Github, Code2, TrendingUp } from "lucide-react";

const GitHubStats = () => {
  // Note: Replace with actual GitHub username
  const githubUsername = "purushothamdudekula";

  return (
    <section id="github-stats" className="py-20 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0a0e27]" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            GitHub Statistics
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* GitHub Contribution Graph */}
          <Card className="glass-card p-6 hover:shadow-glow transition-all duration-500 animate-fade-in-up" style={{ animationDelay: "0.1s", opacity: 0, animationFillMode: "forwards" }}>
            <div className="flex items-center gap-3 mb-4">
              <Github className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Contribution Graph</h3>
            </div>
            <div className="bg-[#0d1117] rounded-lg p-4 overflow-hidden">
              <img
                src={`https://github-readme-activity-graph.vercel.app/graph?username=${githubUsername}&theme=react-dark&bg_color=0d1117&color=58a6ff&line=58a6ff&point=58a6ff&area=true&hide_border=true`}
                alt="GitHub Contribution Graph"
                className="w-full h-auto"
              />
            </div>
          </Card>

          {/* GitHub Stats */}
          <Card className="glass-card p-6 hover:shadow-glow transition-all duration-500 animate-fade-in-up" style={{ animationDelay: "0.2s", opacity: 0, animationFillMode: "forwards" }}>
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">GitHub Stats</h3>
            </div>
            <div className="bg-[#0d1117] rounded-lg p-4 overflow-hidden">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=react&bg_color=0d1117&hide_border=true&icon_color=58a6ff&title_color=58a6ff&text_color=ffffff`}
                alt="GitHub Stats"
                className="w-full h-auto"
              />
            </div>
          </Card>

          {/* Top Languages */}
          <Card className="glass-card p-6 hover:shadow-glow transition-all duration-500 animate-fade-in-up md:col-span-2" style={{ animationDelay: "0.3s", opacity: 0, animationFillMode: "forwards" }}>
            <div className="flex items-center gap-3 mb-4">
              <Code2 className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Top Languages</h3>
            </div>
            <div className="bg-[#0d1117] rounded-lg p-4 overflow-hidden">
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=react&bg_color=0d1117&hide_border=true&title_color=58a6ff&text_color=ffffff`}
                alt="Top Languages"
                className="w-full h-auto"
              />
            </div>
          </Card>

          {/* GitHub Streak */}
          <Card className="glass-card p-6 hover:shadow-glow transition-all duration-500 animate-fade-in-up md:col-span-2" style={{ animationDelay: "0.4s", opacity: 0, animationFillMode: "forwards" }}>
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">GitHub Streak</h3>
            </div>
            <div className="bg-[#0d1117] rounded-lg p-4 overflow-hidden">
              <img
                src={`https://github-readme-streak-stats.demolab.com/?user=${githubUsername}&theme=react&background=0d1117&border=0d1117&ring=58a6ff&fire=58a6ff&currStreakLabel=58a6ff`}
                alt="GitHub Streak"
                className="w-full h-auto"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
