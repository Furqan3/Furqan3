import { Inter } from 'next/font/google'; // Optional: For font
// Remove unused import
// import { icons } from "lucide-react";

export const metadata = {
  title: 'Furqan Portfolio',
  description: 'Furqan\'s personal portfolio website showcasing projects and skills.',
  keywords: ['Furqan', 'Portfolio', 'Web Developer', 'Projects', 'Skills'],
};

// Optional: Load a font (e.g., Inter)
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/hero.ico" type="image/x-icon" />
        {/* Optional: Add other meta tags or links */}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}