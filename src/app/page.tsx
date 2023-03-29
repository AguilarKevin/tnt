import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      Typescript Next.js & TailwindCSS Starter Template By @aguilarkevin
    </main>
  );
}
