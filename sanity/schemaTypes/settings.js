export const settingsSchema = {
	name: "settings",
	title: "Site Settings",
	type: "document",
	fields: [
		// ── Personal Info ──────────────────────────────────────────
		{
			name: "name",
			title: "Full Name",
			type: "string",
		},
		{
			name: "title",
			title: "Job Title",
			type: "string",
		},
		{
			name: "bio",
			title: "About Bio (use blank line to separate paragraphs)",
			type: "text",
			rows: 8,
		},
		{
			name: "email",
			title: "Email",
			type: "string",
		},
		{
			name: "github",
			title: "GitHub URL",
			type: "url",
		},
		{
			name: "linkedin",
			title: "LinkedIn URL",
			type: "url",
		},
		// ── Education ─────────────────────────────────────────────
		{
			name: "institution",
			title: "University / Institution",
			type: "string",
		},
		{
			name: "degree",
			title: "Degree",
			type: "string",
		},
		{
			name: "eduStartYear",
			title: "Education Start Year",
			type: "string",
		},
		{
			name: "eduEndYear",
			title: "Education End Year",
			type: "string",
		},
		{
			name: "eduLocation",
			title: "Education Location",
			type: "string",
		},
		{
			name: "eduDescription",
			title: "Education Description",
			type: "text",
			rows: 6,
		},
		{
			name: "eduTags",
			title: "Education Tags (e.g. GPA: 3.9/4.0)",
			type: "array",
			of: [{ type: "string" }],
		},
	],
	preview: {
		select: { title: "name", subtitle: "title" },
	},
};
