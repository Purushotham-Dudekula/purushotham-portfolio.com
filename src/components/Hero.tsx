import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download, Mail } from "lucide-react";
import profileImage from "@/assets/photo.jpeg";

const Hero = () => {
  const fullText = "Full Stack Developer | Scalable Systems & AI-Driven Applications";

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="pointer-events-none absolute -left-40 top-10 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-sky-500/15 blur-3xl" />

      <div className="container mx-auto px-6 z-10 relative">
        <div className="grid max-w-6xl mx-auto grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
          {/* Text Column */}
          <div className="order-1 space-y-8 text-center lg:order-1 lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/60 px-4 py-1 text-xs font-medium uppercase tracking-[0.25em] text-slate-300 shadow-sm backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Open to full-time & freelance roles
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-50 sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1]">
                Purushotham<br />Dudekula
              </h1>

              <p className="text-xl font-medium text-slate-300 md:text-2xl">
                Full Stack Developer | Scalable Systems & AI-Driven Applications
              </p>
            </div>

            <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg lg:ml-0 lg:mr-auto">
              Full Stack Developer with hands-on experience in building scalable web
              applications using React, Node.js, and MongoDB. Experienced in
              developing end-to-end systems, REST APIs, and AI-integrated dashboards
              through real-time projects and internships. Passionate about creating
              clean, efficient, and production-ready solutions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 lg:max-w-md lg:ml-0">
              <Button
                variant="default"
                size="lg"
                className="w-full bg-purple-600 text-sm font-semibold tracking-wide text-white shadow-lg shadow-purple-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-purple-700"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/purushotham-dudekula-a44a98224?utm_source=share_via&utm_content=profile&utm_medium=member_android",
                    "_blank"
                  )
                }
              >
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>

              <Button
                variant="default"
                size="lg"
                className="w-full bg-slate-800 text-sm font-semibold tracking-wide text-slate-100 shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-700"
                onClick={() =>
                  window.open("https://github.com/Purushotham-Dudekula", "_blank")
                }
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="w-full border-2 border-slate-700 text-sm font-semibold tracking-wide text-slate-200 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-900/50"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/uc?export=download&id=109pZ22Lskd8ZgxHwwJP7yt5U0ewsrirQ",
                    "_blank"
                  )
                }
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="w-full border-2 border-slate-700 text-sm font-semibold tracking-wide text-slate-200 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-900/50"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
            </div>
          </div>

          {/* Avatar Column */}
          <div className="order-2 flex justify-center lg:order-2 lg:justify-end">
            <div className="group relative">
              {/* Enhanced decorative glow */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-purple-500/40 via-sky-500/40 to-emerald-400/30 opacity-50 blur-2xl transition-all duration-500 group-hover:opacity-80 group-hover:blur-3xl" />

              {/* Secondary background shape for depth */}
              <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-full bg-slate-800/50 backdrop-blur-sm transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1" />

              <div className="relative h-44 w-44 overflow-hidden rounded-full border border-slate-700/50 bg-slate-900/60 shadow-2xl shadow-slate-950/80 backdrop-blur-md transition-all duration-500 group-hover:scale-[1.05] group-hover:rotate-1 sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-72 lg:w-72">
                <img
                  src={profileImage}
                  alt="Purushotham Dudekula"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Subtle overlay gradient on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
