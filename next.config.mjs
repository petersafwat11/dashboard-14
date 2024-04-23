/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    FRONTEND_SERVER: "http://localhost:3000",
    BACKEND_SERVER: "https://al-backend-tle9.onrender.com/api",
    STATIC_SERVER: "https://al-backend-tle9.onrender.com",

    // FRONTEND_SERVER: "http://localhost:3000",
    // BACKEND_SERVER: "http://localhost:8000/api",
    // STATIC_SERVER: "http://localhost:8000",
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
