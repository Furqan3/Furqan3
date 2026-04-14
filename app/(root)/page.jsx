import { getSettings } from "@/sanity/lib/queries";
import HomeClient from "./HomeClient";

export default async function Page() {
	const settings = await getSettings();
	return <HomeClient settings={settings} />;
}
