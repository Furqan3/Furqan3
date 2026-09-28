// Static site content. Edit this file to update the site — no CMS required.

export const settings = {
	"name": "Furqan Ahmad",
	"title": "Full-Stack & AI Engineer",
	"bio": "I am a Computer Engineer specialising in Full-Stack Web Development and Artificial Intelligence. A Computer Engineering graduate from National University of Science and Technology (NUST), Islamabad, Pakistan, I build complete, production-ready web applications and develop AI solutions that deliver real-world impact.\n\nCurrently working as a Machine Learning Engineer at Vision Tech 360, I develop RAG Chatbots, Facial Recognition Systems, and Automated Voice Agents. I deploy scalable ML models via FastAPI REST APIs and streamline CI/CD pipelines, delivering clean, scalable work on time.",
	"email": "fahmad.ktk@gmail.com",
	"github": "https://github.com/Furqan3",
	"linkedin": "https://www.linkedin.com/in/furqan-ktk/",
	"institution": "National University of Science and Technology (NUST)",
	"degree": "BE Computer Engineering",
	"eduStartYear": "2020",
	"eduEndYear": "2024",
	"eduLocation": "Islamabad, Pakistan",
	"eduDescription": "Graduated with a degree in Computer Engineering from NUST, one of Pakistan's top-ranked universities. Built a strong foundation in computer systems, algorithms, and software engineering alongside practical experience in Full-Stack Development, Machine Learning, and Embedded Systems.",
	"eduTags": [
		"Computer Engineering",
		"Islamabad, Pakistan"
	],
	"heroImage": "/image/content/hero.webp",
	"aboutHeroImage": "/image/content/abouthero.webp",
	"aboutImage1": "/image/content/about1.webp",
	"aboutImage2": "/image/content/about2.webp",
	"aboutImage3": "/image/content/about3.webp"
};

