import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjects } from "@/sanity/lib/queries";
import ProjectDetail from "./ProjectDetail";

// Pre-generate static pages for all known slugs
export async function generateStaticParams() {
	const projects = await getAllProjects();
	return projects.map((p) => ({ slug: p.slug }));
}

export default async function Page({ params }) {
	const { slug } = await params;
	const project = await getProjectBySlug(slug);

	if (!project) notFound();

	return <ProjectDetail project={project} />;
}
