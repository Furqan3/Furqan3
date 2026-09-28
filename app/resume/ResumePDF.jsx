import {
	Document,
	Page,
	Text,
	View,
	StyleSheet,
	Link,
} from "@react-pdf/renderer";

const ACCENT = "#003C71";
const TEXT = "#1f1f1f";
const MUTED = "#555555";

const styles = StyleSheet.create({
	page: {
		paddingHorizontal: 48,
		paddingVertical: 56,
		fontFamily: "Helvetica",
		fontSize: 10,
		color: TEXT,
		lineHeight: 1.45,
	},
	header: { textAlign: "center", marginBottom: 14 },
	name: { fontSize: 20, fontFamily: "Helvetica-Bold", marginBottom: 4 },
	contactLine: { color: ACCENT, fontSize: 9.5 },
	contactSep: { color: ACCENT },
	section: { marginTop: 14 },
	sectionTitle: {
		fontSize: 13,
		fontFamily: "Helvetica-Bold",
		color: ACCENT,
		marginBottom: 4,
		paddingBottom: 2,
		borderBottomWidth: 1,
		borderBottomColor: ACCENT,
		borderBottomStyle: "solid",
		textTransform: "uppercase",
		letterSpacing: 0.5,
	},
	paragraph: { textAlign: "justify", marginTop: 4 },
	subheaderRow: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 6,
	},
	subheaderRoleRow: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 3,
	},
	bold: { fontFamily: "Helvetica-Bold" },
	italic: { fontFamily: "Helvetica-Oblique", color: MUTED },
	bulletRow: { flexDirection: "row", marginTop: 2 },
	bulletDot: { width: 10, textAlign: "center" },
	bulletText: { flex: 1, textAlign: "justify" },
	expertiseLine: { marginTop: 3 },
});

function Bullet({ children }) {
	return (
		<View style={styles.bulletRow}>
			<Text style={styles.bulletDot}>•</Text>
			<Text style={styles.bulletText}>{children}</Text>
		</View>
	);
}

function ContactLine({ contact }) {
	const parts = [
		contact.email && { key: "email", text: contact.email, href: `mailto:${contact.email}` },
		contact.phone && { key: "phone", text: contact.phone },
		contact.linkedin && { key: "linkedin", text: contact.linkedin.label, href: contact.linkedin.href },
		contact.github && { key: "github", text: contact.github.label, href: contact.github.href },
		contact.portfolio && { key: "portfolio", text: contact.portfolio.label, href: contact.portfolio.href },
		contact.location && { key: "location", text: contact.location },
	].filter(Boolean);
	return (
		<Text style={styles.contactLine}>
			{parts.map((p, i) => (
				<Text key={p.key}>
					{p.href ? (
						<Link src={p.href} style={{ color: ACCENT, textDecoration: "none" }}>
							{p.text}
						</Link>
					) : (
						p.text
					)}
					{i < parts.length - 1 ? "  |  " : ""}
				</Text>
			))}
		</Text>
	);
}

function ExperienceBlock({ job }) {
	return (
		<View wrap={false} style={{ marginTop: 8 }}>
			<View style={styles.subheaderRow}>
				<Text style={styles.bold}>{job.company}</Text>
				<Text style={styles.italic}>{job.location}</Text>
			</View>
			<View style={styles.subheaderRoleRow}>
				<Text style={styles.italic}>{job.role}</Text>
				<Text style={styles.italic}>{job.period}</Text>
			</View>
			{job.bullets.map((b, i) => (
				<Bullet key={i}>{b}</Bullet>
			))}
		</View>
	);
}

function ProjectBlock({ project }) {
	return (
		<View wrap={false} style={{ marginTop: 8 }}>
			<View style={styles.subheaderRow}>
				<Text style={styles.bold}>{project.name}</Text>
				<Text style={styles.italic}>{project.period}</Text>
			</View>
			{project.role ? (
				<Text style={[styles.italic, { marginBottom: 2 }]}>{project.role}</Text>
			) : null}
			{project.bullets.map((b, i) => (
				<Bullet key={i}>{b}</Bullet>
			))}
		</View>
	);
}

export default function ResumePDF({
	contact,
	summary,
	expertise,
	experience,
	projects,
	education,
}) {
	return (
		<Document
			title={`${contact.name} — Resume`}
			author={contact.name}
			subject="Resume"
			creator={contact.name}
			producer="furqan-ahmad.dev">
			<Page size="A4" style={styles.page}>
				<View style={styles.header}>
					<Text style={styles.name}>{contact.name}</Text>
					{contact.title ? (
						<Text style={[styles.italic, { marginTop: 2, marginBottom: 4 }]}>
							{contact.title}
						</Text>
					) : null}
					<ContactLine contact={contact} />
				</View>

				{summary ? (
					<View style={styles.section}>
						<Text style={styles.sectionTitle}>Professional Summary</Text>
						<Text style={styles.paragraph}>{summary}</Text>
					</View>
				) : null}

				{expertise && expertise.length ? (
					<View style={styles.section}>
						<Text style={styles.sectionTitle}>Technical Expertise</Text>
						{expertise.map((group) => (
							<Text key={group.category} style={styles.expertiseLine}>
								<Text style={styles.bold}>{group.category}: </Text>
								<Text>{group.items.join(", ")}</Text>
							</Text>
						))}
					</View>
				) : null}

				{experience && experience.length ? (
					<View style={styles.section}>
						<Text style={styles.sectionTitle}>Professional Experience</Text>
						{experience.map((j) => (
							<ExperienceBlock key={j.company + j.period} job={j} />
						))}
					</View>
				) : null}

				{projects && projects.length ? (
					<View style={styles.section}>
						<Text style={styles.sectionTitle}>Technical Projects</Text>
						{projects.map((p) => (
							<ProjectBlock key={p.name} project={p} />
						))}
					</View>
				) : null}

				{education ? (
					<View style={styles.section} wrap={false}>
						<Text style={styles.sectionTitle}>Education</Text>
						<View style={styles.subheaderRow}>
							<Text style={styles.bold}>{education.school}</Text>
							<Text style={styles.italic}>{education.location}</Text>
						</View>
						<View style={styles.subheaderRoleRow}>
							<Text style={styles.italic}>{education.degree}</Text>
							<Text style={styles.italic}>{education.period}</Text>
						</View>
						{education.bullets.map((b, i) => (
							<Bullet key={i}>{b}</Bullet>
						))}
					</View>
				) : null}
			</Page>
		</Document>
	);
}
