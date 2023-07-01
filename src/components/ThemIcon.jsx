import React, { useContext } from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ThemeContext from '../context/ThemeContext';

function ThemIcon() {
  const {darkMode,setDarkMode} =useContext(ThemeContext);

  const toogleDarkMode =()=>{
    setDarkMode(!darkMode);
  }

  return (
    <button className={`rounded-lg border-1 border-neutral-400 p-2 absolute right-8 xl:right-32 shadow-lg transition duration-300 hover:scale-125
      ${darkMode?"shadow-gray-100":null}
    `}
      onClick={toogleDarkMode}
    >
        <DarkModeIcon className={`h-8 w-8 cursor-pointer stroke-1 
          ${darkMode?"text-yellow-400 stroke-yellow-400":"fill-none stroke-neutral-400"}`
        }/>
    </button>
  )
}

export default ThemIcon