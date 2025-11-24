import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
// import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MainNavbar } from "@/components/main-navbar";
import { MainSidebar } from "@/components/main-sidebar";
import { ModalsProvider } from "@/components/providers/modals-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { MSWComponent } from "./_components/MSWComponent";


export const metadata: Metadata = {
	title: "Next.js + Prisma",
	description: "Next.js + Prisma",
};

console.log(process.env.NEXT_PUBLIC_API_MOCKING)

const isTestEnvironment =
  process.env.NODE_ENV === "test" || process.env.NEXT_PUBLIC_API_MOCKING === "enabled"
const mock = !!process.env.NEXT_PUBLIC_API_MOCKING
if (isTestEnvironment || mock) {
  const { server } = await import("../tests/mocks/server")
  console.log("!!!!🟢 MSW Import server!!!!")
  server.listen()
}


export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ja" suppressHydrationWarning>
			<body className="bg-white dark:bg-slate-700">
				<MSWComponent>
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
				</MSWComponent>
			</body>
		</html>
	);
}
