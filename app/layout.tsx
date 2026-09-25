import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0D0D0D",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "ScyterCorp — Enterprise Software House & Digital Solutions",
  description:
    "ScyterCorp adalah software house terkemuka yang membangun solusi software berkinerja tinggi, sistem web & mobile skala enterprise, arsitektur cloud terdistribusi, dan automasi AI untuk mengakselerasi pertumbuhan bisnis Anda.",
  keywords: [
    "ScyterCorp",
    "software house",
    "jasa pembuatan web",
    "jasa aplikasi mobile",
    "enterprise software development",
    "cloud architecture",
    "AI automation",
    "software house indonesia",
    "fullstack development",
  ],
  authors: [{ name: "ScyterCorp Engineering Team" }],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "ScyterCorp — Enterprise Software House & Digital Solutions",
    description:
      "Mitra rekayasa perangkat lunak terpercaya untuk korporasi, startup bertumbuh, dan bisnis modern. Bangun solusi digital berstandar global bersama kami.",
    url: "https://scytercorp.com",
    siteName: "ScyterCorp",
    images: [
      {
        url: "/logo2.png",
        width: 1200,
        height: 630,
        alt: "ScyterCorp — Software House",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${spaceGrotesk.variable} ${plusJakartaSans.variable} scroll-smooth dark`}
    >
      <body className="min-h-screen bg-[#0D0D0D] text-white font-[family-name:var(--font-body)] antialiased selection:bg-[#FFD700] selection:text-[#0D0D0D]">
        {children}
      </body>
    </html>
  );
}
