export const BACKEND_URL =
  import.meta.env.VITE_BACKEND_URL?.trim() ||
  import.meta.env.VITE_BACKEND_LIVE_URL?.trim() ||
  "https://learnhub-e0dm.onrender.com";

export const SOCKET_OPTIONS = {
  transports: ["websocket"],
  timeout: 20000,
};
