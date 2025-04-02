"use client"
import { useState, useEffect } from "react"

const PropertyAddForm = () => {
  const [mounted, setMounted] = useState(false)
  const [fields, setFields] = useState({
    type: "",
    name: "",
    description: "",
    location: {
      street: "",
      city: "",
      state: "",
      zipcode: "",
    },
    beds: "1",
    baths: "1",
    square_feet: "50",
    amenities: [],
    rates: {
      weekly: "",
      monthly: "500",
      nightly: "",
    },
    seller_info: {
      name: "Yevhenii",
      email: "yevheniiera@gmail.com",
      phone: "+380675843229",
    },
    owner_info: {
      phone: "",
      url: "",
    },
    images: [],
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target

    // Check if nested property
    if (name.includes(".")) {
      const [outerKey, innerKey] = name.split(".")

      setFields((prevFields) => ({
        ...prevFields,
        [outerKey]: {
          ...prevFields[outerKey],
          [innerKey]: value,
        },
      }))
    } else {
      // Not nested
      setFields((prevFields) => ({
        ...prevFields,
        [name]: value,
      }))
    }
  }
  const handleAmenitiesChange = (e) => {
    const { value, checked } = e.target

    // Clone the current array
    const updatedAmenites = [...fields.amenities]

    if (checked) {
      // Add value to array
      updatedAmenites.push(value)
    } else {
      // Remove value from array
      const index = updatedAmenites.indexOf(value)

      if (index !== -1) {
        updatedAmenites.splice(index, 1)
      }
    }

    // Update state with updated array
    setFields((prevFields) => ({
      ...prevFields,
      amenities: updatedAmenites,
    }))
  }

  const handleImageChange = (e) => {
    const { files } = e.target

    // Clone images array
    const updatedImages = [...fields.images]

    // Add new files to the array
    for (const file of files) {
      updatedImages.push(file)
    }

    // Update state with array of images
    setFields((prevFields) => ({
      ...prevFields,
      images: updatedImages,
    }))
  }

  return (
    mounted && (
      <form
        action="/api/properties"
        method="POST"
        encType="multipart/form-data"
      >
        <h2 className="text-3xl text-center font-semibold mb-6">
          Добавить недвижимость
        </h2>

        <div className="mb-4">
          <label htmlFor="type" className="block text-gray-700 font-bold mb-2">
            Тип недвижимости
          </label>
          <select
            id="type"
            name="type"
            className="border rounded w-full py-2 px-3"
            required
            value={fields.type}
            onChange={handleChange}
          >
            <option value="Apartment">Апартамент</option>
            <option value="Mezo">Мезонет</option>
            <option value="House">Дом</option>
            <option value="Cottage">Коттедж</option>
            <option value="Room">Комната</option>
            <option value="Studio">Студия</option>
            <option value="Other">Другое</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Наименование объекта
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="border rounded w-full py-2 px-3 mb-2"
            placeholder="например: Апартамент с мебелью 1+1 в центре Варны"
            required
            value={fields.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-bold mb-2"
          >
            Описание
          </label>
          <textarea
            id="description"
            name="description"
            className="border rounded w-full py-2 px-3"
            rows="4"
            placeholder="Добавьте выборочное описание вашей недвижимости"
            value={fields.description}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="mb-4 bg-blue-50 p-4">
          <label className="block text-gray-700 font-bold mb-2">
            Местоположение
          </label>
          <input
            type="text"
            id="city"
            name="location.city"
            className="border rounded w-full py-2 px-3 mb-2"
            placeholder="Город"
            required
            value={fields.location.city}
            onChange={handleChange}
          />
          <input
            type="text"
            id="street"
            name="location.street"
            className="border rounded w-full py-2 px-3 mb-2"
            placeholder="Улица"
            value={fields.location.street}
            onChange={handleChange}
          />
          <input
            type="text"
            id="state"
            name="location.state"
            className="border rounded w-full py-2 px-3 mb-2"
            placeholder="Район"
            required
            value={fields.location.state}
            onChange={handleChange}
          />
          <input
            type="text"
            id="zipcode"
            name="location.zipcode"
            className="border rounded w-full py-2 px-3 mb-2"
            placeholder="Индекс"
            value={fields.location.zipcode}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4 flex flex-wrap">
          <div className="w-full sm:w-1/3 pr-2">
            <label
              htmlFor="beds"
              className="block text-gray-700 font-bold mb-2"
            >
              К-во спален
            </label>
            <input
              type="number"
              id="beds"
              name="beds"
              className="border rounded w-full py-2 px-3"
              required
              value={fields.beds}
              onChange={handleChange}
            />
          </div>
          <div className="w-full sm:w-1/3 px-2">
            <label
              htmlFor="baths"
              className="block text-gray-700 font-bold mb-2"
            >
              К-во санузлов
            </label>
            <input
              type="number"
              id="baths"
              name="baths"
              className="border rounded w-full py-2 px-3"
              required
              value={fields.baths}
              onChange={handleChange}
            />
          </div>
          <div className="w-full sm:w-1/3 pl-2">
            <label
              htmlFor="square_feet"
              className="block text-gray-700 font-bold mb-2"
            >
              Квадратура
            </label>
            <input
              type="number"
              id="square_feet"
              name="square_feet"
              className="border rounded w-full py-2 px-3"
              required
              value={fields.square_feet}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Удобства</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            <div>
              <input
                type="checkbox"
                id="amenity_wifi"
                name="amenities"
                value="Wifi"
                className="mr-2"
                checked={fields.amenities.includes("Wifi")}
                onChange={handleAmenitiesChange}
              />
              <label htmlFor="amenity_wifi">Wifi</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="amenity_kitchen"
                name="amenities"
                value="Кухня"
                className="mr-2"
                checked={fields.amenities.includes("Кухня")}
                onChange={handleAmenitiesChange}
              />
              <label htmlFor="amenity_kitchen">Кухня</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="amenity_washer_dryer"
                name="amenities"
                value="Стиральная машина"
                className="mr-2"
                checked={fields.amenities.includes("Стиральная машина")}
                onChange={handleAmenitiesChange}
              />
              <label htmlFor="amenity_washer_dryer">Стиральная машина</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="amenity_free_parking"
                name="amenities"
                value="Паркоместо"
                className="mr-2"
                checked={fields.amenities.includes("Паркоместо")}
                onChange={handleAmenitiesChange}
              />
              <label htmlFor="amenity_free_parking">Паркоместо</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="amenity_pool"
                name="amenities"
                value="Бассейн"
                className="mr-2"
                checked={fields.amenities.includes("Бассейн")}
                onChange={handleAmenitiesChange}
              />
              <label htmlFor="amenity_pool">Бассейн</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="amenity_hot_tub"
                name="amenities"
                value="Джакузи"
                className="mr-2"
                checked={fields.amenities.includes("Джакузи")}
                onChange={handleAmenitiesChange}
              />
              <label htmlFor="amenity_hot_tub">Джакузи</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="amenity_24_7_security"
                name="amenities"
                value="Охрана 24/7"
                className="mr-2"
                checked={fields.amenities.includes("Охрана 24/7")}
                onChange={handleAmenitiesChange}
              />
              <label htmlFor="amenity_24_7_security">Охрана 24/7</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="amenity_wheelchair_accessible"
                name="amenities"
                value="Доступ для инвалидов"
                className="mr-2"
                checked={fields.amenities.includes("Доступ для инвалидов")}
                onChange={handleAmenitiesChange}
              />
              <label htmlFor="amenity_wheelchair_accessible">
                Доступ для инвалидов
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="amenity_elevator_access"
                name="amenities"
                value="Лифт"
                className="mr-2"
                checked={fields.amenities.includes("Лифт")}
                onChange={handleAmenitiesChange}
              />
              <label htmlFor="amenity_elevator_access">Лифт</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="amenity_dishwasher"
                name="amenities"
                value="Посудомойка"
                className="mr-2"
                checked={fields.amenities.includes("Посудомойка")}
                onChange={handleAmenitiesChange}
              />
              <label htmlFor="amenity_dishwasher">Посудомойка</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="amenity_gym_fitness_center"
                name="amenities"
                value="Спортзал"
                className="mr-2"
                checked={fields.amenities.includes("Спортзал")}
                onChange={handleAmenitiesChange}
              />
              <label htmlFor="amenity_gym_fitness_center">
                Спортзал
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="amenity_air_conditioning"
                name="amenities"
                value="Кондиционер"
                className="mr-2"
                checked={fields.amenities.includes("Кондиционер")}
                onChange={handleAmenitiesChange}
              />
              <label htmlFor="amenity_air_conditioning">Кондиционер</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="amenity_balcony_patio"
                name="amenities"
                value="Балкон/Патио"
                className="mr-2"
                checked={fields.amenities.includes("Балкон/Патио")}
                onChange={handleAmenitiesChange}
              />
              <label htmlFor="amenity_balcony_patio">Балкон/Патио</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="amenity_smart_tv"
                name="amenities"
                value="Smart TV"
                className="mr-2"
                checked={fields.amenities.includes("Smart TV")}
                onChange={handleAmenitiesChange}
              />
              <label htmlFor="amenity_smart_tv">Smart TV</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="amenity_coffee_maker"
                name="amenities"
                value="Кофемашина"
                className="mr-2"
                checked={fields.amenities.includes("Кофемашина")}
                onChange={handleAmenitiesChange}
              />
              <label htmlFor="amenity_coffee_maker">Кофемашина</label>
            </div>
          </div>
        </div>

        <div className="mb-4 bg-blue-50 p-4">
          <label className="block text-gray-700 font-bold mb-2">
            Цены (Достаточно заполнить одну категорию)
          </label>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <div className="flex items-center">
              <label htmlFor="weekly_rate" className="mr-2">
                Понедельно
              </label>
              <input
                type="number"
                id="weekly_rate"
                name="rates.weekly"
                className="border rounded w-full py-2 px-3"
                value={fields.rates.weekly}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center">
              <label htmlFor="monthly_rate" className="mr-2">
                Помесячно
              </label>
              <input
                type="number"
                id="monthly_rate"
                name="rates.monthly"
                className="border rounded w-full py-2 px-3"
                value={fields.rates.monthly}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center">
              <label htmlFor="nightly_rate" className="mr-2">
                Посуточно
              </label>
              <input
                type="number"
                id="nightly_rate"
                name="rates.nightly"
                className="border rounded w-full py-2 px-3"
                value={fields.rates.nightly}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="seller_name"
            className="block text-gray-700 font-bold mb-2"
          >
            Имя продавца
          </label>
          <input
            type="text"
            id="seller_name"
            name="seller_info.name"
            className="border rounded w-full py-2 px-3"
            placeholder="Name"
            value={fields.seller_info.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="seller_email"
            className="block text-gray-700 font-bold mb-2"
          >
            Email продавца
          </label>
          <input
            type="email"
            id="seller_email"
            name="seller_info.email"
            className="border rounded w-full py-2 px-3"
            placeholder="Email address"
            required
            value={fields.seller_info.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="seller_phone"
            className="block text-gray-700 font-bold mb-2"
          >
            Телефон продавца
          </label>
          <input
            type="tel"
            id="seller_phone"
            name="seller_info.phone"
            className="border rounded w-full py-2 px-3"
            placeholder="Phone"
            value={fields.seller_info.phone}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="owner_phone"
            className="block text-gray-700 font-bold mb-2"
          >
            Телефон собственника
          </label>
          <input
            type="tel"
            id="owner_phone"
            name="owner_info.phone"
            className="border rounded w-full py-2 px-3"
            placeholder="Phone"
            value={fields.owner_info.phone}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="owner_url"
            className="block text-gray-700 font-bold mb-2"
          >
            URL собственника
          </label>
          <input
            type="text"
            id="owner_url"
            name="owner_info.url"
            className="border rounded w-full py-2 px-3"
            placeholder="Url"
            value={fields.owner_info.url}
            onChange={handleChange}
          />
        </div>        

        <div className="mb-4">
          <label
            htmlFor="images"
            className="block text-gray-700 font-bold mb-2"
          >
            Images (Select up to 4 images)
          </label>
          <input
            type="file"
            id="images"
            name="images"
            className="border rounded w-full py-2 px-3"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            required
          />
        </div>

        <div>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Property
          </button>
        </div>
      </form>
    )
  )
}
export default PropertyAddForm
