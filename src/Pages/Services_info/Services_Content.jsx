import React from 'react'
import { Stack, Text, Image, Box } from '@chakra-ui/react'

export const Services_Content = (item) => {
  return (
    <Stack mt={80}>
      <Box
        textAlign="left"
        fontSize={18}
        pl={150}
        pr={150}
        color="gray"
        justifyContent="justify"
      >
        <Text
          color="black"
          textAlign="left"
          letterSpacing={2}
          fontSize={25}
          fontWeight="bold"
        >
          {item.title}
        </Text>
        <Text>{item.description}</Text>
      </Box>
      <Box>
        <Image mb={50} boxSize="450px" src={item.image} alt="Image" />
      </Box>
      {/* <Box pl={150} pr={150} mt={60}>
        <Text
          textAlign="left"
          fontSize={30}
          letterSpacing={2}
          fontWeight="bold"
        >
          {item.subtitle}
        </Text>
        <Text textAlign="left" fontSize={18} color="gray" letterSpacing={1}>
          {item.descriptionp7}
        </Text>
      </Box> */}
    </Stack>
  )
}
