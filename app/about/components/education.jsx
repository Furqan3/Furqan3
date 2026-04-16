"use client";
import { motion } from "framer-motion";

const colorMap = {
	gold: "from-yellow-400 to-orange-500",
	blue: "from-blue-500 to-purple-600",
	green: "from-green-400 to-teal-500",
	bronze: "from-amber-600 to-yellow-600",
	pink: "from-pink-500 to-rose-600",
	silver: "from-slate-400 to-slate-500",
	cyan: "from-cyan-400 to-blue-500",
	lime: "from-lime-400 to-green-500",
};

const FALLBACK_ACHIEVEMENTS = [
	{ _id: "1", title: "1st Place — Gold Medal", subtitle: "Fesmaro IT Business Competition", date: "2025", colorKey: "gold" },
	{ _id: "2", title: "Finalist", subtitle: "Hackfest Build to Billion 2025", date: "Mar 2025", colorKey: "blue" },
	{ _id: "3", title: "3rd Place — Bronze Medal", subtitle: "Faculty of Engineering Most Outstanding Student", date: "Apr 2025", colorKey: "bronze" },
	{ _id: "4", title: "Special Award | Gold Medal | Incubation Opportunity", subtitle: "Indonesia Inventor Day 2024 (IID)", date: "Aug 2024", colorKey: "pink" },
	{ _id: "5", title: "1st Place — Gold Medal", subtitle: "Tech & Trade Expo 2024", date: "Jul 2024", colorKey: "gold" },
	{ _id: "6", title: "2nd Place — Silver Medal", subtitle: "IdeaFest 2024", date: "Jul 2024", colorKey: "silver" },
];

function extractYear(date) {
	const match = date?.match(/\d{4}/);
	return match ? match[0] : "Other";
}

export default function Education({ achievements, settings }) {
	const data = achievements?.length ? achievements : FALLBACK_ACHIEVEMENTS;

	// Group by year, sorted descending
	const grouped = data.reduce((acc, a) => {
		const year = extractYear(a.date);
		if (!acc[year]) acc[year] = [];
		acc[year].push(a);
		return acc;
	}, {});
	const years = Object.keys(grouped).sort((a, b) => b - a);

	const institution = settings?.institution || "National University of Science and Technology (NUST)";
	const degree = settings?.degree || "BE Computer Engineering";
	const startYear = settings?.eduStartYear || "2020";
	const endYear = settings?.eduEndYear || "2024";
	const eduDescription = settings?.eduDescription || "Graduated with a degree in Computer Engineering from NUST, one of Pakistan's top-ranked universities. Built a strong foundation in computer systems, algorithms, and software engineering alongside practical experience in Full-Stack Development, Machine Learning, and Embedded Systems.";
	const eduTags = settings?.eduTags || ["Computer Engineering", "Islamabad, Pakistan"];

	return (
		<div className="mx-auto container gap-10 p-10 grid grid-cols-1 my-10">
			<motion.div
				className="flex justify-center items-start flex-col mb-5"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.3, duration: 0.8, type: "spring", stiffness: 100 }}>
				<section className="grid gap-8 md:gap-12 w-full">
					{/* Header */}
					<motion.div
						className="text-center space-y-2"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}>
						<h1 className="text-3xl md:text-4xl font-bold tracking-tighter">Education</h1>
						<p className="text-muted-foreground max-w-[800px] mx-auto">
							Get to know more about my educational background.
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{/* Education — Left */}
						<motion.div
							className="px-5"
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}>
							<div className="font-medium text-lg mb-4">
								{startYear} - {endYear}
							</div>
							<div>
								<h2 className="font-semibold text-xl">{institution}</h2>
								<h3 className="text-md font-normal mb-3">{degree}</h3>
								<p className="text-gray-600 text-justify title text-lg leading-relaxed mb-4">
									{eduDescription}
								</p>
								<div className="flex flex-wrap gap-2 mt-4 text-sm">
									{eduTags.map((tag, i) => (
										<div key={i} className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
											{tag}
										</div>
									))}
								</div>
							</div>
						</motion.div>

						{/* Achievements — Right, grouped by year with cards */}
						<motion.div
							className="flex flex-col justify-start px-5 md:px-0"
							initial={{ opacity: 0, x: 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.4 }}>
							<h2 className="font-semibold text-xl mt-7 mb-1">Key Achievements</h2>
							<p className="text-md font-normal mb-6 text-gray-500">
								Some of my achievements during my study.
							</p>

							<div className="space-y-8">
								{years.map((year, yi) => (
									<motion.div
										key={year}
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.5, delay: yi * 0.1 }}>
										{/* Year header */}
										<div className="flex items-center gap-3 mb-4">
											<span className="text-2xl font-bold text-black">{year}</span>
											<div className="flex-1 h-px bg-gray-300" />
										</div>

										{/* Cards for this year */}
										<div className="space-y-3">
											{grouped[year].map((a, i) => {
												const color = colorMap[a.colorKey] || "from-yellow-400 to-orange-500";
												return (
													<motion.div
														key={a._id || i}
														initial={{ opacity: 0, y: 20 }}
														animate={{ opacity: 1, y: 0 }}
														transition={{ duration: 0.5, delay: i * 0.05 }}>
														<div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-4 shadow-lg hover:bg-white/30 transition-all duration-300 hover:shadow-xl grayscale hover:grayscale-0">
															<div className="flex items-center gap-4">
																<div className={`w-2 self-stretch rounded-full bg-gradient-to-b ${color} shrink-0`} />
																<div>
																	<h3 className="font-medium">{a.title}</h3>
																	<p className="text-sm text-gray-600">{a.subtitle}</p>
																	{a.date && a.date !== year && (
																		<p className="text-xs text-gray-400 mt-1">{a.date}</p>
																	)}
																</div>
															</div>
														</div>
													</motion.div>
												);
											})}
										</div>
									</motion.div>
								))}
							</div>
						</motion.div>
					</div>
				</section>
			</motion.div>
		</div>
	);
}
