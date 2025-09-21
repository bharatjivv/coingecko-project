// TableRow.jsx
import React from "react";

const TableRow = ({ coin }) => {
  return (
    <tr>
      <td><img src={coin.image} alt={coin.name} width="30" /></td>
      <td>{coin.market_cap_rank}</td>
      <td>{coin.name}</td>
      <td>{coin.symbol.toUpperCase()}</td>
      <td>${coin.current_price.toLocaleString()}</td>
      <td>${coin.market_cap.toLocaleString()}</td>
      <td>{coin.total_volume.toLocaleString()}</td>
      <td>{coin.high_24h}</td>
      <td>{coin.low_24h}</td>
      <td>{coin.price_change_24h.toFixed(2)}</td>
      <td>{coin.price_change_percentage_24h.toFixed(2)}%</td>
      <td>{coin.circulating_supply.toLocaleString()}</td>
      <td>{coin.total_supply?.toLocaleString() || "N/A"}</td>
      <td>${coin.ath.toLocaleString()}</td>
      
      <td>{coin.last_updated}</td>
    </tr>
  );
};


export default TableRow;
