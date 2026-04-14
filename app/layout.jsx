import "./globals.css";
import { Poppins, Jost } from "next/font/google";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import { Analytics } from "@vercel/analytics/react";
import Chat from "@/components/Chat";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	style: ["normal", "italic"],
	display: "swap",
	variable: "--font-poppins",
});

const jost = Jost({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	display: "swap",
	variable: "--font-jost",
});

export const metadata = {
	metadataBase: new URL("https://furqan-ahmad.dev"),
	title: "Furqan Ahmad | Portfolio",

	description:
		"Furqan Ahmad, Full-Stack & AI Engineer specializing in Next.js, FastAPI, RAG Chatbots, Computer Vision, and Voice Agents. Machine Learning Engineer at Vision Tech 360.",

	author: "Furqan Ahmad",
	siteUrl: "https://furqan-ahmad.dev",
	applicationName: "Furqan Ahmad",

	keywords: [
		"furqan ahmad",
		"furqan",
		"furqan3",
		"full stack engineer",
		"ai engineer",
		"rag chatbot",
		"machine learning engineer",
		"nust",
		"islamabad",
		"vision tech 360",
	],

	openGraph: {
		type: "website",
		url: "https://furqan-ahmad.dev",
		title: "Furqan Ahmad | Portfolio",
		siteName: "Furqan Ahmad | Portfolio",
		description: "Furqan Ahmad — Full-Stack & AI Engineer. This is my portfolio website.",
		images: [
			{
				url: "/og-image-rev.png",
				alt: "Furqan Ahmad Portfolio",
				width: 1200,
				height: 630,
			},
		],
	},
};

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Furqan Ahmad",
	url: "https://furqan-ahmad.dev",
	jobTitle: "Full-Stack & AI Engineer",
	worksFor: [
		{ "@type": "Organization", name: "Vision Tech 360" },
	],
	alumniOf: {
		"@type": "CollegeOrUniversity",
		name: "National University of Science and Technology (NUST)",
	},
	sameAs: [
		"https://github.com/Furqan3",
		"https://www.linkedin.com/in/furqan-ktk/",
	],
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${poppins.variable} ${jost.variable}`}>
			<body>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
				<ClientTopProgressBar />
				<Navbar />
				{children}
				<Chat />
				<Analytics />
			</body>
		</html>
	);
}
