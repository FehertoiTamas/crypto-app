import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import Cards from "./Cards";

function InputField() {
  const [query, setQuery] = useState("");
  const [searchedCoinsData, setSearchedCoinsData] = useState([]);

  const url = `https://api.coingecko.com/api/v3/search?query=${query}`;

  const getApiData = async () => {
    const response = await fetch(url).then((response) => response.json());
    setSearchedCoinsData(response.coins);
  };

  useEffect(() => {
    if (query) {
      const timeout = setTimeout(() => {
        getApiData();
      }, 600);
      return () => clearTimeout(timeout);
    }
  }, [query]);

  //console.log({ searchedCoinsData });

  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <TextField
          id="outlined-basic"
          label="search crypto"
          variant="outlined"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
          }}
        />
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center" flexWrap="wrap" gap={10}>
        {!query
          ? null
          : searchedCoinsData &&
            searchedCoinsData.map((coin) => <Cards key={coin.id} coin={coin} />)}
      </Box>
    </>
  );
}

export default InputField;