// Ordered newest first. `category`: 1 = Web, 2 = AI/ML, 9 = Other (see ProjectsClient filters).
export const projects = [
	{
		"title": "Santander Customer Transaction Prediction",
		"slug": "santander-customer-transaction-prediction",
		"show": true,
		"featured": false,
		"year": "2026",
		"category": [
			2
		],
		"desc": [
			"Competed in the Santander Customer Transaction Prediction Kaggle challenge, a binary classification task to identify which customers will make a specific transaction in the future based on 200 anonymized numerical features.",
			"Applied feature engineering, handled class imbalance, and benchmarked multiple models including LightGBM, XGBoost, and Gaussian Naive Bayes. Achieved strong AUC-ROC scores through hyperparameter tuning and ensemble techniques."
		],
		"tech": [
			"Python",
			"LightGBM",
			"XGBoost",
			"Scikit-learn",
			"Pandas",
			"NumPy"
		],
		"thumbnail": "/image/content/projects/santander-customer-transaction-prediction/thumb.webp",
		"images": [
			"/image/content/projects/santander-customer-transaction-prediction/1.webp",
			"/image/content/projects/santander-customer-transaction-prediction/2.webp",
			"/image/content/projects/santander-customer-transaction-prediction/3.webp",
			"/image/content/projects/santander-customer-transaction-prediction/4.webp"
		],
		"preview": null,
		"code": "https://github.com/Furqan3/santander-customer-transaction-prediction"
	},
	{
		"title": "X Finance Bull — Web3 & DeFi Academy",
		"slug": "x-finance-bull",
		"show": true,
		"featured": false,
		"year": "2025",
		"category": [
			1
		],
		"desc": [
			"Built X Finance Bull, an education platform helping learners master crypto, DeFi, blockchain, and Web3 through structured guides, courses, expert profiles, a leaderboard, and a shop. The site delivers a polished, content-rich experience with a dark gold-accented brand identity tuned for trust and conversion.",
			"Engineered a Next.js front end paired with Storyblok as the visual headless CMS, giving the editorial team full control over articles, course content, expert bios, and marketing pages. Supabase powers user accounts and learning progress, course media and downloadable resources are served from a Digital Ocean Spaces bucket, and the front end is deployed on Vercel for global edge delivery."
		],
		"tech": [
			"Next.js",
			"Storyblok",
			"Supabase",
			"Vercel",
			"Digital Ocean Spaces"
		],
		"thumbnail": "/image/content/projects/x-finance-bull/thumb.webp",
		"images": [
			"/image/content/projects/x-finance-bull/1.webp",
			"/image/content/projects/x-finance-bull/2.webp",
			"/image/content/projects/x-finance-bull/3.webp"
		],
		"preview": "https://xfinancebull.com/",
		"code": null
	},
	{
		"title": "Pulmonology & Sleep Services of San Antonio",
		"slug": "pulmonology-sleep-services",
		"show": true,
		"featured": false,
		"year": "2025",
		"category": [
			1
		],
		"desc": [
			"Designed and built a modern healthcare website for Pulmonology and Sleep Services of San Antonio — a board-certified specialist clinic providing comprehensive pulmonary and sleep care. The site presents services, doctor profiles, appointment booking, careers, and resources with a calm, trust-focused design.",
			"Built the front end with Next.js for fast, SEO-friendly delivery, paired with Strapi as a headless CMS so the clinic team can edit doctors, services, and resources without touching code. Supabase handles authentication and form submissions for appointment requests, and the whole stack is deployed on Vercel for zero-config CI/CD and global edge performance."
		],
		"tech": [
			"Next.js",
			"Strapi",
			"Supabase",
			"Vercel"
		],
		"thumbnail": "/image/content/projects/pulmonology-sleep-services/thumb.webp",
		"images": [
			"/image/content/projects/pulmonology-sleep-services/1.webp",
			"/image/content/projects/pulmonology-sleep-services/2.webp",
			"/image/content/projects/pulmonology-sleep-services/3.webp"
		],
		"preview": "https://www.pulmonologysleep.com/",
		"code": null
	},
	{
		"title": "Peptora Labs — E-commerce Platform",
		"slug": "peptora-labs",
		"show": true,
		"featured": true,
		"year": "2025",
		"category": [
			1
		],
		"desc": [
			"Built a high-performance e-commerce storefront for Peptora Labs using Next.js paired with a Medusa.js headless commerce backend. The frontend delivers fast page loads, dynamic product pages, and a smooth checkout flow, while Medusa powers the catalog, cart, and order management.",
			"Integrated Storyblok as the visual CMS for marketing pages and content blocks, Klaviyo for customer email automation and segmentation, and Resend for transactional email delivery. Deployed the storefront on Vercel and hosted the Medusa backend on Digital Ocean for reliable, scalable infrastructure."
		],
		"tech": [
			"Next.js",
			"Medusa.js",
			"Storyblok",
			"Klaviyo",
			"Resend",
			"Vercel",
			"Digital Ocean"
		],
		"thumbnail": "/image/content/projects/peptora-labs/thumb.webp",
		"images": [
			"/image/content/projects/peptora-labs/1.webp",
			"/image/content/projects/peptora-labs/2.webp",
			"/image/content/projects/peptora-labs/3.webp"
		],
		"preview": "https://www.peptoralabs.com/",
		"code": null
	},
	{
		"title": "Multiclass Image Classification (CNN)",
		"slug": "cnn-image-classification",
		"show": true,
		"featured": true,
		"year": "2025",
		"category": [
			2
		],
		"desc": [
			"I developed a multiclass image classifier using a custom **CNN** (6.3M parameters) to categorize images across eight distinct classes. Built with **TensorFlow** and **Keras**, the model utilizes a 6-block architecture with dropout and early stopping to optimize performance on grayscale data. To make the model accessible, I integrated it into a **Streamlit** web app, allowing users to upload images and receive real-time classification results."
		],
		"tech": [
			"Python",
			"TensorFlow",
			"Keras",
			"CNN",
			"NumPy",
			"Matplotlib"
		],
		"thumbnail": "/image/content/projects/cnn-image-classification/thumb.webp",
		"images": [
			"/image/content/projects/cnn-image-classification/1.webp",
			"/image/content/projects/cnn-image-classification/2.webp"
		],
		"preview": null,
		"code": "https://github.com/Furqan3/ai_project"
	},
	{
		"title": "FilingHub — Full-Stack Finance App",
		"slug": "accountant-app",
		"show": true,
		"featured": true,
		"year": "2025",
		"category": [
			1
		],
		"desc": [
			"A modern dual-portal web application designed to connect UK businesses with accounting service providers. \n"
		],
		"tech": [
			"Next.js",
			"TypeScript",
			"Socket.io",
			"PostgreSQL",
			"Node.js",
			"Supabase",
			"Nginx"
		],
		"thumbnail": "/image/content/projects/accountant-app/thumb.webp",
		"images": [
			"/image/content/projects/accountant-app/1.webp"
		],
		"preview": "https://filinghub.co.uk/",
		"code": null
	},
	{
		"title": "Athlix — AI Recovery & Injury Prevention",
		"slug": "athlix",
		"show": true,
		"featured": false,
		"year": "2024",
		"category": [
			1,
			2
		],
		"desc": [
			"Built a SaaS platform that delivers AI-powered recovery plans and injury-prevention guidance for athletes. Users upload an injury photo or medical report and receive clinically-validated, personalised recommendations within seconds.",
			"Engineered a Next.js front end backed by a FastAPI service that orchestrates GPT API calls with carefully tuned prompts to produce accurate, context-aware coaching. Stripe powers subscription billing for the trial-to-paid flow, PostgreSQL stores user, session, and report data, and the backend runs on Digital Ocean for reliable, scalable infrastructure."
		],
		"tech": [
			"Next.js",
			"FastAPI",
			"GPT API",
			"Prompt Engineering",
			"Stripe",
			"PostgreSQL",
			"Digital Ocean"
		],
		"thumbnail": "/image/content/projects/athlix/thumb.webp",
		"images": [
			"/image/content/projects/athlix/1.webp",
			"/image/content/projects/athlix/2.webp",
			"/image/content/projects/athlix/3.webp"
		],
		"preview": "https://www.athlix.fit/",
		"code": null
	},
	{
		"title": "Anomaly Detection System",
		"slug": "anomaly-detection",
		"show": true,
		"featured": false,
		"year": "2024",
		"category": [
			2,
			1
		],
		"desc": [
			"I built a real-time network security dashboard that uses Next.js for the frontend and a Flask REST API for the backend. The system monitors network traffic, calculates data rates, and identifies anomalies using both Z-Score statistical analysis and Isolation Forest machine learning.",
			"When a threat is detected—like a DDoS attack or data exfiltration—the system automatically enriches the data with process-level metadata (PIDs and process names) to pinpoint exactly which application is responsible. I designed it to filter for active connections, providing clear, actionable JSON reports for security analysis."
		],
		"tech": [
			"Python",
			"Flask",
			"Machine Learning",
			"REST API",
			"Scikit-learn"
		],
		"thumbnail": "/image/content/projects/anomaly-detection/thumb.webp",
		"images": [
			"/image/content/projects/anomaly-detection/1.webp"
		],
		"preview": null,
		"code": "https://github.com/Furqan3/Anomalies-detection"
	},
	{
		"title": "Braille Language Decoding",
		"slug": "braille-decoding",
		"show": true,
		"featured": false,
		"year": "2024",
		"category": [
			2
		],
		"desc": [
			"I developed an image processing tool that decodes Braille characters into English using Connected Component Analysis (CCA). By converting images to binary and applying 8-connectivity, the system segments the 3×2 dot matrices and identifies patterns through intensity thresholding. I mapped these detected patterns to a lookup table to provide accurate, real-time text conversion of any Braille sequence."
		],
		"tech": [
			"Python",
			"OpenCV",
			"Image Processing",
			"CCA",
			"NumPy"
		],
		"thumbnail": "/image/content/projects/braille-decoding/thumb.webp",
		"images": [
			"/image/content/projects/braille-decoding/1.webp"
		],
		"preview": null,
		"code": "https://github.com/Furqan3/Braille-Language-Decoding"
	},
	{
		"title": "CBDC with FPGA",
		"slug": "cbdc-fpga",
		"show": true,
		"featured": false,
		"year": "2024",
		"category": [
			9
		],
		"desc": [
			"Developed a secure Central Bank Digital Currency (CBDC) system using Hyperledger Fabric blockchain with FPGA computational offloading for high-throughput cryptographic operations.",
			"The system leverages Hyperledger Fabric's permissioned blockchain for transaction privacy and auditability. Implemented smart contracts in Go for issuance, transfer, and redemption of digital currency."
		],
		"tech": [
			"Hyperledger Fabric",
			"Docker",
			"Golang",
			"Node.js",
			"FPGA"
		],
		"thumbnail": "/image/content/projects/cbdc-fpga/thumb.webp",
		"images": [
			"/image/content/projects/cbdc-fpga/1.webp",
			"/image/content/projects/cbdc-fpga/2.webp"
		],
		"preview": null,
		"code": "https://github.com/Furqan3/cbdc"
	},
	{
		"title": "Automated Voice Agent",
		"slug": "voice-agent",
		"show": true,
		"featured": false,
		"year": "2024",
		"category": [
			2
		],
		"desc": [
			"Developed an end-to-end automated voice agent capable of handling conversations with real-time speech recognition and synthesis. Integrated ASR (OpenAI Whisper) and TTS pipelines with real-time NLP processing for natural dialogue management.",
			"Built a responsive Next.js frontend and a high-performance FastAPI backend API layer. The agent supports multi-turn conversations and can be deployed for customer service automation."
		],
		"tech": [
			"Python",
			"FastAPI",
			"Next.js",
			"OpenAI Whisper",
			"NLP Transformers",
			"WebSocket",
			"Twilio"
		],
		"thumbnail": "/image/content/projects/voice-agent/thumb.webp",
		"images": [],
		"preview": null,
		"code": null
	},
	{
		"title": "Histopathological Image Analysis",
		"slug": "histopathological-analysis",
		"show": true,
		"featured": false,
		"year": "2023",
		"category": [
			2
		],
		"desc": [
			"Built a U-Net deep learning model for medical image segmentation of histopathological slides. The model performs pixel-wise classification to identify and segment cancerous tissue regions with high accuracy.",
			"Implemented with TensorFlow and Keras using the U-Net architecture with skip connections for precise boundary detection. Evaluated with standard medical imaging metrics including Dice coefficient and IoU."
		],
		"tech": [
			"Python",
			"TensorFlow",
			"OpenCV",
			"Keras",
			"U-Net"
		],
		"thumbnail": "/image/content/projects/histopathological-analysis/thumb.webp",
		"images": [
			"/image/content/projects/histopathological-analysis/1.webp"
		],
		"preview": null,
		"code": "https://github.com/Furqan3/Histopathological-Images-Analysis"
	},
	{
		"title": "Skin Lesion Classification",
		"slug": "skin-lesion-classification",
		"show": true,
		"featured": false,
		"year": "2023",
		"category": [
			2
		],
		"desc": [
			"Developed a melanoma detection model achieving 83% accuracy using classical machine learning techniques combined with image processing and feature extraction pipelines.",
			"The pipeline includes dermoscopic image preprocessing, segmentation, and feature extraction using OpenCV, followed by classification ABCDE"
		],
		"tech": [
			"Python",
			"OpenCV",
			"NumPy",
			"Scikit-learn"
		],
		"thumbnail": "/image/content/projects/skin-lesion-classification/thumb.webp",
		"images": [
			"/image/content/projects/skin-lesion-classification/1.webp",
			"/image/content/projects/skin-lesion-classification/2.webp",
			"/image/content/projects/skin-lesion-classification/3.webp",
			"/image/content/projects/skin-lesion-classification/4.webp",
			"/image/content/projects/skin-lesion-classification/5.webp"
		],
		"preview": null,
		"code": "https://github.com/Furqan3/Skin-Lesion-Classification"
	}
];

