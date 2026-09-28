import { renderToBuffer } from "@react-pdf/renderer";
import * as data from "@/app/resume/data";
import ResumePDF from "@/app/resume/ResumePDF";

export const runtime = "nodejs";
// Rendered once at build time and served as a static file.
export const dynamic = "force-static";

export async function GET() {
	const buffer = await renderToBuffer(
		<ResumePDF
			contact={data.contact}
			summary={data.summary}
			expertise={data.expertise}
			experience={data.experience}
			projects={data.projects}
			education={data.education}
		/>
	);

	const filename = `${data.contact.name.replace(/\s+/g, "_")}_Resume.pdf`;
	return new Response(buffer, {
		status: 200,
		headers: {
			"Content-Type": "application/pdf",
			"Content-Disposition": `attachment; filename="${filename}"`,
		},
	});
}
