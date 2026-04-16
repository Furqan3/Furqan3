"use client";
import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faChevronLeft, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import BlurImage from "@/public/image/placeholder/blur.jpg";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function ProjectImage({ src, alt, index }) {
	const [loaded, setLoaded] = useState(false);
	const handleLoad = useCallback(() => setLoaded(true), []);

	return (
		<div className="relative mb-8 max-w-7xl mx-auto w-full">
			{!loaded && <div className="absolute inset-0 animate-pulse bg-neutral-300 rounded-xl" />}
			<Image
				src={src}
				alt={alt}
				width={1920}
				height={1080}
				className={`h-auto w-full object-contain transition-opacity duration-500 rounded-xl ${loaded ? "opacity-100" : "opacity-0"}`}
				placeholder="blur"
				blurDataURL={BlurImage.src}
				loading={index === 0 ? "eager" : "lazy"}
				onLoad={handleLoad}
			/>
		</div>
	);
}

function ScrollButton() {
	const [isAtBottom, setIsAtBottom] = useState(false);

	const handleScroll = () => {
		const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		const isBottom = scrollTop >= document.documentElement.scrollHeight - document.documentElement.clientHeight - 20;

		if (!isBottom) {
			window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
			setIsAtBottom(true);
		} else {
			window.scrollTo({ top: 0, behavior: "smooth" });
			setIsAtBottom(false);
		}
	};

	return (
		<div className="fixed bottom-8 left-0 right-0 flex justify-center z-40 pointer-events-auto">
			<motion.div
				className="h-12 w-12 bg-neutral-900 hover:bg-neutral-800 rounded-full flex justify-center items-center cursor-pointer shadow-xl border border-neutral-700"
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.95 }}
				onClick={handleScroll}>
				<FontAwesomeIcon 
					icon={isAtBottom ? faChevronUp : faChevronDown} 
					className="text-white text-3xl" 
				/>
			</motion.div>
		</div>
	);
}

