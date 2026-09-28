import { getProjectBySlug } from "@/lib/content";

export async function generateMetadata({ params }) {
	const { slug } = await params;
	const project = getProjectBySlug(slug);

	if (!project) {
		return { title: "Not Found | Furqan Ahmad" };
	}

	return {
		title: `${project.title} | Furqan Ahmad`,
		description: project.desc[0]?.slice(0, 160),
		openGraph: project.thumbnail ? { images: [project.thumbnail] } : undefined,
	};
}

export default function Layout({ children }) {
	return children;
}
