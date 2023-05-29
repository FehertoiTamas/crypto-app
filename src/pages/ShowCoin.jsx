import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingAnimation from "../components/LoadingAnimation";
import "../styles/ShowCoin.css";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Chart from "../components/Chart";
import { Box, Paper, Typography } from "@mui/material";

export default function ShowCoin() {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [graphData, setGraphData] = useState();
  const [period, setPeriod] = useState(7);
  const [marketDatas, setMarketDatas] = useState({});

  const url = `https://api.coingecko.com/api/v3/coins/${params.id}/market_chart?vs_currency=usd&days=${period}`;
  const coinUrl = `https://api.coingecko.com/api/v3/coins/${params.id}?localization=false&market_data=true`;

  const fetchData = async () => {
    const [coinData, marketData] = await Promise.all([
      fetch(url).then((response) => response.json()),
      fetch(coinUrl).then((response) => response.json()),
    ]);

    const formattedData = coinData.prices.map(([timestamp, price]) => ({
      Date: new Date(timestamp).toLocaleDateString("hu"),
      Price: price,
    }));

    setGraphData(formattedData);
    setMarketDatas(marketData);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [params.id, period]);

  // Toggle bottoms

  const handleChange = (event, newAlignment) => {
    setPeriod(newAlignment);
  };
  console.log(marketDatas)

  return (
    <>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <div className="show-body">
            <Paper sx={{ display: "block" }} variant="outlined">                    {/*itt tartok !!!!!!!!*/}
              <img src={marketDatas.image.small} alt="symbol" />
            </Paper>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h4">
              {marketDatas.name} <span>({marketDatas.symbol})</span>
            </Typography>
            <Typography variant="h6">
              <span>Current price : </span>{marketDatas.market_data.current_price.usd}
            </Typography>
            <Typography variant="subtitle1">
              <span>24h high : </span>{marketDatas.market_data.high_24h.usd}
            </Typography>
            <Typography variant="subtitle1">
              <span>24h low : </span>{marketDatas.market_data.low_24h.usd}
            </Typography>
          </Box>

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
          <Chart graphData={graphData} />
        </div>
      )}
    </>
  );
}
