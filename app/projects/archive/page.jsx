import { getAllProjects } from "@/lib/content";
import ArchiveClient from "./ArchiveClient";

export default function Page() {
	return <ArchiveClient projects={getAllProjects()} />;
}
