import React, { useState,useContext } from 'react'
// import { mockSearchResults } from '../constants/mock';
import SearchIcon from '@mui/icons-material/Search';
import SearchResult from './SearchResult';
import ThemeContext from "../context/ThemeContext";
import { search } from '../api/stock-api';

function Search() {
  // darkmode
  const { darkMode } = useContext(ThemeContext);

    // hadle input
    const [input,setInput]=useState("");
    // update search result 
    const [bestMatches, setBestMatches] = useState([]);

    const updateBestMatches=async()=>{
        try{
          if(input){
            const searchResult=await search(input);
        // Filter out properties with a dot in their symbol
          const filtered = searchResult.result.filter(item=>!item.symbol.includes('.'));
            const result = filtered;
            setBestMatches(result);
          }
        }catch(err){
          setBestMatches([]);
          console.log(err);
        }
    }

    const clear=()=>{
        setInput("");
        setBestMatches([]);
    }

  return (
    <div className={`flex items-center my-4 border-2 rounded-md relative z-50 w-fit
      ${darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-neutral-200"}
    `}>
        {/* input fild for stock search */}
        <input 
        type='text' 
        value={input}
        placeholder="Search stock..."
        onChange={(event) => setInput(event.target.value)}
        onKeyDown={(e) => {
            if (e.key === "Enter") {
              updateBestMatches();
            }
          }}
          className={`w-full px-4 py-2 focus:outline-none rounded-md
            ${darkMode ? "bg-gray-900" : null}
          `}
        />

          {/* clear the input fild "X" cross button */}
        {input && (
            <button onClick={clear} className="m-1">
            <div className="h-4 w-4 fill-gray-500" >
            X
            </div>
            </button>
        )}
        {/* search button */}
        <button
        onClick={updateBestMatches}
        className="h-8 w-8 bg-indigo-600 rounded-md flex justify-center items-center m-1 p-2 transition duration-300 hover:ring-2 ring-indigo-400"
        >
            <SearchIcon className="h-4 w-4 text-white fill-gray-100" />
        </button>

        {/* search result display */}
        {input && bestMatches.length > 0 ? (
        <SearchResult results={bestMatches} />
      ) : null}

    </div>
  )
}

export default Search