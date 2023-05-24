import { useEffect, useState } from "react";
import LoadingAnimation from "../components/LoadingAnimation";
import TopCoinsCard from "../components/TopCoinsCard";

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

  console.log(topCoinsData)

  return (
    <>
    {isLoading ? <LoadingAnimation /> : topCoinsData.map((coin) => (
      <TopCoinsCard key={coin.item.coin_id} coin={coin} />
    ))}
    
    </>
  );
}

export default Cryptocurrencies;
