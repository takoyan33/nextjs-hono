import type { Metadata } from "next";
import "./globals.css";
// import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";
import { MainNavbar } from "@/components/main-navbar";
import { MainSidebar } from "@/components/main-sidebar";
import { ModalsProvider } from "@/components/providers/modals-provider";

export const metadata: Metadata = {
  title: "Next.js + Prisma",
  description: "Next.js + Prisma",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className="bg-white dark:bg-slate-700">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ClerkProvider>
            <ModalsProvider />
            <MainNavbar />
            <main className="flex h-full w-full relative overflow-hidden overflow-y-auto">
              <div className="w-[200px] shrink-0 hidden lg:block">
                <MainSidebar />
              </div>
              {children}
            </main>
            <Footer />
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
