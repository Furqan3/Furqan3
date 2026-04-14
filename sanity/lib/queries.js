import { client } from "./client";

// ─── Projects ────────────────────────────────────────────────────────────────

export async function getAllProjects() {
	return client.fetch(
		`*[_type == "project"] | order(_createdAt asc) {
			_id,
			title,
			"slug": slug.current,
			show,
			year,
			desc,
			tech,
			category,
			"thumbnail": thumbnail.asset->url,
			"images": images[].asset->url,
			preview,
			code,
			featured
		}`
	);
}

export async function getFeaturedProject() {
	return client.fetch(
		`*[_type == "project" && featured == true] | order(_createdAt asc) [0] {
			title,
			"slug": slug.current,
			year,
			desc,
			tech,
			"thumbnail": thumbnail.asset->url,
			"images": images[].asset->url,
			preview,
			code
		}`
	);
}

export async function getProjectBySlug(slug) {
	return client.fetch(
		`*[_type == "project" && slug.current == $slug][0] {
			title,
			"slug": slug.current,
			year,
			desc,
			tech,
			"thumbnail": thumbnail.asset->url,
			"images": images[].asset->url,
			preview,
			code
		}`,
		{ slug }
	);
}

// ─── Experience ───────────────────────────────────────────────────────────────

export async function getExperiences() {
	return client.fetch(
		`*[_type == "experience"] | order(order asc) {
			_id,
			company,
			position,
			type,
			startDate,
			endDate,
			location,
			description,
			skills
		}`
	);
}

// ─── Achievements ─────────────────────────────────────────────────────────────

export async function getAchievements() {
	return client.fetch(
		`*[_type == "achievement"] | order(order asc) {
			_id,
			title,
			subtitle,
			date,
			iconKey,
			colorKey
		}`
	);
}

// ─── Settings ─────────────────────────────────────────────────────────────────

export async function getSettings() {
	return client.fetch(
		`*[_type == "settings"][0] {
			name,
			title,
			bio,
			email,
			github,
			linkedin,
			institution,
			degree,
			eduStartYear,
			eduEndYear,
			eduLocation,
			eduDescription,
			eduTags,
			"heroImage": heroImage.asset->url,
			"aboutHeroImage": aboutHeroImage.asset->url,
			"aboutImage1": aboutImage1.asset->url,
			"aboutImage2": aboutImage2.asset->url,
			"aboutImage3": aboutImage3.asset->url,
			"projectsImage": projectsImage.asset->url,
			"setupImage": setupImage.asset->url
		}`
	);
}
