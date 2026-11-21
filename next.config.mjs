/** @type {import('next').NextConfig} */
const nextAuthUrl = process.env.VERCEL_URL
	? `https://${process.env.VERCEL_URL}`
	: process.env.NEXTAUTH_URL;

const nextConfig = {
	...(nextAuthUrl ? { env: { NEXTAUTH_URL: nextAuthUrl } } : {}),
	distDir: process.env.NEXT_BUILD_DIST_DIR || ".next",
	images: { remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }, { protocol: "https", hostname: "res.cloudinary.com" }] },
};

export default nextConfig;
