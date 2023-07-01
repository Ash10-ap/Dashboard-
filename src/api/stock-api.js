const baseurl = "https://finnhub.io/api/v1";

// symbole lookup ,search query
export const search = async(query)=>{
    const url = `${baseurl}/search?q=${query}&token=${process.env.REACT_APP_API_KEY}`;
    const res = await fetch(url);
    if(!res.ok){
        const err=`Errror has occured:${res.status}`;
        throw new Error(err);
    }
    return await res.json();
};

// Company Profile 2
// Get general information of a company. You can query by symbol.
export const StockDetails = async (symbol) => {
    const url = `${baseurl}/stock/profile2?symbol=${symbol}&token=${process.env.REACT_APP_API_KEY}`;
      const res = await fetch(url);
      if (!res.ok) {
        const err = `Error has occurred: ${res.status}`;
        throw new Error(err);
      }
      return res.json();
  };

// Quote
// Get real-time quote data for stocks.
export const Quote = async (symbol)=>{
    const url = `${baseurl}/quote?symbol=${symbol}&token=${process.env.REACT_APP_API_KEY}`;
    const res = await fetch(url);
    if (!res.ok) {
      const err = `Error has occurred: ${res.status}`;
      throw new Error(err);
    }
    return res.json();
};

// Stock Candles
// Get candlestick data (OHLCV) for stocks.
export const historicalData = async (symbol,resolution,from,to)=>{
    const url = `${baseurl}/stock/candle?symbol=${symbol}&resolution=${resolution}&from=${from}&to=${to}&token=${process.env.REACT_APP_API_KEY}`;
    const res = await fetch(url);
    if (!res.ok) {
      const err = `Error has occurred: ${res.status}`;
      throw new Error(err);
    }
    return res.json();
}
