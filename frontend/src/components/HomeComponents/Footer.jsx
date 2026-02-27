import { BookOpen, Github, Heart, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/Shankars57",
    label: "GitHub",
  },
  {
    icon: Mail,
    href: "mailto:bonamgshankar@gmail.com",
    label: "Email",
  },
];

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Playlists", href: "/playlist" },
  { label: "Materials", href: "/materials" },
];

const supportLinks = [
  { label: "Contact", href: "/contact" },
  { label: "Chats", href: "/chats" },
  { label: "AI Mentor", href: "/ai" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="home-footer">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-purple-600">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-2xl font-bold text-transparent">
                LearnHub
              </span>
            </div>
            <p className="mb-6 max-w-md text-sm leading-relaxed text-slate-300 sm:text-base">
              LearnHub helps students learn faster with curated playlists,
              structured materials, AI assistance, and collaborative chat rooms.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((socialLink) => {
                const Icon = socialLink.icon;
                return (
                  <a
                    key={socialLink.label}
                    href={socialLink.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={socialLink.label}
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-slate-200 transition-all duration-200 hover:scale-105 hover:bg-blue-600 hover:text-white"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-slate-300 transition-colors hover:text-blue-300 sm:text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Support</h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-slate-300 transition-colors hover:text-purple-300 sm:text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <p className="mt-5 text-sm text-slate-200">
              Need help?{" "}
              <a className="text-blue-300 hover:text-blue-200" href="tel:9110560147">
                +91 9110560147
              </a>
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-slate-300 md:flex-row">
          <p>(c) {currentYear} LearnHub. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-red-500" /> for learners
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
