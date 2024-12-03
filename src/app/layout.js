import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AOSComponent from "@/components/AOSComponent";

export const metadata = {
  title: "Camaya",
  description: "Camaya",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <AOSComponent>{children}</AOSComponent>
        <Footer />
      </body>
    </html>
  );
}
