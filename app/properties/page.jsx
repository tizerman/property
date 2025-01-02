import React from "react"
import Properties from "@/components/Properties"
import PropertySearchForm from "@/components/PropertySearchForm"

export const metadata = {
  title: "Аренда и продажа недвижимости в Варне",
  description: "арендовать или купить квартиру в Варне",
  keywords:
    "арендовать, купить, продать, снять, сдать, квартиру, апартамент, недвижимость, в Варне",
}

const ProprtiesPage = async () => {
  return (
    <>
      <section className='bg-blue-700 py-4'>
        <div className='max-w-7xl mx-auto px-4 flex flex-col items-start sm:px-6 lg:px-8'>
          <PropertySearchForm />
        </div>
      </section>
      <Properties />
    </>
  )
}

export default ProprtiesPage
