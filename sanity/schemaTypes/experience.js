export const experienceSchema = {
	name: "experience",
	title: "Experience",
	type: "document",
	fields: [
		{
			name: "company",
			title: "Company",
			type: "string",
			validation: (Rule) => Rule.required(),
		},
		{
			name: "position",
			title: "Position / Job Title",
			type: "string",
			validation: (Rule) => Rule.required(),
		},
		{
			name: "type",
			title: "Employment Type",
			type: "string",
			options: {
				list: [
					"Full-time",
					"Part-time",
					"Internship",
					"Freelance",
					"Contract (Remote)",
					"Remote",
				],
			},
		},
		{
			name: "startDate",
			title: "Start Date (e.g. Jun 2024)",
			type: "string",
			validation: (Rule) => Rule.required(),
		},
		{
			name: "endDate",
			title: "End Date (e.g. Present)",
			type: "string",
			validation: (Rule) => Rule.required(),
		},
		{
			name: "location",
			title: "Location",
			type: "string",
		},
		{
			name: "description",
			title: "Description",
			type: "text",
		},
		{
			name: "skills",
			title: "Skills / Technologies",
			type: "array",
			of: [{ type: "string" }],
		},
		{
			name: "order",
			title: "Order (lower = shown first)",
			type: "number",
			initialValue: 0,
		},
	],
	orderings: [{ title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
	preview: {
		select: { title: "position", subtitle: "company" },
	},
};
