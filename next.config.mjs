/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    distDir: 'out', // O puedes dejar el predeterminado si no necesitas cambiar la salida
    output: 'standalone', // Este es clave para que funcione SSR en Vercel
  }
  
  export default nextConfig;
  