import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjects } from "@/lib/content";
import ProjectDetail from "./ProjectDetail";

export const dynamicParams = false;

export function generateStaticParams() {
	return getAllProjects().map((p) => ({ slug: p.slug }));
}

export default async function Page({ params }) {
	const { slug } = await params;
	const project = getProjectBySlug(slug);

	if (!project) notFound();

	return <ProjectDetail project={project} />;
}
