import React from "react";
import { Stack, Text } from "@chakra-ui/react";

export const Services_Content = (item) => {
  return (
    <Stack>
      <Text>{item.title}</Text>
      <Text>{item.subtitle}</Text>
      <Text>{item.descriptionp1}</Text>
      <Text>{item.descriptionp2}</Text>
      <Text>{item.descriptionp3}</Text>
      <Text>{item.descriptionp4}</Text>
      <Text>{item.descriptionp5}</Text>
      <Text>{item.descriptionp6}</Text>
    </Stack>
  );
};
