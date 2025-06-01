import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Header from "./components/Header";
import GoogleAnalytics from "./components/GoogleAnalytics";
import { Neuton, Noto_Sans } from "next/font/google";
import "./globals.css";

const neuton = Neuton({
  variable: "--font-neuton",
  subsets: ["latin"],
  weight: ["200", "300", "400", "700", "800"],
});

const noto_sans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eric Tsendjav - Software Engineer and Problem Solver",
  description:
    "Hi! This is Eric's AI avatar. Ask me anything about my background and you can get it answered here as if I was talking to you!",
  keywords: [
    "Eric Tsendjav",
    "Software Engineer",
    "Full Stack Developer",
    "Backend Developer",
    ".NET Developer",
    "Minnesota State University, Mankato",
    "CS",
    "Computer Science",
    "Tech Portfolio",
    "Student Developer",
    "Internship Experience",
    "Web Developer",
    "Cloud Developer",
    "Cloud Engineer",
    "AI Developer",
    "ML Engineer",
    "United States Software Engineer",
    "Engineering Portfolio",
  ],
  authors: [{ name: "Eric Tsendjav", url: "https://sukh0128.github.io/portfolio/" }],
  creator: "Eric Tsendjav",
  openGraph: {
    title: "Eric Tsendjav – Software Engineer Portfolio",
    description:
      "Hi! This is Eric's AI avatar. Ask me anything about my background and you can get it answered here as if I was talking to you!",
    url: "https://sukh0128.github.io/portfolio/",
    siteName: "Eric Tsendjav Portfolio",
    type: "website",
    locale: "en_US",
  },
};
const siteProps = {
  name: "Eric Tsendjav",
  title: "Software Engineer",
  email: "erdenesukh@gmail.com",
  gitHub: "sukh0128",
  linkedIn: "erdenesukh-tsendjav"
};
const primaryColor = "#000000";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${noto_sans.variable} ${neuton.variable} antialiased`} style={{ margin: 0, padding: 0 }}>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || "G-Q3L1FNZM20"} />
        <div>
          <section className="bg-black w-full h-full">
            <Header />
          </section>
        </div>
        <div className="h-screen" style={{ backgroundImage: "url('/Eric.jpg')", backgroundSize: "cover", backgroundPosition: "top right" }}>
          <section id="header" className="h-full max-w-screen-sm mx-auto flex justify-center items-center">
            {children}
            <Analytics />
          </section>
        </div>
        <div className=" w-full">
          <section className="bg-black w-full ">
            <About />
          </section>
        </div>
        <div className="min-h-screen w-full">
          <section className="bg-black w-full h-full min-h-screen">
            <Portfolio />
          </section>
        </div>
        <div className="w-full relative z-50">
          <section className="bg-black w-full h-full flex justify-center items-end pb-2 relative z-50">
            <Footer {...siteProps} primaryColor={primaryColor} />
          </section>
        </div>
      </body>
    </html>
  );
}
