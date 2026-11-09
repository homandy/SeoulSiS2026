import "./globals.css";

export const metadata = {
  title: "SeoulSis | Seoul Girls Trip 2026",
  description: "Seoul Girls Trip · 19–23 November 2026",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-HK">
      <body>{children}</body>
    </html>
  );
}
