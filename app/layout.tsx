import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Apiary | A Multihub",
  description:
    "Apiary is a platform which provides users with daily News Headlines, Weather Forecast, Currency Exchange Rates, etc.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="apiary-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
