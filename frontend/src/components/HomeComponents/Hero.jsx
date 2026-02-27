import {
  BookOpen,
  MoveRight,
  Play,
  Sparkles,
  Users,
  ChevronDown,
  Lightbulb,
} from "lucide-react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useNavigate } from "react-router-dom";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
  }),
};

const Hero = () => {
  const navigate = useNavigate();
  const pills = [
    {
      icon: <Sparkles size={20} />,
      text: "AI-Powered",
      gradient: "from-[#0a192f] to-[#112240]",
    },
    {
      icon: <Users size={20} />,
      text: "Collaborative",
      gradient: "from-[#1a1a40] to-[#2b2b66]",
    },
    {
      icon: <BookOpen size={20} />,
      text: "Comprehensive",
      gradient: "from-[#003049] to-[#1d3557]",
    },
    {
      icon: <Lightbulb size={20} />,
      text: "Smart Learning",
      gradient: "from-[#0f172a] to-[#1e293b]",
    },
  ];

  return (
    <section
      id="hero"
      className="home-section-hero relative flex w-full items-center justify-center overflow-hidden py-16 sm:py-24"
    >
      <motion.div
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute -top-40 -left-40 w-[35rem] h-[35rem] bg-gradient-to-r from-indigo-800 via-purple-800 to-blue-800 opacity-25 blur-[160px] rounded-full"
      />
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-blue-900/20 blur-[160px] rounded-full"></div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-4 text-center sm:px-6">
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-center text-2xl font-extrabold leading-tight sm:text-5xl md:text-7xl"
        >
          <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            <TypeAnimation
              sequence={[
                "Learn Together",
                1500,
                "Grow Smarter",
                1500,
                "Build Faster",
                1500,
                "Think Better",
                1500,
                "Start Learning",
                1500,
              ]}
              wrapper="span"
              speed={60}
              repeat={Infinity}
              style={{
                display: "inline-block",
                maxWidth: "100%",
                whiteSpace: "normal",
              }}
            />
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-gray-300 sm:mt-6 sm:text-lg md:text-2xl"
        >
          Experience the next generation of collaborative learning. Watch
          curated playlists, chat with peers, explore AI-driven insights, and
          unlock your potential.
        </motion.p>

        {/* Feature Pills */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="mt-8 flex flex-wrap justify-center gap-3 sm:mt-10 sm:gap-6"
        >
          {pills.map((pill, i) => (
            <motion.div
              key={i}
              whileHover={{
                scale: 1.1,
                boxShadow: `0 0 25px rgba(100,150,255,0.3)`,
              }}
              className={`flex items-center gap-2 rounded-full border border-white/10 bg-gradient-to-r px-4 py-2 text-white shadow-md backdrop-blur-md transition-all duration-300 sm:px-6 sm:py-3 ${pill.gradient}`}
            >
              {pill.icon}
              <span className="text-xs font-medium sm:text-base">
                {pill.text}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={4}
          className="mt-10 flex w-full flex-col items-center justify-center gap-3 sm:mt-12 sm:w-auto sm:flex-row sm:gap-6"
        >
          <motion.button
            onClick={() => navigate("/playlist")}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 35px rgba(0,0,255,0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="flex w-full max-w-xs items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-2.5 text-sm text-white shadow-lg shadow-indigo-900/40 sm:w-auto sm:px-7 sm:py-3 sm:text-base"
          >
            Start Learning
            <MoveRight size={18} />
          </motion.button>

          <motion.button
            onClick={() => navigate("/playlist")}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(255,255,255,0.15)",
            }}
            whileTap={{ scale: 0.95 }}
            className="flex w-full max-w-xs items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-sm text-white backdrop-blur-sm transition-all hover:bg-white/10 sm:w-auto sm:px-7 sm:py-3 sm:text-base"
          >
            Watch Demo
            <Play size={18} />
          </motion.button>
        </motion.div>

        {/* Animated Down Arrow */}
        <motion.div
          className="mt-8 flex text-white sm:mt-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={22} />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
