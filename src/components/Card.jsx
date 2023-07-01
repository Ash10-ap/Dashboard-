import React, { useContext } from 'react'
import ThemeContext from "../context/ThemeContext";

function Card({Children}) {

  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`w-full h-full  rounded-md relative pt-8 pb-8 pl-4 pr-4 border-2 ${
        darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-neutral-200"
      }`} >
        {Children}
    </div>
  )
}

export default Card