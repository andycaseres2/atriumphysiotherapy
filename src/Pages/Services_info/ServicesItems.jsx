import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import "./servicesitems.css";

export const ServicesItems = (item , setCurrent) => {
  return (
      <Grid onClick={() => setCurrent(item.id)}
        className="services"
        templateRows='repeat(1, 1fr)'>
        <GridItem className="servicesitems" w="100%" h="100" bg="blue">
         <h4>{item.title}</h4>
        </GridItem>
      </Grid>
  );
};