export default function ProjectDetail({ project }) {
	const router = useRouter();

	return (
		<div className="relative min-h-screen w-full p-6 md:p-10 flex flex-col items-center bg-neutral-50">
			{/* Back Button */}
			<button
				onClick={() => router.back()}
				className="fixed top-6 left-6 md:left-10 z-50 p-4 rounded-full hover:bg-white shadow transition-all"
				aria-label="Go back">
				<FontAwesomeIcon icon={faChevronLeft} className="text-2xl text-neutral-700" />
			</button>

			<ScrollButton />

			{/* Main Content */}
			<div className="min-h-screen flex justify-center items-center w-full max-w-7xl mx-auto mt-12 md:mt-0">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full">
					{/* Project Info Sidebar */}
					<div className="flex flex-col justify-center space-y-12 lg:sticky lg:top-10 lg:self-start">
						<div>
							<h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">Project</h2>
							<h1 className="text-5xl md:text-6xl font-medium text-neutral-900 mt-3 leading-tight">
								{project.title}
							</h1>
						</div>

						{project.tech?.length > 0 && (
							<div>
								<h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">Technology</h2>
								<p className="text-2xl font-normal text-neutral-900 mt-2">{project.tech.join(", ")}</p>
							</div>
						)}

						{project.year && (
							<div>
								<h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">Year</h2>
								<p className="text-2xl font-normal text-neutral-900 mt-2">{project.year}</p>
							</div>
						)}

						{project.preview && (
							<div>
								<h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">Live Preview</h2>
								<a 
									href={project.preview} 
									target="_blank" 
									rel="noopener noreferrer"
									className="text-2xl font-normal text-neutral-900 hover:text-blue-600 transition-colors inline-flex items-center gap-3 mt-2"
								>
									Open Preview 
									<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
								</a>
							</div>
						)}

						{project.code && (
							<div>
								<h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">Source Code</h2>
								<a 
									href={project.code} 
									target="_blank" 
									rel="noopener noreferrer"
									className="text-2xl font-normal text-neutral-900 hover:text-blue-600 transition-colors inline-flex items-center gap-3 mt-2"
								>
									View on GitHub 
									<FontAwesomeIcon icon={faGithub} />
								</a>
							</div>
						)}
					</div>

					{/* Rich Markdown Description */}
					<div className="flex flex-col">
						<h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400 mb-6">Description</h2>
						
						<div className="prose prose-neutral prose-lg max-w-none 
							prose-headings:font-semibold prose-headings:text-neutral-900
							prose-h1:text-4xl prose-h1:mt-8 prose-h1:mb-6
							prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-5
							prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
							prose-p:text-xl prose-p:leading-relaxed prose-p:text-gray-600 prose-p:mb-6
							prose-table:border prose-table:border-neutral-300 prose-table:rounded-xl prose-table:overflow-hidden
							prose-th:bg-neutral-100 prose-th:p-4 prose-th:text-left prose-th:font-medium
							prose-td:p-4 prose-td:border-t prose-td:border-neutral-300
							prose-code:bg-neutral-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
							prose-pre:bg-neutral-900 prose-pre:text-neutral-100 prose-pre:p-6 prose-pre:rounded-2xl prose-pre:overflow-auto
							prose-ul:list-disc prose-ul:pl-6 prose-ol:list-decimal prose-ol:pl-6
							prose-li:my-1.5 prose-strong:font-semibold prose-strong:text-neutral-800
							prose-a:text-blue-600 prose-a:hover:underline">
							
							{(project.desc || []).map((para, i) => (
								<ReactMarkdown 
									key={i}
									remarkPlugins={[remarkGfm]}
									components={{
										// Headings
										h1: ({ children }) => <h1 className="text-4xl font-semibold mt-10 mb-6 text-neutral-900">{children}</h1>,
										h2: ({ children }) => <h2 className="text-3xl font-semibold mt-9 mb-5 text-neutral-900">{children}</h2>,
										h3: ({ children }) => <h3 className="text-2xl font-semibold mt-8 mb-4 text-neutral-900">{children}</h3>,
										h4: ({ children }) => <h4 className="text-xl font-semibold mt-6 mb-3 text-neutral-900">{children}</h4>,

										// Paragraph
										p: ({ children }) => <p className="text-xl leading-relaxed tracking-wide text-gray-600 mb-6">{children}</p>,

										// Links
										a: ({ children, href }) => (
											<a 
												href={href} 
												target="_blank" 
												rel="noopener noreferrer"
												className="text-blue-600 hover:underline font-medium"
											>
												{children}
											</a>
										),

										// Tables (with horizontal scroll on mobile)
										table: ({ children }) => (
											<div className="overflow-x-auto my-8 rounded-xl border border-neutral-200">
												<table className="w-full border-collapse min-w-full">{children}</table>
											</div>
										),
										thead: ({ children }) => <thead className="bg-neutral-100">{children}</thead>,
										th: ({ children }) => <th className="p-4 text-left font-medium border-b border-neutral-300">{children}</th>,
										td: ({ children }) => <td className="p-4 border-t border-neutral-200">{children}</td>,

										// Code
										code: ({ inline, children }) => 
											inline ? (
												<code className="bg-neutral-100 px-1.5 py-0.5 rounded text-sm font-mono text-neutral-800">
													{children}
												</code>
											) : (
												<code className="block bg-neutral-900 text-neutral-100 p-6 rounded-2xl overflow-auto text-sm font-mono">
													{children}
												</code>
											),

										// Pre (for code blocks)
										pre: ({ children }) => <pre className="my-6">{children}</pre>,

										// Lists
										ul: ({ children }) => <ul className="list-disc pl-6 mb-6 space-y-2 text-lg">{children}</ul>,
										ol: ({ children }) => <ol className="list-decimal pl-6 mb-6 space-y-2 text-lg">{children}</ol>,
										li: ({ children }) => <li className="text-gray-600">{children}</li>,

										// Strong & Emphasis
										strong: ({ children }) => <strong className="font-semibold text-neutral-800">{children}</strong>,
										em: ({ children }) => <em className="italic text-neutral-700">{children}</em>,
									}}
								>
									{para}
								</ReactMarkdown>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Project Images */}
			<div className="w-full max-w-7xl mx-auto px-5 md:px-20 mt-16">
				<div className="flex flex-col items-center gap-8">
					{(project.images || []).filter(Boolean).map((src, i) => (
						<ProjectImage 
							key={i} 
							src={src} 
							alt={`${project.title} screenshot ${i + 1}`} 
							index={i} 
						/>
					))}
				</div>
			</div>
		</div>
	);
}