export const experiences = [
	{
		"_id": "1",
		"company": "AIRLIFT Technologies",
		"position": "IoT/Embedded Systems Engineer Intern",
		"type": "Internship",
		"startDate": "Feb 2022",
		"endDate": "May 2022",
		"location": "Islamabad, Pakistan",
		"description": "Innovated an automatic lock system reducing delivery time by 30% across 900+ cabins. Engineered energy-efficient firmware achieving 25% power consumption reduction.",
		"skills": [
			"Embedded C",
			"IoT",
			"Firmware",
			"Hardware Prototyping"
		]
	},
	{
		"_id": "2",
		"company": "IMAGE INC",
		"position": "Software Engineer Intern",
		"type": "Internship",
		"startDate": "Jun 2023",
		"endDate": "Sep 2023",
		"location": "Remote",
		"description": "Developed the \"TT Scorer\" web application with optimised user experience. Improved page load times by 40% and database query response time by 60%. Achieved 99.9% uptime through robust error handling and monitoring.",
		"skills": [
			"Web Development",
			"Database Optimisation",
			"Performance Tuning",
			"Monitoring"
		]
	},
	{
		"_id": "3",
		"company": "Vision Tech 360",
		"position": "Machine Learning Engineer",
		"type": "Full-time",
		"startDate": "Jun 2024",
		"endDate": "Present",
		"location": "Rawalpindi, Pakistan",
		"description": "Developed RAG chatbots with 20% improvement in response accuracy. Engineered real-time facial recognition system with 95% accuracy across 50+ cameras. Built automated voice agent pipelines integrating ASR, NLP, and TTS. Deployed ML models via FastAPI handling 500+ RPS at 150ms latency. Streamlined CI/CD pipelines cutting deployment time by 50%.",
		"skills": [
			"Python",
			"FastAPI",
			"LangChain",
			"RAG",
			"OpenCV",
			"YOLO",
			"NLP",
			"Docker",
			"AWS",
			"CI/CD"
		]
	},
	{
		"_id": "4",
		"company": "Freelance",
		"position": "Full-Stack & AI Engineer",
		"type": "Freelance",
		"startDate": "Jan 2023",
		"endDate": "Present",
		"location": "Remote",
		"description": "Delivered end-to-end web applications and AI solutions for clients across various industries. Built RAG chatbots, computer vision systems, and scalable REST APIs using Next.js, FastAPI, and Python. Collaborated with clients to define requirements, architect solutions, and deploy production-ready systems on AWS and Vercel.",
		"skills": [
			"Next.js",
			"FastAPI",
			"Python",
			"LangChain",
			"OpenCV",
			"React",
			"PostgreSQL",
			"Docker",
			"AWS",
			"Vercel"
		]
	}
];

