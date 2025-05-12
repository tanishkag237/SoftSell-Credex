import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ui/theme/ThemeSwitcher";
import { ModeToggle } from "./components/ui/theme/ModeToggle";
import { Toaster } from "sonner";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "SoftSell",
  description: "Platform to sell your unused software",
  openGraph: {
    title: "SoftSell",
    description: "Platform to sell your unused software",
    url: "https://www.softsell.com",
    siteName: "SoftSell",
    locale: "en_US",
  },
  robots: "index, follow", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex justify-end p-4">
            <ModeToggle />
          </div>
          {children}
            <Toaster /> 
        </ThemeProvider>
      </body>
    </html>
  )
}
