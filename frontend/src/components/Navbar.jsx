import { useContext, useEffect, useMemo, useState } from "react";
import {
  Book,
  BookOpen,
  Home,
  Menu,
  MessageSquare,
  Palette,
  Play,
  Sparkles,
  User,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LearnContext } from "../../context/LearnContextProvider";
import { useThemeStore } from "../../store/useThemeStore";

const navItems = [
  { label: "Home", path: "/", icon: Home },
  { label: "Playlist", path: "/playlist", icon: Play },
  {
    label: "Materials",
    path: "/materials",
    icon: BookOpen,
    dropdown: [
      { label: "All Materials", path: "/materials" },
      { label: "Cheatsheets", path: "/cheatsheets" },
      { label: "Roadmaps", path: "/roadmaps" },
      { label: "Resume Templates", path: "/resumes" },
    ],
  },
  { label: "Chats", path: "/chats", icon: MessageSquare },
  { label: "AI", path: "/ai", icon: Sparkles },
];

const isRouteActive = (pathname, routePath) => {
  if (routePath === "/") return pathname === "/";
  return pathname === routePath || pathname.startsWith(`${routePath}/`);
};

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setToken } = useContext(LearnContext);
  const { theme, themes, setTheme, cycleTheme } = useThemeStore();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMaterialsOpen, setIsMaterialsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const isMaterialsRoute = useMemo(
    () =>
      ["/materials", "/cheatsheets", "/roadmaps", "/resumes"].some((path) =>
        isRouteActive(location.pathname, path),
      ),
    [location.pathname],
  );

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsProfileOpen(false);
    setIsMaterialsOpen(false);
  }, [location.pathname]);

  const handleLogout = () => {
    if (!localStorage.getItem("token")) return;
    setToken("");
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <header
      className={`app-topbar fixed inset-x-0 top-0 z-50 transition-shadow duration-200 ${isScrolled ? "shadow-lg shadow-black/25" : ""}`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="app-surface flex h-10 w-10 items-center justify-center rounded-xl">
            <Book className="text-white" size={22} />
          </div>
          <div className="leading-tight">
            <p className="text-base font-bold text-white sm:text-lg">LearnHub</p>
            <p className="text-[11px] text-slate-300">Mobile Learning</p>
          </div>
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = item.dropdown
              ? isMaterialsRoute
              : isRouteActive(location.pathname, item.path);

            if (item.dropdown) {
              return (
                <div
                  key={item.path}
                  className="relative"
                  onMouseEnter={() => setIsMaterialsOpen(true)}
                  onMouseLeave={() => setIsMaterialsOpen(false)}
                >
                  <button
                    className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm transition-colors ${active ? "bg-blue-600 text-white" : "text-slate-200 hover:bg-white/10"}`}
                  >
                    <Icon size={16} />
                    {item.label}
                  </button>
                  <AnimatePresence>
                    {isMaterialsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="app-surface absolute left-0 mt-2 flex w-52 flex-col rounded-xl p-2"
                      >
                        {item.dropdown.map((dropItem) => (
                          <Link
                            key={dropItem.path}
                            to={dropItem.path}
                            className="rounded-lg px-3 py-2 text-sm text-slate-100 transition-colors hover:bg-white/10"
                          >
                            {dropItem.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm transition-colors ${active ? "bg-blue-600 text-white" : "text-slate-200 hover:bg-white/10"}`}
              >
                <Icon size={16} />
                {item.label}
              </Link>
            );
          })}

          <div className="app-surface flex items-center gap-2 rounded-xl px-2 py-1.5">
            <Palette size={15} className="text-sky-300" />
            <select
              value={theme}
              onChange={(event) => setTheme(event.target.value)}
              className="theme-select rounded-md px-2 py-1 text-xs focus:outline-none"
              aria-label="Theme"
            >
              {themes.map((themeOption) => (
                <option key={themeOption.id} value={themeOption.id}>
                  {themeOption.label}
                </option>
              ))}
            </select>
          </div>

          <div className="relative">
            <button
              onClick={() => setIsProfileOpen((prev) => !prev)}
              className="app-surface flex h-10 w-10 items-center justify-center rounded-xl text-white transition hover:bg-white/10"
            >
              <User size={18} />
            </button>
            <AnimatePresence>
              {isProfileOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="app-surface absolute right-0 mt-2 flex w-36 flex-col rounded-xl p-2"
                >
                  <Link
                    to="/profile"
                    className="rounded-lg px-3 py-2 text-sm text-slate-100 transition-colors hover:bg-white/10"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="rounded-lg px-3 py-2 text-left text-sm text-slate-100 transition-colors hover:bg-red-500/60"
                  >
                    Logout
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={cycleTheme}
            className="app-surface flex h-10 w-10 items-center justify-center rounded-xl text-white"
            aria-label="Cycle Theme"
          >
            <Palette size={18} />
          </button>
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="app-surface flex h-10 w-10 items-center justify-center rounded-xl text-white"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="app-surface mx-4 mb-3 rounded-2xl p-3 md:hidden"
          >
            <div className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = item.dropdown
                  ? isMaterialsRoute
                  : isRouteActive(location.pathname, item.path);

                if (item.dropdown) {
                  return (
                    <div key={item.path} className="rounded-xl border border-white/10">
                      <button
                        onClick={() => setIsMaterialsOpen((prev) => !prev)}
                        className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm ${active ? "bg-blue-600 text-white" : "text-slate-200"}`}
                      >
                        <span className="flex items-center gap-2">
                          <Icon size={16} />
                          {item.label}
                        </span>
                        <span>{isMaterialsOpen ? "-" : "+"}</span>
                      </button>
                      {isMaterialsOpen && (
                        <div className="space-y-1 px-3 pb-3">
                          {item.dropdown.map((dropItem) => (
                            <Link
                              key={dropItem.path}
                              to={dropItem.path}
                              className="block rounded-lg px-3 py-2 text-sm text-slate-200 transition-colors hover:bg-white/10"
                            >
                              {dropItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm ${active ? "bg-blue-600 text-white" : "text-slate-200 hover:bg-white/10"}`}
                  >
                    <Icon size={16} />
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <div className="mt-3 rounded-xl border border-white/10 p-3">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-300">
                Theme
              </p>
              <div className="grid grid-cols-3 gap-2">
                {themes.map((themeOption) => (
                  <button
                    key={themeOption.id}
                    onClick={() => setTheme(themeOption.id)}
                    className={`rounded-lg px-2 py-2 text-xs font-medium ${theme === themeOption.id ? "bg-blue-600 text-white" : "bg-white/10 text-slate-200"}`}
                  >
                    {themeOption.chip}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2">
              <Link
                to="/profile"
                className="rounded-xl bg-white/10 px-3 py-2 text-center text-sm text-slate-100"
              >
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="rounded-xl bg-red-500/70 px-3 py-2 text-sm text-white"
              >
                Logout
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

