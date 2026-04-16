"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMedal,
	faTrophy,
	faAward,
	faRocket,
	faBolt,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const iconMap = {
	trophy: faTrophy,
	medal: faMedal,
	award: faAward,
	rocket: faRocket,
	bolt: faBolt,
};

const colorMap = {
	gold: "text-yellow-500",
	blue: "text-blue-500",
	green: "text-green-500",
	bronze: "text-amber-600",
	pink: "text-pink-500",
	silver: "text-slate-400",
	cyan: "text-cyan-500",
	lime: "text-lime-500",
};

const FALLBACK_ACHIEVEMENTS = [
	{ _id: "1", title: "1st Place — Gold Medal", subtitle: "Fesmaro IT Business Competition", date: "2025", iconKey: "trophy", colorKey: "gold" },
	{ _id: "2", title: "Finalist", subtitle: "Hackfest Build to Billion 2025", date: "Mar 2025", iconKey: "bolt", colorKey: "blue" },
	{ _id: "3", title: "3rd Place — Bronze Medal", subtitle: "Faculty of Engineering Most Outstanding Student", date: "Apr 2025", iconKey: "award", colorKey: "bronze" },
	{ _id: "4", title: "Special Award | Gold Medal | Incubation Opportunity", subtitle: "Indonesia Inventor Day 2024 (IID)", date: "Aug 2024", iconKey: "rocket", colorKey: "pink" },
	{ _id: "5", title: "1st Place — Gold Medal", subtitle: "Tech & Trade Expo 2024", date: "Jul 2024", iconKey: "trophy", colorKey: "gold" },
	{ _id: "6", title: "2nd Place — Silver Medal", subtitle: "IdeaFest 2024", date: "Jul 2024", iconKey: "medal", colorKey: "silver" },
];

// Extract 4-digit year from date string e.g. "Mar 2025" → "2025", "2024" → "2024"
function extractYear(date) {
	const match = date?.match(/\d{4}/);
	return match ? match[0] : "Other";
}

export default function Education({ achievements, settings }) {
	const data = achievements?.length ? achievements : FALLBACK_ACHIEVEMENTS;

	// Group achievements by year, sorted descending
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
	const eduLocation = settings?.eduLocation || "Islamabad, Pakistan";
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

						{/* Achievements — Right, grouped by year */}
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

										{/* Achievements list for this year */}
										<div className="space-y-3 pl-2">
											{grouped[year].map((a, i) => {
												const icon = iconMap[a.iconKey] || faMedal;
												const color = colorMap[a.colorKey] || "text-yellow-500";
												return (
													<motion.div
														key={a._id || i}
														initial={{ opacity: 0, x: -10 }}
														whileInView={{ opacity: 1, x: 0 }}
														transition={{ duration: 0.4, delay: i * 0.08 }}
														className="flex items-start gap-3 group">
														<FontAwesomeIcon
															icon={icon}
															className={`${color} mt-1 w-4 h-4 shrink-0`}
														/>
														<div>
															<p className="font-medium text-black leading-tight">{a.title}</p>
															<p className="text-sm text-gray-500">{a.subtitle}</p>
															{/* Show month if present */}
															{a.date && a.date !== year && (
																<p className="text-xs text-gray-400 mt-0.5">{a.date}</p>
															)}
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
