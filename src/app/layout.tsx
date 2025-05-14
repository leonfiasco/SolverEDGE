import type { Metadata } from "next";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import "./globals.scss";
import { SiteHeader } from "./components";
import { ThemeProvider } from "./store/ThemeContext"; // Adjust the import path as needed

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "700"], // Light, Regular, Bold
});

export const metadata: Metadata = {
  title: "SolverEDGE",
  description:
    "North Shore Education Centre (Coaching College) is Australia's largest and leading tuition college. We prepare students for academic excellence and success.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
      </head>
      <body className={inter.variable}>
        <ThemeProvider>
          <SiteHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
