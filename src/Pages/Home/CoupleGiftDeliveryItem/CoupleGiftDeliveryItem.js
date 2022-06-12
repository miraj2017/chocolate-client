import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

import { Link } from "react-router-dom";

const CoupleGiftDeliveryItem = (props) => {
  const { _id, name, price, img, description, category } = props.delivery;

  return (
    <>
      {category === "couple-gift" && (
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <Card
            sx={{ maxWidth: 345 }}
            style={{
              boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
              padding: "10px",
              cursor: "pointer",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                width: "60%",
                margin: "0 auto",
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={img}
                alt="green iguana"
              />
            </div>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                $ {price}
              </Typography>
              <Typography variant="p">{description}</Typography>
            </CardContent>
            <CardActions>
              <Link to={`/deliveries/${_id}`}>
                <Button>See Details</Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      )}
    </>
  );
};

export default CoupleGiftDeliveryItem;
