import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ShowCoin() {
  const params = useParams();
  const [singleCoinData, setSingleCoinData] = useState()

  const url = `https://api.coingecko.com/api/v3/coins/${params.id}/market_chart?vs_currency=usd&days=7`;

  const getSingleCoinData = async () => {
    const response = await fetch(url).then((response) => response.json());
    setSingleCoinData(response);
  };

  useEffect(() => {
    getSingleCoinData()
  },[])

  return (
    <pre>{JSON.stringify(singleCoinData, null, 2)}</pre>
  )
}
