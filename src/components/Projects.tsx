import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Code2, Database, Shield, Brain, Video, ExternalLink, Coins } from "lucide-react";
import ScreensCarousel from "@/components/ScreensCarousel";
import ss135823 from "@/assets/Screenshot 2025-11-06 135823.png";
import ss142458 from "@/assets/Screenshot 2025-11-06 142458.png";
import ss142508 from "@/assets/Screenshot 2025-11-06 142508.png";
import ss142605 from "@/assets/Screenshot 2025-11-06 142605.png";
import ss142727 from "@/assets/Screenshot 2025-11-06 142727.png";
import ss151947 from "@/assets/Screenshot 2025-11-06 151947.png";
import ss142800 from "@/assets/Screenshot 2025-11-06 142800.png";
import ss144846 from "@/assets/Screenshot 2025-11-06 144846.png";
import ss144935 from "@/assets/Screenshot 2025-11-06 144935.png";
import ss144940 from "@/assets/Screenshot 2025-11-06 144940.png";
import ss144950 from "@/assets/Screenshot 2025-11-06 144950.png";
import ss145007 from "@/assets/Screenshot 2025-11-06 145007.png";
import ss145033 from "@/assets/Screenshot 2025-11-06 145033.png";
import ss145056 from "@/assets/Screenshot 2025-11-06 145056.png";
import ss145108 from "@/assets/Screenshot 2025-11-06 145108.png";

// numbered gallery images (user-uploaded)
import img1 from "@/assets/1.jpg";
import img2 from "@/assets/2.jpg";
import img3 from "@/assets/3.jpg";
import img4 from "@/assets/4.jpg";
import img5 from "@/assets/5.jpg";
import img6 from "@/assets/6.jpg";
import img7 from "@/assets/7.jpg";
import img8 from "@/assets/8.jpg";

const cafeScreens = [
  ss135823,
  ss142458,
  ss142508,
  ss142605,
  ss142727,
  ss151947,
  ss142800,
  ss144846,
  ss144935,
  ss144940,
  ss144950,
  ss145007,
  ss145033,
  ss145056,
  ss145108,
];

// Gallery Hall images in requested custom order: 1,2,3,4,8,6,5,7
const galleryScreens = [img1, img2, img3, img4, img8, img6, img5, img7];

// Pet Management screenshots (user uploaded) - order requested:
// 133243, 133254, 133304, 133339, 133413, 133425
// [Removed - replaced with NFT Explorer App]

// AI-LinkedIn-Insight-Agent screenshots (user uploaded) - order requested:
// 111327, 111332, 111340, 111602, 111631, 111651, 111707
import linkedin111327 from "@/assets/Screenshot 2025-11-14 111327.png";
import linkedin111332 from "@/assets/Screenshot 2025-11-14 111332.png";
import linkedin111340 from "@/assets/Screenshot 2025-11-14 111340.png";
import linkedin111602 from "@/assets/Screenshot 2025-11-14 111602.png";
import linkedin111631 from "@/assets/Screenshot 2025-11-14 111631.png";
import linkedin111651 from "@/assets/Screenshot 2025-11-14 111651.png";
import linkedin111707 from "@/assets/Screenshot 2025-11-14 111707.png";

// Decentralized File Storage screenshots
import pic1 from "@/assets/Picture1.jpg";
import pic2 from "@/assets/Picture2.jpg";
import pic3 from "@/assets/Picture3.jpg";
import pic4 from "@/assets/Picture4.jpg";

// NFT Explorer App screenshots
import nft1 from "@/assets/NFT 1.png";
import nft2 from "@/assets/NFT 2.png";
import nft3 from "@/assets/NFT 3.png";
import nft4 from "@/assets/NFT 4.png";
import nft5 from "@/assets/NFT 5.png";