export const achievements = [
	{
		"_id": "1",
		"title": "1st Place — Gold Medal",
		"subtitle": "Fesmaro IT Business Competition",
		"date": "2025",
		"iconKey": "trophy",
		"colorKey": "gold"
	},
	{
		"_id": "2",
		"title": "Finalist",
		"subtitle": "Hackfest Build to Billion 2025",
		"date": "Mar 2025",
		"iconKey": "bolt",
		"colorKey": "blue"
	},
	{
		"_id": "3",
		"title": "3rd Place — Bronze Medal",
		"subtitle": "Faculty of Engineering Most Outstanding Student",
		"date": "Apr 2025",
		"iconKey": "award",
		"colorKey": "bronze"
	},
	{
		"_id": "4",
		"title": "Special Award | Gold Medal | Incubation Opportunity",
		"subtitle": "Indonesia Inventor Day 2024 (IID)",
		"date": "Aug 2024",
		"iconKey": "rocket",
		"colorKey": "pink"
	},
	{
		"_id": "5",
		"title": "1st Place — Gold Medal",
		"subtitle": "Tech & Trade Expo 2024",
		"date": "Jul 2024",
		"iconKey": "trophy",
		"colorKey": "gold"
	},
	{
		"_id": "6",
		"title": "2nd Place — Silver Medal",
		"subtitle": "IdeaFest 2024",
		"date": "Jul 2024",
		"iconKey": "medal",
		"colorKey": "silver"
	}
];
