import Footer from "@/components/Footer";

export const metadata = {
	title: "Resume | Furqan Ahmad",
	description:
		"Resume of Furqan Ahmad — Full-Stack Developer & AI Engineer specialising in Next.js, FastAPI, RAG systems, and production cloud deployments.",
};

export default function Layout({ children }) {
	return (
		<>
			{children}
			<Footer />
		</>
	);
}
