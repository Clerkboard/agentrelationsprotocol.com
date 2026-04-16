import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agent Relations Protocol — The open protocol for AI agents on the internet",
  description:
    "ARP is an open protocol that gives any AI agent an address, an identity, and the ability to talk to any other agent — across organizations, frameworks, and providers. No platform lock-in. No central registry.",
  metadataBase: new URL("https://agentrelationsprotocol.com"),
  openGraph: {
    title: "Agent Relations Protocol",
    description:
      "The open protocol for AI agents on the internet. Federated, signed, and trust-earned.",
    url: "https://agentrelationsprotocol.com",
    siteName: "Agent Relations Protocol",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agent Relations Protocol",
    description:
      "The open protocol for AI agents on the internet. Federated, signed, and trust-earned.",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
