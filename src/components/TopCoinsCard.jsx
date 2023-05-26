import "../styles/TopCoinsCard.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";

export default function TopCoinsCard({ coin }) {
  return (
    <>
      <Link
        style={{ textDecoration: "none" }}
        to={`/SingleCoin/${coin.item.id}`}
      >
        <Card key={coin.id} sx={{ Width: 300, Height: 400 }}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardMedia
              component="img"
              height="194"
              sx={{ objectFit: "contain" }}
              image={coin.item.large}
              alt="coin"
            />
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {coin.item.symbol}
            </Typography>
            <Typography flexWrap="wrap" variant="h5" component="div">
              {coin.item.name}
            </Typography>
            <Typography flexWrap="wrap" variant="h5" component="div">
              {coin.item.price_btc}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Market Cap Rank : {coin.item.market_cap_rank}
            </Typography>
          </CardContent>
          <CardActions sx={{ display: "flex", justifyContent: "center" }}>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Link>
    </>
  );
}
