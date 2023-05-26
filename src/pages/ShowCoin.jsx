import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import LoadingAnimation from "../components/LoadingAnimation";
import "../styles/ShowCoin.css";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function ShowCoin() {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [graphData, setGraphData] = useState();
  const [period, setPeriod] = useState();

  const url = `https://api.coingecko.com/api/v3/coins/${params.id}/market_chart?vs_currency=usd&days=${period}`;

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
    setIsLoading(false);
  }, [params.id, period]);

  // Toggle bottoms

  const handleChange = (event, newAlignment) => {
    setPeriod(newAlignment);
  };

  return (
    <>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <div className="show-body">
          <ToggleButtonGroup
            color="primary"
            value={period}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
          >
            <ToggleButton value="365">Year</ToggleButton>
            <ToggleButton value="31">Months</ToggleButton>
            <ToggleButton value="7">Week</ToggleButton>
            <ToggleButton value="1">Day</ToggleButton>
          </ToggleButtonGroup>
          <ResponsiveContainer width="50%" height="50%">
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
              <Area
                type="monotone"
                dataKey="Price"
                stroke="#8884d8"
                fill="#8884d8"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}
    </>
  );
}
