import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const ovo = Ovo({
  subsets: ["latin"],
  weight: ['400']
});




export const metadata = {
  title: "Masum Dev | Full Stack Developer & Growth Specialist",
  description: "I build web apps and help businesses generate leads through cold email outreach.",
  icons: {
    icon: "/favicon.ico", // or "/favicon.ico"
  },
};

export default function RootLayout({ children }) {
  return (
    <html
  lang="en"
  suppressHydrationWarning
  className={`${outfit.className} ${ovo.className} h-full antialiased leading-8 overflow-x-hidden scroll-smooth`}
>
      <body className="min-h-full flex flex-col dark:bg-darkTheme dark:text-white">{children}</body>
    </html>
  );
}
