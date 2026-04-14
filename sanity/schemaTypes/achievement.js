export const achievementSchema = {
	name: "achievement",
	title: "Achievement",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title (e.g. 95% Accuracy)",
			type: "string",
			validation: (Rule) => Rule.required(),
		},
		{
			name: "subtitle",
			title: "Subtitle (e.g. Real-time facial recognition...)",
			type: "string",
			validation: (Rule) => Rule.required(),
		},
		{
			name: "date",
			title: "Date / Year",
			type: "string",
		},
		{
			name: "iconKey",
			title: "Icon",
			type: "string",
			options: {
				list: [
					{ title: "Trophy", value: "trophy" },
					{ title: "Medal", value: "medal" },
					{ title: "Award / Star", value: "award" },
					{ title: "Rocket", value: "rocket" },
					{ title: "Bolt / Lightning", value: "bolt" },
				],
			},
			initialValue: "medal",
		},
		{
			name: "colorKey",
			title: "Color",
			type: "string",
			options: {
				list: [
					{ title: "Gold", value: "gold" },
					{ title: "Blue / Purple", value: "blue" },
					{ title: "Green / Teal", value: "green" },
					{ title: "Bronze", value: "bronze" },
					{ title: "Pink / Rose", value: "pink" },
					{ title: "Silver", value: "silver" },
					{ title: "Cyan / Blue", value: "cyan" },
					{ title: "Lime / Green", value: "lime" },
				],
			},
			initialValue: "gold",
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
		select: { title: "title", subtitle: "subtitle" },
	},
};
