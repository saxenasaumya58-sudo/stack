/** @type {import('next').NextConfig} */
if (process.env.VERCEL_URL && !process.env.NEXTAUTH_URL) {
	process.env.NEXTAUTH_URL = `https://${process.env.VERCEL_URL}`;
}

const nextConfig = {
	distDir: process.env.NEXT_BUILD_DIST_DIR || ".next",
	images: { remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }, { protocol: "https", hostname: "res.cloudinary.com" }] },
};

export default nextConfig;
