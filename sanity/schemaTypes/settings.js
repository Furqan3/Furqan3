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
		// ── Images ────────────────────────────────────────────────
		// ── Skills ────────────────────────────────────────────────
		{
			name: "skillCategories",
			title: "Skill Categories",
			type: "array",
			of: [
				{
					type: "object",
					name: "skillCategory",
					fields: [
						{ name: "key", title: "Category Key (web / api / ai / cloud)", type: "string" },
						{ name: "title", title: "Title", type: "string" },
						{ name: "description", title: "Description", type: "string" },
						{
							name: "languages",
							title: "Languages & Frameworks",
							type: "array",
							of: [
								{
									type: "object",
									name: "skillItem",
									fields: [
										{ name: "name", title: "Name", type: "string" },
										{ name: "highlight", title: "Highlight (primary skill)", type: "boolean" },
									],
									preview: { select: { title: "name" } },
								},
							],
						},
						{
							name: "tools",
							title: "Tools & Infrastructure",
							type: "array",
							of: [{ type: "string" }],
						},
					],
					preview: { select: { title: "title" } },
				},
			],
		},
		// ── Resume ────────────────────────────────────────────────
		{
			name: "resume",
			title: "Resume / CV (PDF)",
			type: "file",
			options: { accept: ".pdf" },
		},
		// ── Images ────────────────────────────────────────────────
		{
			name: "heroImage",
			title: "Hero Photo (circular profile photo on home page)",
			type: "image",
			options: { hotspot: true },
		},
		{
			name: "aboutHeroImage",
			title: "About Hero Image (full-height photo on About page & home About section)",
			type: "image",
			options: { hotspot: true },
		},
		{
			name: "aboutImage1",
			title: "About Collage – Image 1 (large, left)",
			type: "image",
			options: { hotspot: true },
		},
		{
			name: "aboutImage2",
			title: "About Collage – Image 2 (small, top-right)",
			type: "image",
			options: { hotspot: true },
		},
		{
			name: "aboutImage3",
			title: "About Collage – Image 3 (medium, bottom-right)",
			type: "image",
			options: { hotspot: true },
		},
		{
			name: "projectsImage",
			title: "Projects Section Image (home page)",
			type: "image",
			options: { hotspot: true },
		},
		{
			name: "setupImage",
			title: "Setup / Contact Section Image (home page)",
			type: "image",
			options: { hotspot: true },
		},
	],
	preview: {
		select: { title: "name", subtitle: "title" },
	},
};
