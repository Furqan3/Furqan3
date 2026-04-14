"use client";
import Image from "next/image";
import Card from "./spotify/card";
import { motion } from "framer-motion";
import FallbackMe1 from "@/public/image/me1.jpg";
import FallbackMe2 from "@/public/image/me2.jpg";
import FallbackMe3 from "@/public/image/me3.jpg";
import Hr from "@/components/Hr";

function AboutImage({ src, fallback, alt, sizes }) {
	if (src) {
		return (
			<Image
				src={src}
				alt={alt}
				fill
				sizes={sizes}
				className="object-cover"
				unoptimized
			/>
		);
	}
	return (
		<Image
			src={fallback}
			alt={alt}
			fill
			sizes={sizes}
			className="object-cover"
			placeholder="blur"
		/>
	);
}

function Title() {
	return (
		<div className="mt-10 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
			<div className="flex justify-center items-center flex-col my-5 self-start">
				<Hr variant="long"></Hr>
				<h1 className="text-3xl font-bold mt-3">Who Am I?</h1>
			</div>
		</div>
	);
}

export default function About({ settings }) {
	const name = settings?.name || "Furqan Ahmad";
	const rawBio = settings?.bio || "";
	const img1 = settings?.aboutImage1 || null;
	const img2 = settings?.aboutImage2 || null;
	const img3 = settings?.aboutImage3 || null;

	// Split bio into paragraphs on blank lines
	const paragraphs = rawBio
		? rawBio.split(/\n\n+/).filter(Boolean)
		: [
				"I am a Computer Engineer specialising in Full-Stack Web Development and Artificial Intelligence. A Computer Engineering graduate from National University of Science and Technology (NUST), Islamabad, Pakistan, I build complete, production-ready web applications and develop AI solutions that deliver real-world impact.",
				"Currently working as a Machine Learning Engineer at Vision Tech 360, I develop RAG Chatbots, Facial Recognition Systems, and Automated Voice Agents. I deploy scalable ML models via FastAPI REST APIs and streamline CI/CD pipelines, delivering clean, scalable work on time.",
		  ];

	return (
		<>
			<Title />
			<div className="relative mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
				<div className="flex justify-center items-start flex-col mb-5">
					<div className="images relative w-full aspect-square">
						<div className="absolute top-28 left-10 w-[50%] aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
							<motion.div
								initial={{ opacity: 0, scale: 0.5, x: 100 }}
								whileInView={{ opacity: 1, scale: 1, x: 0 }}
								className="relative w-full h-full">
								<AboutImage
									src={img1}
									fallback={FallbackMe1}
									alt="Furqan Ahmad"
									sizes="(max-width: 768px) 80vw, 40vw"
								/>
							</motion.div>
						</div>
						<div className="absolute top-16 right-28 w-[30%] aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
							<motion.div
								initial={{ opacity: 0, scale: 0.5, x: -100 }}
								whileInView={{ opacity: 1, scale: 1, x: 0 }}
								transition={{ delay: 0.3 }}
								className="relative w-full h-full">
								<AboutImage
									src={img2}
									fallback={FallbackMe2}
									alt="Furqan Ahmad"
									sizes="(max-width: 768px) 60vw, 25vw"
								/>
							</motion.div>
						</div>
						<div className="absolute bottom-16 right-20 w-[40%] aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
							<motion.div
								initial={{ opacity: 0, scale: 0.5, x: -100 }}
								whileInView={{ opacity: 1, scale: 1, x: 0 }}
								transition={{ delay: 0.5 }}
								className="relative w-full h-full">
								<AboutImage
									src={img3}
									fallback={FallbackMe3}
									alt="Furqan Ahmad"
									sizes="(max-width: 768px) 80vw, 35vw"
								/>
							</motion.div>
						</div>
					</div>
				</div>
				<motion.div
					className="flex justify-center items-start flex-col mb-5 md:px-10"
					initial={{ opacity: 0, x: 200 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.5, type: "spring" }}>
					<h2 className="text-2xl font-bold tracking-wider mb-3">{name}</h2>
					<div className="text-gray-600 text-justify title text-lg leading-relaxed space-y-4">
						{paragraphs.map((p, i) => (
							<p key={i}>{p}</p>
						))}
					</div>
					<Card />
				</motion.div>
			</div>
		</>
	);
}
