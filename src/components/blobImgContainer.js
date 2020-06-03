import React from "react"
import Image from "./image"

export default function BlobImgContainer({ type, src }) {
  let svgPath

  switch (type) {
    case "1":
      svgPath =
        "M44.8,-48.1C59.3,-41.2,73.2,-28.3,73.2,-14.9C73.3,-1.5,59.4,12.4,50.3,30C41.3,47.5,37,68.7,25.9,74C14.8,79.3,-3.2,68.6,-22.3,61.5C-41.5,54.5,-61.8,51,-72,38.9C-82.1,26.8,-82.1,6.2,-74.4,-9C-66.8,-24.1,-51.6,-33.8,-38,-40.9C-24.3,-48,-12.1,-52.6,1.5,-54.4C15.1,-56.1,30.2,-55.1,44.8,-48.1Z"
      break
    default:
      svgPath = ""
  }

  return (
    <>
      <div
        style={{
          filter: "drop-shadow(4px 4px 8px rgba(0, 0, 0, 0.7)",
        }}
      >
        <div
          style={{
            clipPath: `url(#clip1)`,
            height: "300px",
            width: "300px",
          }}
        >
          <Image src={src}></Image>
        </div>
      </div>
      <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="clip1" transform="scale(2 2), translate(-25 -25)">
            <path d={svgPath} transform="translate(100 100)" />
          </clipPath>
        </defs>
      </svg>
    </>
  )
}
