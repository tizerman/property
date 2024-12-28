import React from 'react'
import PropertySearchForm from './PropertySearchForm'

const Hero = () => {
  return (
    <div>

<section className="bg-blue-700 py-20 mb-4">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      >
        <div className="text-center">
          <h1
            className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl"
          >
            Найти недвижимость в Варне для покупки или аренды
          </h1>
          <p className="my-4 text-xl text-white">
            Найдите недвижимость, которая соответствует вашим требованиям.
          </p>
        </div>
        <PropertySearchForm />
      </div>
    </section>
    </div>
  )
}

export default Hero