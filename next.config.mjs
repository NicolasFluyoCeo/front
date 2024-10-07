// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'out', // o 'public', según prefieras
    reactStrictMode: true,
    // Si tienes rutas dinámicas, elimina 'output: export'
  }
  
  export default nextConfig;
  