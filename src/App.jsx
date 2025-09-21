import React, { useEffect, useState } from "react";
import TableRow from "./components/TableRow";

const App = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
    );
    const json = await response.json();
    setData(json);
    console.log("fetched data");
    setLoading(false);
  };

  useEffect(() => {
    console.log("starting to fetch");
    fetchData();
  }, []);
  console.log(data);

  return (
    <div>
      <h2>CoinGecko Project</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Logo</th>
              <th>Mkt Cap</th>
              <th>Name</th>
              <th>Symbol</th>
              <th>Current Price (USD)</th>
              <th>Market Cap Rank</th>
              <th>Total Volume</th>
              <th>High (24h)</th>
              <th>Low (24h)</th>
              <th>Price Change (24h)</th>
              <th>Price Change % (24h)</th>
              <th>Circulating Supply</th>
              <th>Total Supply</th>
              <th>All-Time High (ATH)</th>
              <th>Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {data.map((coin) => (
              <TableRow key={coin.id} coin={coin} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default App;
