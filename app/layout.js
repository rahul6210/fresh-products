
import { Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TastyDaily – Delicious Recipes & Food Inspiration",
  description: "Explore mouth-watering recipes, healthy eating tips, and the latest food trends on TastyDaily. Perfect for food lovers and home cooks!",
};


export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className=
    
    {`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
