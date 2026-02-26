import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import RealTimeProject from "@/components/RealTimeProject";
import Experience from "@/components/Experience";
import ProjectsSection from "@/components/Projects";
import Skills from "@/components/Skills";
import CurrentlyWorking from "@/components/CurrentlyWorking";
import WhyHireMe from "@/components/WhyHireMe";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <div className="relative">
        <Navigation />
        <Hero />
        <RealTimeProject />
        <Experience />
        <ProjectsSection />
        <Skills />
        <CurrentlyWorking />
        <WhyHireMe />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
