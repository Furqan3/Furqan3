import { getAllProjects } from "@/sanity/lib/queries";
import ArchiveClient from "./ArchiveClient";

export default async function Page() {
	const projects = await getAllProjects();
	return <ArchiveClient projects={projects} />;
}
