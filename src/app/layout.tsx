import "./globals.css";

export const metadata = {
  title: "Next.js & TailwindCSS Starter Template",
  description: "Next.js & TailwindCSS Starter Template By @aguilarkevin"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
