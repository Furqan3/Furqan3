import { getSettings } from "@/lib/content";
import HomeClient from "./HomeClient";

export default function Page() {
	return <HomeClient settings={getSettings()} />;
}
