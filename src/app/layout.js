import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AOSComponent from "@/components/AOSComponent";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
export const metadata = {
  title: "Camaya",
  description: "Camaya",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta
          property="og:image"
          content="/assets/home/heroSection/hero6.png"
        />
        <meta property="og:type" content="website" />
      </Head>
      <body className={`antialiased`}>
        <ToastContainer
          position="top-center"
          theme="light"
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <AOSComponent>{children}</AOSComponent>
        <Footer />
      </body>
    </html>
  );
}