// ReelMyApp screenshots
import reel1 from "@/assets/reel1.jpg";
import reel2 from "@/assets/reel2.jpg";
import reel3 from "@/assets/reel3.jpg";
import reel4 from "@/assets/reel4.jpg";
import reel5 from "@/assets/reel5.jpg";
import reel6 from "@/assets/reel6.jpg";
import reel7 from "@/assets/reel7.jpg";
import reel8 from "@/assets/reel8.jpg";
import reel9 from "@/assets/reel9.jpg";
import reel10 from "@/assets/reel10.jpg";
import reel11 from "@/assets/reel11.jpg";
import reel12 from "@/assets/reel12.jpg";
import reel13 from "@/assets/reel13.jpg";
import reel14 from "@/assets/reel14.jpg";
import reel15 from "@/assets/reel15.jpg";
import reel16 from "@/assets/reel16.jpg";
import reel17 from "@/assets/reel17.jpg";
import reel18 from "@/assets/reel18.jpg";
import reel19 from "@/assets/reel19.jpg";
import reel20 from "@/assets/reel20.jpg";

const decentralizedScreens = [pic1, pic2, pic3, pic4];

const nftScreens = [nft1, nft2, nft3, nft4, nft5];

const reelScreens = [
  reel1,
  reel2,
  reel3,
  reel4,
  reel5,
  reel6,
  reel7,
  reel8,
  reel9,
  reel10,
  reel11,
  reel12,
  reel13,
  reel14,
  reel15,
  reel16,
  reel17,
  reel18,
  reel19,
  reel20,
];

const petScreens = [];

const linkedinScreens = [
  linkedin111327,
  linkedin111332,
  linkedin111340,
  linkedin111602,
  linkedin111631,
  linkedin111651,
  linkedin111707,
];

const Projects = () => {
  const projects = [
    {
      title: "Gallery Hall Booking",
      description: "Designed and developed a real-time web-based hall booking system with admin approval workflow and scheduling system. Built comprehensive dashboard management system for seamless event management.",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      github: "https://github.com/Purushotham-Dudekula/Hall-Booking-and-Management-",
      demo: "#",
      icon: <Database className="w-6 h-6" />,
      highlight: "Full Stack"
    },
    {
      title: "Cafe Management System",
      description: "Built full-stack platform for order management, billing, and menu administration. Designed intuitive admin dashboard with comprehensive management features.",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      github: "https://github.com/Purushotham-Dudekula/Cafe-Management-System",
      demo: "#",
      icon: <Code2 className="w-6 h-6" />,
      highlight: "Full Stack"
    },
    {
      title: "NFT Explorer App",
      description: "NFT Explorer App is a blockchain-based web application that allows users to explore, view, and analyze NFT collections in real-time. It integrates Web3 technologies to fetch NFT data, display ownership details, and provide a smooth decentralized browsing experience.",
      tech: ["React.js", "Web3.js / Ethers.js", "Node.js", "REST API", "Blockchain", "Ethereum", "MetaMask"],
      github: "https://github.com/Purushotham-Dudekula/NFT-EXPLORER-APP",
      icon: <Coins className="w-6 h-6" />,
      highlight: "Web3"
    },
    {
      title: "Decentralized File Storage",
      description: "Blockchain-based distributed storage platform using IPFS and Ethereum smart contracts for secure, tamper-proof file management. Features cryptographic access control for file sharing and versioning, decentralized user authentication with MetaMask integration, and smart contract-based automated payment system for storage space allocation.",
      tech: ["Blockchain", "IPFS", "Ethereum", "Smart Contracts"],
      github: "https://github.com/Purushotham-Dudekula/Decentralized_file_storage/tree/main/Decentralized_file_storage-main",
      icon: <Shield className="w-6 h-6" />,
      highlight: "Web3 Tech"
    },
    {
      title: "AI-LinkedIn-Insight-Agent",
      description: "AI-LinkedIn-Insight-Agent is a full-stack AI tool that analyzes LinkedIn profiles and generates personalized improvement suggestions. It helps users strengthen their profile, improve visibility, and optimize their professional branding using intelligent insights.",
      tech: ["React.js", "Node.js", "Express.js", "REST API", "Google Jules API"],
      github: "https://github.com/Purushotham-Dudekula/Ai-linkedin-insight-agent",
      icon: <Brain className="w-6 h-6" />,
      highlight: "AI-Powered"
    },
    {
      title: "ReelMyApp",
      description: "Developed full-stack marketing reel generator creating 5–15 second branded videos. Integrated FFmpeg for video processing and implemented JWT authentication for secure user management.",
      tech: ["Flutter", "Node.js", "Express.js", "MongoDB", "FFmpeg", "JWT"],
      github: "https://github.com/Purushotham-Dudekula/ReelMyApp",
      demo: "#",
      icon: <Video className="w-6 h-6" />,
      highlight: "Full Stack"
    }
  ];

  return projects;
};

