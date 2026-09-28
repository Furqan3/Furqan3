export const contact = {
	name: "Furqan Ahmad",
	email: "fahmad.ktk@gmail.com",
	phone: "+92-335-0792802",
	linkedin: { label: "furqan-ktk", href: "https://linkedin.com/in/furqan-ktk" },
	github: { label: "Furqan3", href: "https://github.com/Furqan3" },
	portfolio: { label: "Portfolio", href: "https://furqan-ahmad.dev" },
	location: "Islamabad, Pakistan",
};

export const summary =
	"Full-Stack Developer with strong expertise in building production-ready web applications using Next.js and FastAPI. Experienced in designing scalable architectures, REST APIs, real-time systems, and integrating AI capabilities into modern web platforms. Proven ability to own projects end-to-end — from database design and backend API development through responsive frontend interfaces and cloud deployment. Adept at collaborating with remote teams, shipping features on tight deadlines, and maintaining high-availability production systems.";

export const expertise = [
	{
		category: "Frontend",
		items: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "Responsive Design"],
	},
	{
		category: "Backend",
		items: ["FastAPI", "Node.js", "Python", "REST APIs", "WebSockets", "OAuth 2.0", "JWT Authentication"],
	},
	{
		category: "Databases",
		items: ["MongoDB", "PostgreSQL", "Redis", "Prisma ORM", "Mongoose"],
	},
	{
		category: "DevOps & Cloud",
		items: ["Docker", "Git", "CI/CD", "PM2", "Nginx", "DigitalOcean", "Cloudflare", "Linux/Ubuntu"],
	},
	{
		category: "Integrations",
		items: ["Shopify API/OAuth", "Google OAuth", "Resend", "Stripe", "Selenium", "MinIO"],
	},
	{
		category: "AI Integration",
		items: ["OpenAI API", "LangChain", "FAISS", "Ollama", "Groq"],
	},
];

export const experience = [
	{
		company: "Vision Tech 360",
		location: "Islamabad, Pakistan",
		role: "Full-Stack Developer & ML Engineer",
		period: "July 2024 — Present",
		bullets: [
			"Architected and built full-stack web applications using Next.js frontends and FastAPI backends, delivering production-ready platforms with authentication, role-based access, and real-time data updates.",
			"Developed Fulfillment OS, a SaaS platform for 3PL warehouse management featuring Shopify OAuth, order fulfillment workflows, inventory tracking, reporting dashboards, and billing — collaborating with remote team members on complex OAuth debugging and shared utility refactoring.",
			"Built a real-time vehicle monitoring dashboard with React/Next.js consuming live RTSP camera feeds, MongoDB storage, and Redis frame caching, supporting 20+ concurrent video streams.",
			"Engineered REST APIs handling 500+ requests/second at 150ms average latency, with proper error handling, input validation, and structured logging.",
			"Implemented email notification systems using Resend, Google OAuth flows via signInWithIdToken, and Stripe payment integration.",
			"Managed production deployments on DigitalOcean with PM2, Nginx, Cloudflare DNS/SSL, and resolved 521 errors and DNS propagation issues.",
			"Automated CI/CD pipelines cutting deployment time by 50%, enabling rapid iteration and feature delivery.",
		],
	},
	{
		company: "IMAGAGE INC",
		location: "Remote",
		role: "Software Development Engineering Intern",
		period: "June 2023 — Sep 2023",
		bullets: [
			"Led the end-to-end development of the “TT Scorer” web application, delivering a responsive, user-friendly scoring platform with optimised performance.",
			"Designed a responsive front-end interface, optimising page load times by 40% and ensuring cross-device accessibility.",
			"Optimised database queries achieving a 60% improvement in response time for 100,000+ records.",
			"Ensured 99.9% uptime through robust error handling, health checks, and proactive monitoring systems.",
		],
	},
	{
		company: "AIRLIFT Technologies",
		location: "Islamabad, Pakistan",
		role: "IoT/Embedded Systems Engineer Intern",
		period: "Feb 2022 — May 2022",
		bullets: [
			"Innovated an automatic lock system reducing delivery time by 30% across 900+ cabins and developed embedded solutions enhancing delivery efficiency by 45%.",
			"Engineered energy-efficient firmware achieving 25% power consumption reduction, attaining 98% system reliability through rigorous testing.",
		],
	},
];

