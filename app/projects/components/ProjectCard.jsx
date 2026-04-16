import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import BlurImage from "@/public/image/placeholder/blur.jpg";

export default function ProjectCard({ project, index, activeCategory }) {
  // Safely get the first description or fallback
  const firstDesc = Array.isArray(project.desc) && project.desc[0]
    ? project.desc[0]
    : "";

  const truncatedDesc =
    firstDesc.length > 125
      ? `${firstDesc.slice(0, 125)}...`
      : firstDesc;

  return (
    <>
      {project.category.includes(parseInt(activeCategory)) && (
        <Link href={`/projects/${project.slug}`} key={index}>
          <motion.div
            className="z-10 relative flex justify-center items-start flex-col mb-5 md:px-10 w-full h-auto bg-gray-400 group/tes py-20 px-5 md:py-2 aspect-video"
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring" }}
          >
            <Image
              src={project.thumbnail}
              alt={project.title || "Project"}
              fill
              placeholder="blur"
              className="bg-slate-950 opacity-10 group-hover/tes:opacity-100 transition-all ease duration-500 object-cover"
              blurDataURL={BlurImage.src}
            />

            {/* Year Badge */}
            <div className="absolute top-0 left-0 bg-gray-600 px-4 py-2">
              <h4 className="text-white">{project.year || "N/A"}</h4>
            </div>

            {/* Content Overlay */}
            <div className="transition-all ease duration-500 opacity-100 content text-center group-hover/tes:opacity-0 z-10 w-full px-4">
              <h1 className="text-3xl font-bold mb-3">
                {project.title || "Untitled Project"}
              </h1>

              <p className="text-gray-200">
                {truncatedDesc || "No description available."}
              </p>

              {/* Tech Stack */}
              {Array.isArray(project.tech) && project.tech.length > 0 && (
                <div className="flex justify-center items-center flex-row mt-5 flex-wrap">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="m-1 px-4 py-2 bg-gray-600 text-white text-sm rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </Link>
      )}
    </>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string,
    desc: PropTypes.arrayOf(PropTypes.string),
    tech: PropTypes.arrayOf(PropTypes.string),
    thumbnail: PropTypes.string,
    year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    category: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ),
  }).isRequired,
  index: PropTypes.number.isRequired,
  activeCategory: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};