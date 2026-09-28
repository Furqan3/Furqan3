"use client";
import { motion } from "framer-motion";

export default function Education({ settings }) {
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

					<div className="max-w-3xl mx-auto w-full">
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
					</div>
				</section>
			</motion.div>
		</div>
	);
}
