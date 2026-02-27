import { motion } from "framer-motion";
import {
  FileText,
  BookOpen,
  Image,
  FileType,
  Map,
  ScrollText,
  FileUser,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
const materialTypes = [
  {
    icon: FileText,
    title: "PDF Resources",
    description:
      "Comprehensive study materials and reference guides in PDF format",
    count: "500+",
    gradient: "from-red-500 to-orange-500",
    path: "/materials",
  },
  {
    icon: BookOpen,
    title: "Study Notes",
    description:
      "Concise, well-organized notes for quick revision and learning",
    count: "1000+",
    gradient: "from-blue-500 to-cyan-500",
    path: "/materials",
  },
  {
    icon: FileType,
    title: "DOCX Files",
    description: "Editable documents for assignments and practice exercises",
    count: "300+",
    gradient: "from-purple-500 to-pink-500",
    path: "/materials",
  },
  {
    icon: Image,
    title: "Visual Diagrams",
    description: "Infographics and diagrams to visualize complex concepts",
    count: "800+",
    gradient: "from-green-500 to-emerald-500",
    path: "/materials",
  },
  {
    icon: ScrollText,
    title: "Cheat Sheets",
    description:
      "Quick reference sheets for syntax, algorithms, and important formulas",
    count: "200+",
    gradient: "from-yellow-500 to-amber-500",
    path: "/cheatsheets",
  },
  {
    icon: Map,
    title: "Roadmaps",
    description:
      "Step-by-step learning paths to guide your development journey",
    count: "50+",
    gradient: "from-indigo-500 to-blue-500",
    path: "/roadmaps",
  },
  {
    icon: FileUser,
    title: "Resume Templates",
    description:
      "Professional resume templates to help you stand out in job applications",
    count: "100+",
    gradient: "from-pink-500 to-rose-500",
    path: "/resumes",
  },
];

export default function Materials() {
  const navigate = useNavigate();
  return (
    <section
      id="materials"
      className="home-section-materials relative overflow-hidden py-20 sm:py-24"
    >
      { /*<Snowfall />*/}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center sm:mb-16"
        >
          <h2 className="mb-4 text-2xl font-bold text-white sm:text-5xl">
            Learn with
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              {" "}
              Rich Materials
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-300 sm:text-xl">
            Access comprehensive study materials including PDFs, notes,
            documents, diagrams, cheat sheets, roadmaps, and more to strengthen
            your theoretical and practical knowledge.
          </p>
        </motion.div>

       
        <div className="mb-12 grid grid-cols-1 gap-6 md:mb-16 md:grid-cols-2 lg:grid-cols-4">
          {materialTypes.map((material, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onClick={() => navigate(material.path)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  navigate(material.path);
                }
              }}
              role="button"
              tabIndex={0}
              className="group relative cursor-pointer"
            >
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all h-full">
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${material.gradient} mb-4`}
                >
                  <material.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="mb-2 text-lg font-bold text-white sm:text-xl">
                  {material.title}
                </h3>
                <p className="mb-4 text-sm text-gray-300">
                  {material.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-white">
                    {material.count}
                  </span>
                  <span className="text-sm text-gray-400">resources</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-white/10 bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-6 text-center backdrop-blur-xl sm:p-8"
        >
          <h3 className="mb-3 text-xl font-bold text-white sm:text-2xl">
            Download Anytime, Learn Anywhere
          </h3>
          <p className="mx-auto mb-6 max-w-2xl text-sm text-gray-300 sm:text-base">
            All study materials are available for offline access. Download once
            and study without internet connection.
          </p>
          <button
            onClick={() => navigate("/materials")}
            className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 transition-transform hover:scale-105 sm:px-8 sm:py-4 sm:text-base"
          >
            Browse All Materials
          </button>
        </motion.div>
      </div>
    </section>
  );
}
