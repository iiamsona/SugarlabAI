import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <mask
      id="a"
      width={24}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path fill="#fff" d="M0 0h24v24H0V0Z" />
    </mask>
    <g mask="url(#a)">
      <path
        fill="currentColor"
        d="M11.5 2C6.265 2 2 6.265 2 11.5S6.265 21 11.5 21s9.5-4.265 9.5-9.5S16.735 2 11.5 2Zm4.209 5.947-2.85 4.75a.439.439 0 0 1-.162.162l-4.75 2.85a.46.46 0 0 1-.247.066.446.446 0 0 1-.333-.143.462.462 0 0 1-.076-.579l2.85-4.75a.439.439 0 0 1 .162-.162l4.75-2.85a.462.462 0 0 1 .58.076c.161.152.19.39.076.58Z"
      />
    </g>
  </svg>
)
export default SvgComponent
