import React from 'react'
import { Input, Stack, Textarea, Text } from '@chakra-ui/react'
import './addblog.css'

export const AddPost = () => {
  return (
    <>
      <Stack
        className="container-addblog"
        width="100%"
        justifyContent="center"
        align="center"
        pb={50}
        pt={50}
      >
        <Text
          bg="#3182CE"
          color="white"
          className="title-addblog"
          fontSize="20px"
        >
          AGREGA TU ARTICULO
        </Text>
        <Input placeholder="Title" />
        <Textarea height={150} placeholder="Description" />
        <Input placeholder="Adjunt image" />
      </Stack>
    </>
  )
}
