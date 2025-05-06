import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "ЭРС Групп - Профессиональные электромонтажные работы",
  description: "Комплексные решения в области энергетики и электромонтажных работ в дальних регионах России. Надежный партнер с опытом работы с 2010 года.",
  keywords: "электромонтажные работы, электрооборудование, энергетика, сварочное производство, ЭРС Групп, Россия",
  openGraph: {
    title: "ЭРС Групп - Профессиональные электромонтажные работы",
    description: "Комплексные решения в области энергетики и электромонтажных работ в дальних регионах России. Надежный партнер с опытом работы с 2010 года.",
    url: "https://www.enremservice.ru/",
    siteName: "ЭРС Групп",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ЭРС Групп - электромонтажные работы",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
