import React from 'react'
import Hero from '@/components/Hero'
import InfoBoxes from '@/components/InfoBoxes'
import HomeProperties from '@/components/HomeProperties'
import FeaturedProperties from '@/components/FeaturedProperties'

export const metadata = {
  title: 'Аренда и купля-продажа недвижимости в Варне',
  description: 'Найти недвижимость в Варне для покупки или аренды',
  keywords: 'недвижимость, аренда недвижимости, продажа недвижимости, покупка недвижимости',
  googleSiteVerification: 'JEufSRMVmgB7qxQOYPvrBUly4oSq9qA65GWkCHRi4N0',
}

const HomePage = () => {

  return (
    <>
      <Hero />
      <InfoBoxes />
      <FeaturedProperties />
      <HomeProperties />
    </>
  )
}

export default HomePage