const ProjectsSection = () => {
  const projects = Projects();

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-b from-slate-900 to-blue-950">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-slate-800/50 border border-blue-600/30 p-6 hover:border-blue-500 hover:bg-slate-800 transition-all duration-300 flex flex-col group overflow-hidden relative backdrop-blur-sm"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between py-2 mb-4">
                  {/* Left badge with code icon */}
                  <div className="flex items-center px-3 py-2 bg-blue-600/20 rounded-lg border border-blue-600/30">
                    <div className="text-blue-400">
                      {project.icon}
                    </div>
                  </div>
                  
                  {/* Right badge */}
                  <span className="px-4 py-1.5 bg-blue-600/20 text-blue-300 text-xs font-medium tracking-wide rounded-lg border border-blue-600/30">
                    {project.highlight}
                  </span>
                </div>
                
                {/* Full-width project thumbnail / carousel area */}
                {project.title === "Cafe Management System" || 
                 project.title === "Gallery Hall Booking" || 
                 project.title === "Decentralized File Storage" ||
                 project.title === "AI-LinkedIn-Insight-Agent" ||
                 project.title === "NFT Explorer App" ||
                 project.title === "ReelMyApp" ? (
                  <>
                    <div
                      style={{
                        position: 'relative',
                        left: '50%',
                        marginLeft: '-50vw',
                        width: '100vw',
                        paddingLeft: '1.5rem',
                        paddingRight: '1.5rem',
                        marginBottom: '1rem',
                      }}
                    >
                      <ScreensCarousel images={
                        project.title === "Cafe Management System"
                          ? cafeScreens
                          : project.title === "Gallery Hall Booking"
                          ? galleryScreens
                          : project.title === "Decentralized File Storage"
                          ? decentralizedScreens
                          : project.title === "AI-LinkedIn-Insight-Agent"
                          ? linkedinScreens
                          : project.title === "NFT Explorer App"
                          ? nftScreens
                          : project.title === "ReelMyApp"
                          ? reelScreens
                          : []
                      } />
                    </div>
                    {/* Project title below carousel */}
                    <h3 className="text-2xl font-semibold text-white mb-3 text-center">
                      {project.title}
                    </h3>
                  </>
                ) : (
                  /* Project title for other projects */
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {project.title}
                  </h3>
                )}

                <p className="text-slate-300 mb-4 flex-1 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-blue-600/20 rounded-lg text-xs text-blue-300 border border-blue-600/30 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  {project.demo && project.demo !== "#" && (
                    <Button 
                      variant="default" 
                      size="lg"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white transition-colors rounded-lg font-semibold"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                  <Button 
                    variant="outline" 
                    size="lg"
                    className={`${project.demo && project.demo !== "#" ? 'flex-1' : 'w-full'} border-blue-600/50 text-blue-300 hover:bg-blue-950/50 hover:border-blue-400 transition-colors rounded-lg font-semibold`}
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// keep a named export for the raw projects array/function (used by Stats)
export { Projects };

// default export is the ProjectsSection (page renders Projects separately)
export default ProjectsSection;
