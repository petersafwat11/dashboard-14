/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    FRONTEND_SERVER: "https://ajsports.ch",
    BACKEND_SERVER: "https://vercel-backend-steel-two.vercel.app/api",
    STATIC_SERVER: "https://vercel-backend-steel-two.vercel.app",
    // FRONTEND_SERVER: "http://localhost:3000",
    // BACKEND_SERVER: "http://localhost:5000/api",
    // STATIC_SERVER: "http://localhost:5000",

    // FRONTEND_SERVER: "https://ajsports.ch",
    // BACKEND_SERVER: "https://ajsports.ch/api",
    // STATIC_SERVER: "https://ajsports.ch",
  },
  images: {
    domains: [
      "localhost",
      "lh3.googleusercontent.com",
      "al-backend-tle9.onrender.com",
      "media.tenor.com",
      "vercel-backend-steel-two.vercel.app",
    ],
  },
};

export default nextConfig;
