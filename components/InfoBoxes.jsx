import Link from "next/link"
import React from "react"
import InfoBox from "./InfoBox.jsx"

const InfoBoxes = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox
            heading="Для арендаторов"
            backgroundColor="bg-gray-100"
            buttonInfo={{
              text: "Просмотр недвижимости",
              link: "/properties",
              backgroundColor: "bg-black",
            }}
          >
            Найдите недвижимость своей мечты. Добавьте в закладки недвижимость и
            свяжитесь с владельцем.
          </InfoBox>
          {/* 2nd infobox */}
          <InfoBox
            heading="Для владельцев недвижимости"
            backgroundColor="bg-blue-100"
            buttonInfo={{
              text: "Добавить недвижимость",
              link: "/properties/add",
              backgroundColor: "bg-blue-500",
            }}
          >
            Разместите свои объекты и привлеките потенциальных клиентов.
            Сдавайте в аренду как Airbnb или на длительный срок.
          </InfoBox>
        </div>
      </div>
    </section>
  )
}

export default InfoBoxes
