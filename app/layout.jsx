import React from "react"
import "@/assets/styles/globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import AuthProvider from "@/components/AuthProvider"
import { GlobalProvider } from "@/context/GlobalContext"
import { ToastContainer } from "react-toastify"
import 'photoswipe/dist/photoswipe.css'

export const metadata = {
  title: "Property | Find The Rental",
  description: "Find your dream rental property",
  keywords: "rental, find rentals, find properties",
}

const MainLayout = ({ children }) => {
  return (
    <GlobalProvider>
      <AuthProvider>
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
