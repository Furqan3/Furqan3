"use client";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronLeft,
	faEnvelope,
	faMobileScreen,
	faGlobe,
	faLocationDot,
	faDownload,
	faPrint,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import ScrollToTop from "@/components/ScrollToTop";
import FixedButton from "@/components/FixedButton";
import Hr from "@/components/Hr";

function SectionTitle({ children }) {
	return (
		<div className="flex flex-col items-start mb-6">
			<Hr variant="long" />
			<motion.h2
				className="text-3xl md:text-4xl font-bold text-black mt-3 tracking-tight"
				initial={{ opacity: 0, x: -60 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true }}
				transition={{ delay: 0.1, type: "spring" }}>
				{children}
			</motion.h2>
		</div>
	);
}

function ContactPill({ icon, label, href }) {
	const inner = (
		<span className="inline-flex items-center gap-2 text-sm md:text-base text-gray-800 hover:text-black transition-colors">
			<FontAwesomeIcon icon={icon} className="w-4 h-4" />
			<span>{label}</span>
		</span>
	);
	return href ? (
		<a href={href} target="_blank" rel="noopener noreferrer" className="contact-pill">
			{inner}
		</a>
	) : (
		<span className="contact-pill">{inner}</span>
	);
}

function PrintButton() {
	return (
		<button
			type="button"
			onClick={() => window.print()}
			className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-700 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors duration-300 text-sm font-medium print:hidden">
			<FontAwesomeIcon icon={faPrint} className="w-4 h-4" />
			Print
		</button>
	);
}

