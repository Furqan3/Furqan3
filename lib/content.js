import { settings, projects, experiences, achievements } from "@/data/content";

export function getSettings() {
	return settings;
}

export function getAllProjects() {
	return projects;
}

export function getVisibleProjects() {
	return projects.filter((p) => p.show);
}

export function getFeaturedProject() {
	return projects.find((p) => p.featured) || null;
}

export function getProjectBySlug(slug) {
	return projects.find((p) => p.slug === slug) || null;
}

export function getExperiences() {
	return experiences;
}

export function getAchievements() {
	return achievements;
}
