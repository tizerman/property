import React from "react"
import "@/assets/styles/globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import AuthProvider from "@/components/AuthProvider"
import { GlobalProvider } from "@/context/GlobalContext"
import { ToastContainer } from "react-toastify"
import "photoswipe/dist/photoswipe.css"
import Head from "next/head"

export const metadata = {
  title: "Аренда и купля-продажа недвижимости в Варне",
  description: "Найти недвижимость в Варне для покупки или аренды",
  keywords:
    "недвижимость, аренда недвижимости, продажа недвижимости, покупка недвижимости",
}

const MainLayout = ({ children }) => {
  return (
    <GlobalProvider>
      <AuthProvider>
        <Head>
          <link rel="icon" type="favicon.ico" />
        </Head>
        <html lang="en">
          <body>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <ToastContainer />
          </body>
        </html>
      </AuthProvider>
    </GlobalProvider>
  )
}

export default MainLayout
