import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import ScrollToTop from "@/components/ScrollToTop";
import FixedButton from "@/components/FixedButton";
import Hr from "@/components/Hr";
import Quote from "./components/quote/quote.jsx";
import Skills from "./components/skills/skills.jsx";
import Experience from "./components/experience.jsx";
import Education from "./components/education.jsx";
import About from "./components/about/about.jsx";
import FallbackHero from "@/public/image/me2.jpg";

import { getExperiences, getAchievements, getSettings } from "@/sanity/lib/queries";

export default async function Page() {
	const [experiences, achievements, settings] = await Promise.all([
		getExperiences(),
		getAchievements(),
		getSettings(),
	]);

	return (
		<>
			<ScrollToTop />
			<main className="overflow-hidden">
				<FixedButton href="/#about">
					<FontAwesomeIcon icon={faChevronLeft} className="text-black pr-10" />
				</FixedButton>
				<div className="relative h-screen gap-4 p-10 flex justify-center items-center flex-col mb-10 overflow-hidden">
					<div className="z-0 mb-48 md:mb-0 md:absolute top-1/4 md:right-[10%] md:-translate-y-16">
						<div className="relative bg-slate-300 rounded-sm h-[400px] md:h-[600px] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0 overflow-hidden">
							{settings?.aboutHeroImage ? (
								<Image
									src={settings.aboutHeroImage}
									alt="Furqan Ahmad"
									fill
									sizes="(max-width: 768px) 80vw, 30vw"
									className="object-contain"
									unoptimized
								/>
							) : (
								<Image
									src={FallbackHero}
									alt="Furqan Ahmad"
									fill
									sizes="(max-width: 768px) 80vw, 30vw"
									className="object-contain"
									placeholder="blur"
								/>
							)}
						</div>
					</div>
					<div className="z-10 w-full absolute md:w-auto md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 pt-4 backdrop-filter backdrop-blur-sm md:backdrop-blur-none bg-gray-100 bg-opacity-50 md:bg-transparent md:pt-0">
						<h1 className="md:bg-white bg-transparent lg:bg-transparent bg-opacity-50 md:px-0 text-black text-5xl md:text-8xl font-bold">
							About Me
						</h1>
						<Hr />
						<p className="title text-xl mt-4 tracking-wider text-gray-900 leading-[1.7rem] mb-5">
							A brief introduction to my journey as a{" "}
							<span className="bg-transparent md:bg-gray-100 bg-opacity-50 xl:bg-transparent">
								software engineer.
							</span>
						</p>
					</div>
				</div>

				<About settings={settings} />
				<Skills settings={settings} />
				<Experience experiences={experiences} />
				<Education achievements={achievements} settings={settings} />
				<Quote />
			</main>
		</>
	);
}
