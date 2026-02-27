import { useContext, Suspense, lazy, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { LearnContext } from "../context/LearnContextProvider";
import PersistentPlayer from "./components/PersistencePlayer";
import AboutUs from "./pages/AboutUs";
import ContactPage from "./pages/ContactPage";
import Spinner from "./components/Spinner";
import { useChatRoomTheme } from "../store/useChatRoomTheme";
import { useThemeStore } from "../store/useThemeStore";
const Home = lazy(() => import("./pages/Home"));
const Materials = lazy(() => import("./pages/Materials"));
const Chat = lazy(() => import("./pages/Chat"));
const AI = lazy(() => import("./pages/AI"));
const Profile = lazy(() => import("./pages/Profile"));
const Navbar = lazy(() => import("./components/Navbar"));
const MobileBottomNav = lazy(() => import("./components/MobileBottomNav"));
const PlayList = lazy(() => import("./pages/PlayList"));
const Login = lazy(() => import("./components/Login"));
const Playlists = lazy(() => import("./components/PlayLists"));
const VideoContent = lazy(() => import("./components/VideoContent"));
const OtpVerify = lazy(() => import("./components/OtpVerify"));
const ChatRoomDemo = lazy(() => import("./demo/ChatRoomDemo"));
const ResumeTemp = lazy(() => import("./pages/ResumeTemp"));
const CheatSheets = lazy(() => import("./pages/CheatSheets"));
const RoadMaps = lazy(() => import("./pages/RoadMaps"));

const NotFound = () => (
  <div className="flex min-h-[80vh] items-center justify-center">
    <h1 className="text-center text-3xl font-bold text-white sm:text-5xl">
      Page Not Found 404.
    </h1>
  </div>
);

const App = () => {
  const { token, userData } = useContext(LearnContext);
  const { roomId } = useChatRoomTheme();
  const { theme } = useThemeStore();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme || "graphite");
  }, [theme]);

  return (
    <div className="app-shell">
      <Toaster
        toastOptions={{
          style: {
            background: "var(--surface-strong)",
            color: "var(--text-primary)",
            border: "1px solid var(--border-color)",
          },
        }}
      />
      <Suspense fallback={<Spinner />}>
        {token && <Navbar />}
        {token && <MobileBottomNav />}
        <PersistentPlayer />
        <main
          className={`app-main ${token ? "pt-20 md:pt-24 mobile-safe-bottom md:pb-8" : "pt-0 pb-0"}`}
        >
          <Routes>
            <Route path="/" element={token ? <Home /> : <Login />} />
            <Route
              path="/otp"
              element={!userData.isVerified ? <OtpVerify /> : <Profile />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/playlist" element={<PlayList />}>
              <Route index element={<VideoContent />} />
              <Route path=":playlistId" element={<Playlists />} />
            </Route>
            <Route path="/materials" element={<Materials />} />

            <Route path="/cheatsheets" element={<CheatSheets />} />
            <Route path="/roadmaps" element={<RoadMaps />} />
            <Route path="/resumes" element={<ResumeTemp />} />

            <Route path="/chats" element={<Chat />}>
              <Route
                index
                element={<Navigate to={roomId.id && roomId.id} replace />}
              />
              <Route path=":roomId" element={<ChatRoomDemo />} />
            </Route>
            <Route path="/ai" element={<AI />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </Suspense>
    </div>
  );
};

export default App;
