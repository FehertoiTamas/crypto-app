import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export default function ShowCoin() {
  const params = useParams();
  const [graphData, setGraphData] = useState();

  const url = `https://api.coingecko.com/api/v3/coins/${params.id}/market_chart?vs_currency=usd&days=365`;

  const getSingleCoinData = async () => {
    const response = await fetch(url).then((response) => response.json());
    const formattedData = response.prices.map(([timestamp, price]) => ({
      Date: new Date(timestamp).toLocaleDateString("hu"),
      Price: price,
    }));
    setGraphData(formattedData);
  };

  useEffect(() => {
    getSingleCoinData();
  }, []);

  return (
    <>
      <AreaChart
        width={500}
        height={400}
        data={graphData}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Date" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="Price" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </>
  );
}
