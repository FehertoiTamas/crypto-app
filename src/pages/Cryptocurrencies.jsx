import { useEffect, useState } from "react";
import LoadingAnimation from "../components/LoadingAnimation";
import TopCoinsCard from "../components/TopCoinsCard";
import InputField from "../components/InputField";
import Box from "@mui/material/Box";

function Cryptocurrencies() {
  const [topCoinsData, setTopCoinsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const url = "https://api.coingecko.com/api/v3/search/trending";

  const getApiData = async () => {
    const response = await fetch(url).then((response) => response.json());
    setTopCoinsData(response.coins);
  };

  useEffect(() => {
    getApiData();
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <>
          <InputField />
          <Box display="flex" justifyContent="center" alignItems="center" flexWrap="wrap" gap={10}>
            {topCoinsData.map((coin) => (
              <TopCoinsCard key={coin.item.coin_id} coin={coin} />
            ))}
          </Box>
        </>
      )}
    </>
  );
}

export default Cryptocurrencies;
