/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // FRONTEND_SERVER: "http://localhost:3000",
    // BACKEND_SERVER: "https://al-backend-tle9.onrender.com/api",
    // STATIC_SERVER: "https://al-backend-tle9.onrender.com",
    FRONTEND_SERVER: "http://localhost:3000",
    BACKEND_SERVER: "https://ajsportstv.ch/api",
    STATIC_SERVER: "https://ajsportstv.ch",
  },
  images: {
    domains: [
      "localhost",
      "lh3.googleusercontent.com",
      "al-backend-tle9.onrender.com",
      "media.tenor.com",
    ],
  },
};

export default nextConfig;
