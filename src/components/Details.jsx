import React, { useContext } from 'react';
import Card from './Card';
import ThemeContext from '../context/ThemeContext';

const Details = ({ details }) => {
  const { darkMode } = useContext(ThemeContext);

  const detailsList = {
    name: 'Name',
    country: 'Country',
    currency: 'Currency',
    exchange: 'Exchange',
    ipo: 'IPO Date',
    marketCapitalization: 'Market Capitalization',
    finnhubIndustry: 'Industry',
  };

  const convertMillionToBillion = (number) => {
    return (number / 1000).toFixed(2);
  };

  return (
    <Card
      Children={
        <ul
          className={`w-full h-full flex flex-col justify-between divide-y-1 ${
            darkMode ? 'divide-gray-800' : null
          }`}
        >
          {Object.keys(detailsList).map((item) => {
            console.log(item);
            return (
              <li
                key={item}
                className="flex-1 flex justify-between items-center text-xs text-gray-500 sm:text-sm md:text-base"
              >
                <span>{detailsList[item]}</span>
                <span className="font-bold">
                  {item === 'marketCapitalization'
                    ? `${convertMillionToBillion(details[item])}B`
                    : details[item]}
                </span>
              </li>
            );
          })}
        </ul>
      }
    />
  );
};

export default Details;
