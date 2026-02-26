import { Github, Linkedin, Mail } from "lucide-react";
import { CONTACT_EMAIL, EMAIL_SUBJECT, EMAIL_BODY } from "@/lib/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-slate-900 border-t border-slate-700">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-6">
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/Purushotham-Dudekula"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-purple-400 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/purushotham-dudekula-a44a98224?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-purple-400 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(EMAIL_BODY)}`}
              className="text-slate-400 hover:text-purple-400 transition-colors"
              aria-label="Email Purushotham"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <p className="text-slate-400 text-center text-sm">
            © {currentYear} Purushotham Dudekula. Crafted with React.js & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
