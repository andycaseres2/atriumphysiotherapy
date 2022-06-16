import React from "react";
import { Input, Stack, Textarea, Text } from "@chakra-ui/react";
import "./addblog.css";

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
          Add your Article
        </Text>
        <Input placeholder="Title" />
        <Textarea height={150} placeholder="Description" />
        <Input className="file" type="file" placeholder="Adjunt image" />
        <Input type="submit" value="Send" w={200} className="btn-addblogs" />
      </Stack>
    </>
  );
};