export default function ResumeContent({ data }) {
	const { contact, summary, expertise, experience, projects: allProjects, education } = data;
	const hasSummary = Boolean(summary && summary.trim());
	const hasExpertise = expertise && expertise.length > 0;
	const hasExperience = experience && experience.length > 0;
	const hasProjects = allProjects && allProjects.length > 0;
	const hasEducation = Boolean(education);
	return (
		<>
			<ScrollToTop />
			<main className="overflow-hidden bg-gray-50 print:bg-white">
				<FixedButton href="/about">
					<FontAwesomeIcon icon={faChevronLeft} className="text-black pr-10" />
				</FixedButton>

				<section className="pt-28 pb-10 px-6 md:px-16 max-w-5xl mx-auto">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="text-center md:text-left">
						<h1 className="text-5xl md:text-7xl font-bold text-black tracking-tight">
							{contact.name}
						</h1>
						<Hr />
						{contact.title ? (
							<p className="text-lg md:text-xl text-gray-700 mt-3 max-w-3xl">
								{contact.title}
							</p>
						) : null}
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2, duration: 0.6 }}
						className="mt-6 flex flex-wrap gap-x-5 gap-y-3 justify-center md:justify-start">
						{contact.email ? (
							<ContactPill icon={faEnvelope} label={contact.email} href={`mailto:${contact.email}`} />
						) : null}
						{contact.phone ? <ContactPill icon={faMobileScreen} label={contact.phone} /> : null}
						{contact.linkedin ? (
							<ContactPill icon={faLinkedin} label={contact.linkedin.label} href={contact.linkedin.href} />
						) : null}
						{contact.github ? (
							<ContactPill icon={faGithub} label={contact.github.label} href={contact.github.href} />
						) : null}
						{contact.portfolio ? (
							<ContactPill icon={faGlobe} label={contact.portfolio.label} href={contact.portfolio.href} />
						) : null}
						{contact.location ? <ContactPill icon={faLocationDot} label={contact.location} /> : null}
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.4, duration: 0.5 }}
						className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start print:hidden">
						<a
							href="/api/resume"
							className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white hover:bg-gray-800 transition-colors duration-300 text-sm font-medium">
							<FontAwesomeIcon icon={faDownload} className="w-4 h-4" />
							Download PDF
						</a>
						<PrintButton />
					</motion.div>
				</section>

				{hasSummary ? (
					<section className="px-6 md:px-16 max-w-5xl mx-auto py-10">
						<SectionTitle>Professional Summary</SectionTitle>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
							className="text-gray-700 leading-relaxed text-base md:text-lg text-justify">
							{summary}
						</motion.p>
					</section>
				) : null}

				{hasExpertise ? (
				<section className="px-6 md:px-16 max-w-5xl mx-auto py-10">
					<SectionTitle>Technical Expertise</SectionTitle>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
						{expertise.map((group, i) => (
							<motion.div
								key={group.category}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.05, duration: 0.4 }}
								className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
								<h3 className="font-semibold text-gray-900 mb-3">{group.category}</h3>
								<div className="flex flex-wrap gap-2">
									{group.items.map((item) => (
										<span
											key={item}
											className="bg-gray-100 border border-gray-300 text-gray-800 px-3 py-1 rounded-full text-sm">
											{item}
										</span>
									))}
								</div>
							</motion.div>
						))}
					</div>
				</section>
				) : null}

				{hasExperience ? (
				<section className="px-6 md:px-16 max-w-5xl mx-auto py-10">
					<SectionTitle>Professional Experience</SectionTitle>
					<div className="space-y-8">
						{experience.map((job, i) => (
							<motion.article
								key={job.company + job.period}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.1, duration: 0.5 }}
								className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
								<div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-2">
									<h3 className="font-bold text-xl text-black">{job.company}</h3>
									<span className="text-sm text-gray-500 italic">{job.location}</span>
								</div>
								<div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-4">
									<p className="text-gray-700 italic">{job.role}</p>
									<span className="text-sm text-gray-500 italic">{job.period}</span>
								</div>
								<ul className="list-disc list-outside pl-5 space-y-2 text-gray-700 leading-relaxed">
									{job.bullets.map((b, idx) => (
										<li key={idx}>{b}</li>
									))}
								</ul>
							</motion.article>
						))}
					</div>
				</section>
				) : null}

				{hasProjects ? (
				<section className="px-6 md:px-16 max-w-5xl mx-auto py-10">
					<SectionTitle>Technical Projects</SectionTitle>
					<div className="grid grid-cols-1 gap-6">
						{allProjects.map((p, i) => (
							<motion.article
								key={p.name}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.08, duration: 0.5 }}
								className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
								<div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-2">
									<h3 className="font-bold text-lg md:text-xl text-black">{p.name}</h3>
									<span className="text-sm text-gray-500 italic">{p.period}</span>
								</div>
								<p className="text-gray-700 italic mb-3">{p.role}</p>
								<ul className="list-disc list-outside pl-5 space-y-2 text-gray-700 leading-relaxed">
									{p.bullets.map((b, idx) => (
										<li key={idx}>{b}</li>
									))}
								</ul>
							</motion.article>
						))}
					</div>
				</section>
				) : null}

				{hasEducation ? (
				<section className="px-6 md:px-16 max-w-5xl mx-auto py-10 pb-20">
					<SectionTitle>Education</SectionTitle>
					<motion.article
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
						<div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-2">
							<h3 className="font-bold text-xl text-black">{education.school}</h3>
							<span className="text-sm text-gray-500 italic">{education.location}</span>
						</div>
						<div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-4">
							<p className="text-gray-700 italic">{education.degree}</p>
							<span className="text-sm text-gray-500 italic">{education.period}</span>
						</div>
						<ul className="list-disc list-outside pl-5 space-y-2 text-gray-700 leading-relaxed">
							{education.bullets.map((b, idx) => (
								<li key={idx}>{b}</li>
							))}
						</ul>
					</motion.article>
				</section>
				) : null}
			</main>

			<style jsx>{`
				.contact-pill {
					display: inline-flex;
					align-items: center;
					padding: 0.4rem 0.85rem;
					border-radius: 9999px;
					background: rgba(255, 255, 255, 0.7);
					border: 1px solid rgb(229, 231, 235);
					backdrop-filter: blur(4px);
					transition: background-color 0.2s ease;
				}
				.contact-pill:hover {
					background: rgb(243, 244, 246);
				}
			`}</style>
		</>
	);
}
