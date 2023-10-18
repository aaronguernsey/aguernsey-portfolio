import { content } from "@/lib/content";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: content.title,
  creator: content.title,
  publisher: "Guernsey Creative",
  description:
    "Full-Stack Engineer, UX/UI Designer, and Writer. Play Tip Tap Go, read my scripts at Guernsey Bros, or checkout my projects on GitHub.",
  metadataBase: new URL("https://aaronguernsey.com"),
  applicationName: "Aaron Guernsey's Portfolio",
  authors: [
    { name: "Aaron Guernsey", url: "https://aaronguernsey.com" },
    { name: "Aaron Guernsey", url: "https://tiptapgo.app" },
    { name: "Aaron and Nick Guernsey", url: "https://guernseybros.com" },
  ],
  generator: "Next.js",
  keywords: [
    "full-stack engineer",
    "web developer",
    "ux designer",
    "ui designer",
    "travel writer",
    "photojournalism",
    "screenwriter",
    "mobile web games",
  ],
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    siteName: "@site",
    title: "@creator",
    locale: "en_US",
    url: "https://aaronguernsey.com",
    description:
      "Full-Stack Engineer, UX/UI Designer, and Writer. Play Tip Tap Go, read my scripts at Guernsey Bros, or checkout my projects on GitHub.",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/18756136?v=4",
        alt: "Aaron Guernsey",
        width: 1200,
        height: 800,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
