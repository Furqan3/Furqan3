import Footer from "@/components/Footer";

export const metadata = {
  title: "About | Furqan Ahmad",
  description:
    "Full-Stack & AI Engineer specializing in Next.js, FastAPI, RAG Chatbots, Computer Vision, and Voice Agents. Machine Learning Engineer at Vision Tech 360. Computer Engineering graduate from NUST.",
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
