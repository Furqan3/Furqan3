import { getAllProjects, getFeaturedProject } from "@/sanity/lib/queries";
import ProjectsClient from "./components/ProjectsClient";

export default async function Page() {
	const [allProjects, featuredProject] = await Promise.all([
		getAllProjects(),
		getFeaturedProject(),
	]);

	const projects = allProjects.filter((p) => p.show !== false);

	return <ProjectsClient projects={projects} featuredProject={featuredProject} />;
}
