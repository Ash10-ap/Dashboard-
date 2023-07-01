import React, { useContext, useEffect, useState } from 'react'
import Search from './Search'
import Details from './Details'
import Overview from './Overview'
import ThemIcon from './ThemIcon'
import Chart from './Chart'
import ThemeContext from '../context/ThemeContext'
import StockContext from '../context/StockContext.jsx'
import { Quote, StockDetails } from '../api/stock-api.js'

function Dashboard() {

    const { darkMode } = useContext(ThemeContext);
    const {stock}=useContext(StockContext);

    // update the stock value
    const [stockDetails,setStockDetails]=useState({});
    const [quote,setQuote]=useState({});

    useEffect(()=>{
        const updateStockDetails=async()=>{
            try{
                const res = await StockDetails(stock);
                setStockDetails(res);
            }catch(err){
                setStockDetails({});
                console.log(err);
            }
        }

        const updateStockOverview=async()=>{
            try{
                const res = await Quote(stock);
                setQuote(res);
            }catch(err){
                setQuote({});
                console.log(err);
            }
        }
        updateStockDetails();
        updateStockOverview();
    },[stock])

  return (
    <>
            <div className={`flex-col flex justify-start text-left pl-5 pr-5 pt-5
                     ${darkMode ? "bg-gray-900 text-gray-300" : "bg-neutral-100"}
            `}>
                <h1 className="flex flex-wrap float-left text-4xl sm:text-5xl w-[80%]">{stockDetails.name}</h1>
                <Search/>
                <ThemIcon/>
            </div>
        <div
        className={`h-screen grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 
                    xl:grid-rows-5 auto-rows-fr gap-6 p-5 font-quicksand 
                    ${darkMode ? "bg-gray-900 text-gray-300" : "bg-neutral-100"}
                  `}
        >
            <div className="md:col-span-2 row-span-4">
                {/* <Card>header</Card> */}
                <Chart />
            </div>
            <div>
                <Overview
                symbol={stock}
                price={quote.pc}
                change={quote.d}
                changePercent={quote.dp}
                currency={stockDetails.currency}
                />
            </div>
            <div className="row-span-4 xl:row-span-4">
                <Details details={stockDetails} />
            </div>
    </div>
    </>
  )
}

export default Dashboard