import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AOSComponent from "@/components/AOSComponent";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
import { Suspense } from "react";

export const metadata = {
  title: "Camaya Coast",
  description:
    "Nestled in the heart of Bataan, Camaya Coast offers a perfect blend of nature and modernity. Enjoy the beauty of pristine beach, world-class amenities, and a vibrant community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Open Graph Meta Tags */}
      <head>
        <meta property="og:title" content="Camaya Coast" />
        <meta
          property="og:description"
          content="Nestled in the heart of Bataan, Camaya Coast offers a perfect blend of nature and modernity. Enjoy the beauty of pristine beach, world-class amenities, and a vibrant community."
        />
        <meta property="og:image" content="/assets/thumbnail.webp" />
        <meta property="og:image:alt" content="About Camaya" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.camayacoastprestige.com/"
        />

        {/* Fallback for Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Camaya" />
        <meta name="twitter:description" content="Camaya" />
        <meta
          name="twitter:image"
          content="/assets/home/heroSection/hero6.png"
        />
      </head>
      <body
        className={`antialiased`}
        style={{ fontFamily: "var(--dynamic-font-family)" }}
      >
        <Suspense fallback={<div>Loading....</div>}>
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
        </Suspense>
      </body>
    </html>
  );
}
