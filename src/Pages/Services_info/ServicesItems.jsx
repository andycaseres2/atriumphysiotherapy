import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import "./servicesitems.css";

export const ServicesItems = () => {
  return (
    <>
      <Grid
        className="services"
        templateColumns="repeat(5, 1fr)"
        gap={6}
        p={100}
      >
        <GridItem className="servicesitems" w="100%" h="100" bg="blue">
          Hola
        </GridItem>
      </Grid>
    </>
  );
};