export const projects = [
	{
		name: "Fulfillment OS — 3PL Warehouse Management SaaS",
		role: "Co-Developer",
		period: "2024 — Present",
		bullets: [
			"Building a full SaaS platform for third-party logistics companies covering order fulfillment, inventory management, shipping workflows, client reporting, and subscription billing.",
			"Implemented Shopify OAuth integration with shared utility refactoring for reusable connection logic across the platform.",
			"Designed the backend with FastAPI and MongoDB, featuring role-based access control, webhook processing for real-time order sync, and background task queues.",
			"Built the frontend in Next.js with responsive dashboards, real-time order status tracking, inventory search/filter, and Resend-powered email notifications.",
		],
	},
	{
		name: "Aryeo Real Estate Social Media Generator",
		role: "Developer",
		period: "2024",
		bullets: [
			"Built a full-stack application that scrapes real estate listings using Selenium, generates branded social media posts with PIL image processing, and serves them through a polished Next.js UI.",
			"Developed a FastAPI backend handling listing ingestion, image template rendering, and asset management with structured API endpoints.",
			"Implemented automated scraping pipelines with rate limiting, error recovery, and structured data extraction from dynamic web pages.",
		],
	},
	{
		name: "FilingHub — UK Business Filing Platform",
		role: "Developer",
		period: "2024",
		bullets: [
			"Deployed and maintained filinghub.co.uk on DigitalOcean, managing PM2 process persistence, Nginx reverse proxy, SSL termination, and Cloudflare DNS configuration.",
			"Implemented Google OAuth authentication using direct signInWithIdToken approach and configured custom email routing across Hostinger and GoDaddy DNS providers.",
			"Resolved Cloudflare 521 errors and maintained zero-downtime deployments on Ubuntu servers.",
		],
	},
	{
		name: "Multilingual Document Translation Platform",
		role: "Developer",
		period: "2024",
		bullets: [
			"Architected a full-stack offline translation platform with FastAPI backend processing PDF/Excel/Word documents and a Next.js frontend with WebSocket-based real-time progress tracking.",
			"Implemented multiprocessing optimisation for batch document processing with file upload, job queue management, and downloadable output delivery.",
			"Designed for airgapped deployment on secure Linux servers with no external network dependency.",
		],
	},
	{
		name: "Real-Time Vehicle Monitoring Dashboard",
		role: "Developer",
		period: "2024",
		bullets: [
			"Developed a React/Next.js dashboard consuming live RTSP camera feeds for toll plaza monitoring, with multi-camera grid views, detection overlays, and convoy detection alerts.",
			"Built the backend with FastAPI, MongoDB for event storage, Redis for frame caching, and MinIO for media assets, supporting 20+ concurrent camera feeds via multiprocessing stream managers.",
			"Generated automated Excel reports with convoy detection analytics using a background scheduler service.",
		],
	},
	{
		name: "Real Estate Intelligence Platform",
		role: "Developer",
		period: "2024",
		bullets: [
			"Engineered a data platform with automated web scraping of 10,000+ daily property listings and an interactive dashboard powered by a text-to-SQL NLP model (95% accuracy) for natural-language data exploration.",
			"Designed efficient database schemas and indexing strategies for sub-second query response times across large property datasets.",
		],
	},
];

export const education = {
	school: "National University of Science and Technology",
	location: "Islamabad, Pakistan",
	degree: "B.S. in Computer Engineering",
	period: "Graduated June 2024",
	bullets: [
		"Thesis: Blockchain-based Transaction Processor with FPGA Implementation.",
		"Key Courses: Data Structures & Algorithms, AI, Software Engineering, Database Systems.",
		"Technical Focus: Full-Stack Development, Cloud Deployment, System Design.",
	],
};
