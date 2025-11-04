import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Paper } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tra cứu phạt nguội trực tuyến - Thông báo phạt nguội nhanh chóng",
  description:
    "Cung cấp dịch vụ tra cứu phạt nguội và thông báo phạt nguội chính xác, nhanh chóng.",
  keywords:
    "tra cứu phạt nguội, thông báo phạt nguội, dịch vụ trực tuyến, giao thông, vi phạm giao thông",
  icons: {
    icon: "/favicon.ico", // hoặc favicon.png nếu bạn dùng png
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Navigation />
            <div
              className="flex-grow translate-y-0 transition-transform duration-300 ease-in-out"
              style={{ marginTop: "16px" }}
            >
              <main className="max-w-[800px] w-full mx-auto px-4">
                <Paper
                  elevation={3}
                  sx={{
                    p: 2,
                    pt: 0,
                    width: "100%",
                    borderRadius: 2,
                    overflow: "hidden",
                    boxShadow: "none",
                  }}
                >
                  {children}
                </Paper>
              </main>
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
