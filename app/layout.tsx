import type { Metadata } from "next";
import { Montserrat, Source_Code_Pro, Poppins } from "next/font/google";
import "./globals.css";
import "@/styles/glassmorphism.css";
import "@/styles/neumorphism.css";

import Navbar from "@/components/layouts/Navbar";
import { BASE_PATH } from "@/lib/constants";


const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700"], // regular + bold
  display: "swap",
});

const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
  weight: ["400", "700"], // adjust as needed
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600"], // regular + semi-bold
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nayan",
  description: "Personal portfolio showcasing experience, projects, skills, and about.",
  icons: { icon: `${BASE_PATH}/favicon.ico` }, // Include basePath for GitHub Pages
  metadataBase: new URL("https://nayanbunny.github.io/portfolio"),
  openGraph: {
    title: "Nayan",
    description: "Personal portfolio",
    url: "https://nayanbunny.github.io/portfolio",
    siteName: "Portfolio",
    type: "website",
  },
  robots: { index: true, follow: true },
};

// export const viewport: Viewport = {
//   themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#0b0f19" }, { color: "#ffffff" }],
// };


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={[
          montserrat.variable,
          sourceCodePro.variable,
          poppins.variable,
          "antialiased",
        ].join(" ")}
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
