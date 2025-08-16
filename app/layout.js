import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { dark } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CareerIQ",
  description:
    "An AI-powered platform that helps job seekers and professionals make smarter career choices through personalized job recommendations, industry insights, interview practice, and resume building.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}>
      <html lang="en" suppressHydrationWarning>
        <head>
          {/* Only HTML elements here */}
          <link rel="icon" href="/logo.png" sizes="any" />
        </head>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange>
            {/* Header */}
            <Header />

            {/* Main content */}
            <main className="min-h-screen">{children}</main>

            {/* Toaster for notifications */}
            <Toaster richColors />

            {/* Footer */}
            <footer className="bg-muted/50 py-12">
              <div className="container mx-auto px-4 text-center text-gray-200">
                <p>G6 Working on it</p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
