"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMedal,
	faTrophy,
	faAward,
	faChevronDown,
	faChevronUp,
	faRocket,
	faBolt,
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Map keys stored in Sanity → FontAwesome icons
const iconMap = {
	trophy: faTrophy,
	medal: faMedal,
	award: faAward,
	rocket: faRocket,
	bolt: faBolt,
};

// Map keys stored in Sanity → Tailwind gradient classes
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
	{ _id: "1", title: "95% Accuracy", subtitle: "Real-time facial recognition across 50+ cameras", date: "2024", iconKey: "trophy", colorKey: "gold" },
	{ _id: "2", title: "20% Improvement", subtitle: "RAG chatbot response accuracy", date: "2024", iconKey: "rocket", colorKey: "blue" },
	{ _id: "3", title: "500+ RPS", subtitle: "API throughput at 150ms average latency", date: "2024", iconKey: "bolt", colorKey: "green" },
	{ _id: "4", title: "50% Reduction", subtitle: "Deployment time via automated CI/CD pipelines", date: "2024", iconKey: "medal", colorKey: "bronze" },
	{ _id: "5", title: "83% Accuracy", subtitle: "Melanoma detection ML pipeline", date: "2023", iconKey: "award", colorKey: "pink" },
	{ _id: "6", title: "99.9% Uptime", subtitle: "Production web application availability", date: "2023", iconKey: "medal", colorKey: "silver" },
	{ _id: "7", title: "60% Faster", subtitle: "Database query response times at IMAGE INC", date: "2023", iconKey: "bolt", colorKey: "cyan" },
	{ _id: "8", title: "25% Power Reduction", subtitle: "Energy-efficient IoT firmware at AIRLIFT Technologies", date: "2022", iconKey: "rocket", colorKey: "lime" },
];

export default function Education({ achievements, settings }) {
	const [isExpanded, setIsExpanded] = useState(false);

	const data = achievements?.length ? achievements : FALLBACK_ACHIEVEMENTS;
	const visible = isExpanded ? data : data.slice(0, 5);
	const hasMore = data.length > 5;

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
						{/* Education - Left */}
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
									<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
										{eduLocation}
									</div>
								</div>
							</div>
						</motion.div>

						{/* Achievements - Right */}
						<motion.div
							className="flex flex-col justify-start px-5 md:px-0"
							initial={{ opacity: 0, x: 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.4 }}>
							<h2 className="font-semibold text-xl mt-7">Key Achievements</h2>
							<p className="text-md font-normal mb-3 md:mb-6">
								Professional milestones from my career.
							</p>

							<div className="relative">
								<div className="space-y-4">
									<AnimatePresence>
										{visible.map((a, index) => {
											const icon = iconMap[a.iconKey] || faMedal;
											const color = colorMap[a.colorKey] || "from-yellow-400 to-orange-500";
											return (
												<motion.div
													key={a._id || index}
													initial={{ opacity: 0, y: 20 }}
													animate={{ opacity: 1, y: 0 }}
													exit={{ opacity: 0, y: -20 }}
													transition={{ duration: 0.5, delay: index * 0.05 }}>
													<div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-4 shadow-lg hover:bg-white/30 transition-all duration-300 hover:shadow-xl grayscale hover:grayscale-0">
														<div className="flex items-center gap-4">
															<div className={`aspect-square w-10 rounded-full bg-gradient-to-r ${color} flex items-center justify-center`}>
																<FontAwesomeIcon icon={icon} className="text-white h-5 w-5" />
															</div>
															<div>
																<h3 className="font-medium">{a.title}</h3>
																<p className="text-sm">{a.subtitle}</p>
																<div className="text-xs text-gray-500 mt-1">{a.date}</div>
															</div>
														</div>
													</div>
												</motion.div>
											);
										})}
									</AnimatePresence>
								</div>

								{hasMore && (
									<motion.div
										className="flex justify-center mt-6"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: 0.5 }}>
										<button
											onClick={() => setIsExpanded(!isExpanded)}
											className="flex items-center gap-2 px-6 py-3 bg-white/30 backdrop-blur-md border border-white/40 rounded-full hover:bg-white/40 transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl">
											<span>
												{isExpanded ? "Show Less" : `Show ${data.length - 5} More`}
											</span>
											<FontAwesomeIcon
												icon={isExpanded ? faChevronUp : faChevronDown}
												className="h-3 w-3"
											/>
										</button>
									</motion.div>
								)}
							</div>
						</motion.div>
					</div>
				</section>
			</motion.div>
		</div>
	);
}
