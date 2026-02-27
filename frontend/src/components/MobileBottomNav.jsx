import { BookOpen, Home, MessageSquare, Play, Sparkles } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const tabs = [
  { label: "Home", path: "/", icon: Home },
  { label: "Playlist", path: "/playlist", icon: Play },
  { label: "Materials", path: "/materials", icon: BookOpen },
  { label: "Chats", path: "/chats", icon: MessageSquare },
  { label: "AI", path: "/ai", icon: Sparkles },
];

const isRouteActive = (pathname, tabPath) => {
  if (tabPath === "/") return pathname === "/";
  return pathname === tabPath || pathname.startsWith(`${tabPath}/`);
};

const MobileBottomNav = () => {
  const location = useLocation();

  return (
    <nav className="mobile-bottom-nav md:hidden" aria-label="Bottom Navigation">
      <div className="grid grid-cols-5 gap-1 p-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const active = isRouteActive(location.pathname, tab.path);

          return (
            <Link
              key={tab.path}
              to={tab.path}
              className={`mobile-nav-link flex flex-col items-center justify-center gap-1 px-2 py-2 text-[11px] font-medium ${active ? "mobile-nav-link-active" : ""}`}
            >
              <Icon size={17} />
              <span>{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileBottomNav;

