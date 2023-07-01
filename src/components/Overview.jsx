import React from 'react';
import Card from './Card';

const Overview = ({ symbol, price, change, changePercent, currency }) => {
  return (
    <Card
      Children={
        <>
          <span className="absolute left-4 top-4 text-neutral-400 text-sm">
            {symbol}
          </span>
          <div className="w-full h-full flex items-center justify-around">
            <span className="text-xl xl:text-2xl 2xl:text-4xl flex items-center">
              ${price}
              <span className="text-lg xl:text-base 2xl:text-xl text-neutral-400 m-2">
                {currency}
              </span>
            </span>
            <span
              className={`text-sm xl:text-base 2xl:text-xl ${
                change > 0 ? 'text-lime-500' : 'text-red-500'
              }`}
            >
              {change} <span>({changePercent}%)</span>
            </span>
          </div>
        </>
      }
    />
  );
};

export default Overview;
