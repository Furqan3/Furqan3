import { getVisibleProjects, getFeaturedProject } from "@/lib/content";
import ProjectsClient from "./components/ProjectsClient";

export default function Page() {
	return (
		<ProjectsClient projects={getVisibleProjects()} featuredProject={getFeaturedProject()} />
	);
}
