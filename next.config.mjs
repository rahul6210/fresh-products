/** @type {import('next').NextConfig} */
const nextConfig = {
    output:"export",
     images: {
    unoptimized: true, // ✅ disables image optimization in static export
  },
};

export default nextConfig;
