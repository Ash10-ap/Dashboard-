import { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import ThemeContext from './context/ThemeContext';
import StockContext from './context/StockContext';
function App() {

  const [darkMode, setDarkMode] = useState(false);
  const [stock,setStock]=useState("TCS");

  return (
    <div className="App">
        <ThemeContext.Provider value ={{darkMode,setDarkMode}} >
          <StockContext.Provider value={{stock,setStock}} >
            <Dashboard/>
          </StockContext.Provider>
          
        </ThemeContext.Provider>
        
    </div>
  );
}

export default App;
