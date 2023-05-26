import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

export default function Cards({ coin }) {
  return (
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
          sx={{ objectFit: "scale-down" }}
          image={coin.large}
          alt="coin"
        />
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {coin.symbol}
        </Typography>
        <Typography flexWrap="wrap" variant="h5" component="div">
          {coin.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Market Cap Rank : {coin.market_cap_rank}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
