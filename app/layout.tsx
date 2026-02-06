import React from "react"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/lib/locale-context";

const _inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default:
      "Shaahin Rassaf | Cloud Architect & Automation Specialist | Liverpool, UK",
    template: "%s | Rahbord Co",
  },
  description:
    "Enterprise cloud solutions, n8n workflow automation, Azure cloud architecture, and AI-driven digital marketing from a senior tech consultant based in Liverpool, UK. Reduce costs, increase efficiency.",
  keywords: [
    "Tech Consultant in Liverpool",
    "Cloud Architect UK",
    "n8n Automation Specialist",
    "Azure Cloud Solutions Liverpool",
    "Hyper-automation",
    "Cloud-Native Transformation",
    "Workflow Engineering",
    "Low-code Solutions",
    "API Integration",
    "Data Sovereignty",
    "Cost Optimization",
    "React Developer Liverpool",
    "WordPress Developer UK",
  ],
  authors: [{ name: "Shaahin Rassaf" }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://rahbordco.net",
    siteName: "Rahbord Co",
    title:
      "Shaahin Rassaf | Cloud Architect & Automation Specialist | Liverpool, UK",
    description:
      "Enterprise cloud solutions, n8n workflow automation, and Azure cloud architecture from Liverpool, UK.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shaahin Rassaf | Cloud Architect | Liverpool, UK",
    description:
      "Enterprise cloud solutions and intelligent automation from Liverpool, UK.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#0A1128",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <script
          type="application/ld+json"
          // biome-ignore lint: needed for SEO
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Rahbord Co - Shaahin Rassaf",
              description:
                "Enterprise cloud solutions, workflow automation, and web development services.",
              url: "https://rahbordco.net",
              telephone: "+447474777068",
              email: "rahbordco.net@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Castle Street",
                addressLocality: "Liverpool",
                addressCountry: "GB",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 53.4084,
                longitude: -2.9916,
              },
              areaServed: {
                "@type": "Country",
                name: "United Kingdom",
              },
              founder: {
                "@type": "Person",
                name: "Shaahin Rassaf",
                jobTitle: "Senior Cloud Architect & Automation Specialist",
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
