import { motion } from "framer-motion";
import { Play, Clock, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
const playlists = [
  {
    title: "JavaScript Fundamentals",
    thumbnail:
      "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800",
    duration: "12 hours",
    views: "2.5M",
    category: "Beginner",
    path: "/playlist",
  },
  {
    title: "Data Structures & Algorithms",
    thumbnail:
      "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
    duration: "20 hours",
    views: "1.8M",
    category: "Intermediate",
    path: "/playlist",
  },
  {
    title: "React Complete Guide",
    thumbnail:
      "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800",
    duration: "15 hours",
    views: "3.2M",
    category: "Advanced",
    path: "/playlist",
  },
  {
    title: "Full Stack Development",
    thumbnail:
      "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800",
    duration: "30 hours",
    views: "1.2M",
    category: "Expert",
    path: "/playlist",
  },
];

export default function YouTubeSection() {
  const navigate = useNavigate();
  return (
    <section
      id="playlists"
      className="home-section-playlists relative overflow-hidden py-20 sm:py-24"
    >
     { /*<Snowfall />*/}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center sm:mb-16"
        >
          <h2 className="mb-4 text-2xl font-bold text-white sm:text-5xl">
            Curated Video
            <span className="bg-gradient-to-r from-red-400 to-orange-400 text-transparent bg-clip-text">
              {" "}
              Lessons
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-300 sm:text-xl">
            Hand-picked tutorials from the best creators, organized just for you
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {playlists.map((playlist, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onClick={() => navigate(playlist.path)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  navigate(playlist.path);
                }
              }}
              role="button"
              tabIndex={0}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                  src={playlist.thumbnail}
                  alt={playlist.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                  </div>
                </div>
                <div className="absolute top-3 right-3 px-2 py-1 bg-black/60 backdrop-blur-sm rounded-md text-xs text-white">
                  {playlist.category}
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {playlist.title}
              </h3>

              <div className="flex items-center gap-4 text-sm text-gray-300">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{playlist.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>{playlist.views}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button
            onClick={() => navigate("/playlist")}
            className="rounded-full bg-gradient-to-r from-red-600 to-orange-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-red-500/30 transition-transform hover:scale-105 sm:px-8 sm:py-4 sm:text-base"
          >
            Browse All Playlists
          </button>
        </motion.div>
      </div>
    </section>
  );
}
