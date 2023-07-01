export const mockSearchResults={
    "count": 4,
    "result": [
      {
        "description": "APPLE INC",
        "displaySymbol": "AAPL",
        "symbol": "AAPL",
        "type": "Common Stock"
      },
      {
        "description": "APPLE INC",
        "displaySymbol": "AAPL.SW",
        "symbol": "AAPL.SW",
        "type": "Common Stock"
      },
      {
        "description": "APPLE INC",
        "displaySymbol": "APC.BE",
        "symbol": "APC.BE",
        "type": "Common Stock"
      },
      {
        "description": "APPLE INC",
        "displaySymbol": "APC.DE",
        "symbol": "APC.DE",
        "type": "Common Stock"
      }
    ]
  }

  export const mockCompayDetails ={
    "country": "US",
    "currency": "USD",
    "exchange": "NASDAQ/NMS (GLOBAL MARKET)",
    "ipo": "1980-12-12",
    "marketCapitalization": 1415993,
    "name": "Apple Inc",
    "phone": "14089961010",
    "shareOutstanding": 4375.47998046875,
    "ticker": "AAPL",
    "weburl": "https://www.apple.com/",
    "logo": "https://static.finnhub.io/logo/87cb30d8-80df-11ea-8951-00000000092a.png",
    "finnhubIndustry":"Technology"
  }

  
  export const mockStockQuote ={
    "c": 261.74,      //c: List of close prices for returned candles.
    "h": 263.31,      //h: List of high prices for returned candles.
    "l": 260.68,      //l: List of low prices for returned candles.
    "o": 261.07,      //o: List of open prices for returned candles.
    "pc": 259.45,     //pc: Previous close price
    "t": 1582641000   //t: List of timestamp for returned candles.
  }

  // s: Status of the response. This field can either be ok or no_data.
  // v: List of volume data for returned candles.

  export const mockHistoricalData={
    "c": [
      217.68,
      221.03,
      219.89
    ],
    "h": [
      222.49,
      221.5,
      220.94
    ],
    "l": [
      217.19,
      217.1402,
      218.83
    ],
    "o": [
      221.03,
      218.55,
      220
    ],
    "s": "ok",
    "t": [
      1569297600,
      1569384000,
      1569470400
    ],
    "v": [
      33463820,
      24018876,
      20730608
    ]
  }
