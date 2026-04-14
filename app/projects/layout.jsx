import Footer from "@/components/Footer";

export const metadata = {
  title: "Projects | Furqan Ahmad",
  description:
    "Selected projects spanning full-stack web development, AI/ML, RAG chatbots, computer vision, and voice agents. Built with Next.js, FastAPI, Python, and modern frameworks.",
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}