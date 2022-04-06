import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const StaffCards = ({ name, info, image, load }) => {
  return (
    <div className="staffcards">
      StaffCards
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <h2>{name}</h2>
            </Typography>
            <Typography gutterBottom variant="h3" component="div">
              <h2>{load}</h2>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <p>{info}</p>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Read more...
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default StaffCards;
