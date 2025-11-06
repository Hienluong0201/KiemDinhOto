"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Paper } from "@mui/material";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isMapPage = pathname === "/ban-do-vi-pham";

  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {!isMapPage && <Navigation />}

          <div
            className="flex-grow"
            style={{
              marginTop: isMapPage ? 0 : 16,
            }}
          >
            <main
              className={
                isMapPage
                  ? "w-full h-screen"
                  : "max-w-[800px] w-full mx-auto px-4"
              }
            >
              <Paper
                elevation={isMapPage ? 0 : 3}
                sx={{
                  p: isMapPage ? 0 : 2,
                  pt: 0,
                  width: "100%",
                  height: isMapPage ? "100vh" : "auto",
                  borderRadius: isMapPage ? 0 : 2,
                  overflow: "hidden",
                  boxShadow: isMapPage ? "none" : "default",
                }}
              >
                {children}
              </Paper>
            </main>
          </div>

          {!isMapPage && <Footer />}
        </ThemeProvider>
      </body>
    </html>
  );
}
