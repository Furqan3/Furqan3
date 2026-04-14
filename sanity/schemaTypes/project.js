export const projectSchema = {
	name: "project",
	title: "Project",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
			validation: (Rule) => Rule.required(),
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: { source: "title", maxLength: 96 },
			validation: (Rule) => Rule.required(),
		},
		{
			name: "show",
			title: "Show on Projects page",
			type: "boolean",
			initialValue: true,
		},
		{
			name: "featured",
			title: "Featured (shown as Highlight)",
			type: "boolean",
			initialValue: false,
		},
		{
			name: "year",
			title: "Year",
			type: "string",
		},
		{
			name: "desc",
			title: "Description (one paragraph per item)",
			type: "array",
			of: [{ type: "text" }],
		},
		{
			name: "tech",
			title: "Tech Stack",
			type: "array",
			of: [{ type: "string" }],
		},
		{
			name: "category",
			title: "Category (1=Web, 2=AI/ML, 9=Other)",
			type: "array",
			of: [{ type: "number" }],
		},
		{
			name: "thumbnail",
			title: "Thumbnail Image",
			type: "image",
			options: { hotspot: true },
		},
		{
			name: "images",
			title: "Project Screenshots",
			type: "array",
			of: [{ type: "image", options: { hotspot: true } }],
		},
		{
			name: "preview",
			title: "Live Preview URL",
			type: "url",
		},
		{
			name: "code",
			title: "Source Code URL (GitHub)",
			type: "url",
		},
	],
	preview: {
		select: { title: "title", media: "thumbnail" },
	},
};
