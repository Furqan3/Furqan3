"use client";
import Hr from "@/components/Hr";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Fallback data shown when Sanity has no entries yet
const FALLBACK = [
	{
		_id: "1",
		startDate: "Feb 2022",
		endDate: "May 2022",
		company: "AIRLIFT Technologies",
		position: "IoT/Embedded Systems Engineer Intern",
		type: "Internship",
		location: "Pakistan",
		description:
			"Innovated an automatic lock system reducing delivery time by 30% across 900+ cabins. Engineered energy-efficient firmware achieving 25% power consumption reduction.",
		skills: ["Embedded C", "IoT", "Firmware", "Hardware Prototyping"],
	},
	{
		_id: "2",
		startDate: "Jun 2023",
		endDate: "Sep 2023",
		company: "IMAGE INC",
		position: "Software Engineer Intern",
		type: "Internship",
		location: "Pakistan",
		description:
			'Developed the "TT Scorer" web application with optimised user experience. Improved page load times by 40% and database query response time by 60%. Achieved 99.9% uptime through robust error handling and monitoring.',
		skills: ["Web Development", "Database Optimisation", "Performance Tuning", "Monitoring"],
	},
	{
		_id: "3",
		startDate: "Jun 2024",
		endDate: "Present",
		company: "Vision Tech 360",
		position: "Machine Learning Engineer",
		type: "Full-time",
		location: "Remote",
		description:
			"Developed RAG chatbots with 20% improvement in response accuracy. Engineered real-time facial recognition system with 95% accuracy across 50+ cameras. Built automated voice agent pipelines integrating ASR, NLP, and TTS. Deployed ML models via FastAPI handling 500+ RPS at 150ms latency. Streamlined CI/CD pipelines cutting deployment time by 50%.",
		skills: ["Python", "FastAPI", "LangChain", "RAG", "OpenCV", "YOLO", "NLP", "Docker", "AWS", "CI/CD"],
	},
];

function Title() {
	return (
		<div className="mt-16 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
			<div className="flex justify-center items-center flex-col my-5 self-start">
				<Hr variant="long"></Hr>
				<motion.h1
					className="text-3xl font-bold mt-3"
					initial={{ opacity: 0, x: -200 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.7, type: "spring" }}>
					Professional Experience
				</motion.h1>
			</div>
		</div>
	);
}

function TimelineCard({ experience, index, isEven }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: -20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ delay: index * 0.15, duration: 0.5 }}
			className={`flex ps-10 md:ps-0 ${
				isEven ? "md:justify-center md:translate-x-68" : "md:justify-center md:-translate-x-68"
			} justify-center mb-4`}>
			<div className="bg-gradient-to-r from-black to-gray-800 text-white px-12 py-3 rounded-xl shadow-lg border border-gray-600 min-w-max">
				<div className="flex items-center justify-center gap-6">
					<div className="text-center">
						<div className="text-sm font-bold">{experience.startDate}</div>
						<div className="text-xs text-gray-300">Start</div>
					</div>
					<div className="w-px h-8 bg-gray-500"></div>
					<div className="text-center">
						<div className="text-sm font-bold">{experience.endDate}</div>
						<div className="text-xs text-gray-300">End</div>
					</div>
					<div className="w-px h-8 bg-gray-500"></div>
					<div className="text-center">
						<div className="text-sm font-medium text-gray-400">{experience.location}</div>
						<div className="text-xs text-gray-300">Location</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

function ExperienceCard({ experience, index, isEven }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ delay: index * 0.2, duration: 0.6 }}
			className={`relative group ${isEven ? "md:ml-auto md:pl-12" : "md:mr-auto md:pr-12"} md:w-1/2`}>
			<div className="bg-white/20 backdrop-blur-sm border border-gray-300/30 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:bg-white/30 transition-all duration-300 ml-12 md:ml-0">
				<div className="mb-4">
					<h3 className="font-bold text-xl text-black mb-1">{experience.company}</h3>
					<h4 className="font-medium text-lg text-gray-700">
						{experience.position}
						<span className="text-sm font-normal text-gray-500 ml-2">• {experience.type}</span>
					</h4>
				</div>
				<p className="text-gray-600 text-justify leading-relaxed mb-4">{experience.description}</p>
				<div className="flex flex-wrap gap-2">
					{(experience.skills || []).map((skill, idx) => (
						<span
							key={idx}
							className="bg-gray-200/60 hover:bg-gray-300/60 border border-gray-400/40 text-black px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm hover:scale-105">
							{skill}
						</span>
					))}
				</div>
			</div>
		</motion.div>
	);
}

export default function Experience({ experiences }) {
	const [showAll, setShowAll] = useState(false);
	const data = experiences?.length ? [...experiences].reverse() : [...FALLBACK].reverse();
	const displayed = showAll ? data : data.slice(0, 3);

	return (
		<>
			<Title />
			<div className="mx-auto container px-6 py-10">
				<div className="flex justify-center items-center flex-col">
					<div className="relative w-full max-w-6xl mx-auto">
						<div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-black via-gray-400 to-transparent h-full"></div>
						<div className="md:hidden absolute left-0 w-1 bg-gradient-to-b from-black via-gray-400 to-transparent h-full"></div>
						<div className="space-y-12 md:space-y-16 relative">
							<AnimatePresence>
								{displayed.map((exp, index) => (
									<div key={exp._id || index} className="relative">
										<TimelineCard experience={exp} index={index} isEven={index % 2 === 1} />
										<div className="absolute w-6 h-6 bg-black rounded-full border-4 border-white shadow-lg z-30 md:left-1/2 md:-translate-x-1/2 md:top-4 left-0 -translate-x-1/2 top-5" />
										<ExperienceCard experience={exp} index={index} isEven={index % 2 === 1} />
									</div>
								))}
							</AnimatePresence>
						</div>
						{data.length > 3 && (
							<motion.div
								className="flex justify-center mt-12"
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ delay: 0.5 }}>
								<button
									onClick={() => setShowAll(!showAll)}
									className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2">
									{showAll ? (
										<>Show Less <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></>
									) : (
										<>View More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></>
									)}
								</button>
							</motion.div>
						)}
						{!showAll && (
							<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-300 to-transparent pointer-events-none"></div>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
