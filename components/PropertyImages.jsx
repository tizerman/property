import Image from "next/image"
import { Gallery, Item } from "react-photoswipe-gallery"
import { useState, useEffect } from "react"
import Spinner from "./Spinner"

const PropertyImages = ({ images }) => {
  const [imageDimensions, setImageDimensions] = useState([])

  useEffect(() => {
    const getImageDimensions = async () => {
      const dimensions = await Promise.all(
        images.map(
          (image) =>
            new Promise((resolve) => {
              const img = document.createElement("img")
              img.src = image
              img.onload = () => {
                resolve({ src: image, width: img.width * 1.5, height: img.height * 1.5 })
              }
              img.onerror = () => {
                resolve({ src: image, width: 800, height: 600 })
              }
            })
        )
      )
      setImageDimensions(dimensions)
    }

    getImageDimensions()

  }, [images])

  let width
  let height

  if (imageDimensions.length === 0) {
    return <Spinner loading={true} />
  } else {
    width = imageDimensions[0]?.width
    height = imageDimensions[0]?.height
  }

  return (
    <Gallery>
      <section className="bg-blue-50 p-4">
        <div className="container mx-auto">
          {images.length === 1 ? (
            <Item
              original={images[0]}
              thumbnail={images[0]}
              width={width}
              height={height}
              options={{zoom: 1.5}}
            >
              {({ ref, open }) => (
                <Image
                  ref={ref}
                  onClick={open}
                  src={images[0]}
                  alt=""
                  className="object-cover h-[400px] mx-auto rounded-xl"
                  width={width}
                  height={height}
                  sizes="100vw"
                  priority={true}
                />
              )}
            </Item>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              {images.map((image, index) => {
                const { width, height } = imageDimensions[index] || {
                  width: 800,
                  height: 600,
                }

                return (
                  <div
                    key={index}
                    className={`
                  ${
                    images.length === 3 && index === 2
                      ? "col-span-2"
                      : "col-span-1"
                  }
                `}
                  >
                    <Item
                      original={image}
                      thumbnail={image}
                      width={width}
                      height={height}
                      options={{zoom: 1.5}}
                    >
                      {({ ref, open }) => (
                        <Image
                          ref={ref}
                          onClick={open}
                          src={image}
                          alt=""
                          className="object-cover h-[400px] w-full rounded-xl"
                          width={0}
                          height={0}
                          sizes="100vw"
                          priority={true}
                        />
                      )}
                    </Item>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </Gallery>
  )
}

export default PropertyImages
