import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Apiary | A MultiHub Platform",
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
      <body
        className={cn(
          font.className,
          "bg-slate-100 antialiased transition duration-200 dark:bg-slate-900",
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          storageKey="apiary-theme"
        >
          <main>
            <header className="sticky top-0 z-50">
              <Navbar />
            </header>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
