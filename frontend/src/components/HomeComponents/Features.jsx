import {
  Target,
  MessageCircle,
  Youtube,
  Puzzle,
  TrendingUp,
  BookOpen,
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const features = [
  {
    icon: Target,
    title: "AI Mentor",
    description:
      "Personalized guidance for every learner. Get instant help, code reviews, and smart suggestions tailored to your learning pace.",
    gradient: "from-blue-500 to-cyan-500",
    path: "/ai",
  },
  {
    icon: MessageCircle,
    title: "Group Chat Rooms",
    description:
      "Learn together and solve problems as a community. Join study rooms, collaborate on projects, and grow with peers.",
    gradient: "from-purple-500 to-pink-500",
    path: "/chats",
  },
  {
    icon: Youtube,
    title: "YouTube Playlist Integration",
    description:
      "Curated video lessons for each topic. Access hand-picked tutorials from the best creators, organized by skill level.",
    gradient: "from-red-500 to-orange-500",
    path: "/playlist",
  },
  {
    icon: BookOpen,
    title: "Learning Materials",
    description:
      "Access structured notes, PDFs, and curated resources for every topic. Study anytime, anywhere with organized materials.",
    gradient: "from-yellow-500 to-amber-500",
    path: "/materials",
  },
  {
    icon: Puzzle,
    title: "Project-Based Learning",
    description:
      "Build real-world apps while learning concepts. Apply your knowledge immediately with guided projects and challenges.",
    gradient: "from-green-500 to-emerald-500",
    path: "/playlist",
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description:
      "Smart dashboard to track learning goals. Visualize your growth, set milestones, and celebrate achievements.",
    gradient: "from-indigo-500 to-purple-500",
    path: "/profile",
  },
];

const Features = () => {
  const navigate = useNavigate();

  return (
    <section
      id="features"
      className="home-section-features relative overflow-hidden py-20 sm:py-24"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="mx-auto flex w-[88%] max-w-7xl flex-col gap-20 sm:w-[84%]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-10 text-center sm:mb-16"
        >
          <h2 className="mb-4 text-2xl font-bold text-white sm:text-5xl">
            Everything You Need to
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {" "}
              Succeed
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-300 sm:text-xl">
            A complete learning ecosystem designed for modern developers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onClick={() => navigate(feature.path)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  navigate(feature.path);
                }
              }}
              role="button"
              tabIndex={0}
              className="group relative cursor-pointer"
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-r opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative h-full rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/20 sm:p-8">
                <div
                  className={`mb-4 inline-flex rounded-xl bg-gradient-to-r p-3 ${feature.gradient}`}
                >
                  <feature.icon className="h-6 w-6 text-white" />
                </div>

                <h3 className="mb-3 text-xl font-bold text-white">
                  {feature.title}
                </h3>
                <p className="leading-relaxed text-gray-400">
                  {feature.description}
                </p>

                <div className="mt-6 flex items-center text-sm font-semibold">
                  <span
                    className={`bg-gradient-to-r bg-clip-text text-transparent ${feature.gradient}`}
                  >
                    Learn more
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
