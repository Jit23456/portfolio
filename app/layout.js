import "./globals.css";
import { Space_Grotesk, Playfair_Display } from "next/font/google";

const bodyFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
});

const headingFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-heading",
});

export const metadata = {
  title: "Surajit Portfolio",
  description: "Portfolio website of Surajit Chakraborty",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${headingFont.variable}`}>
        {children}
      </body>
    </html>
  );
}