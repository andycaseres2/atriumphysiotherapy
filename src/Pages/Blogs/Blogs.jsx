import React from "react";
import SectionInfo from "../../Components/SectionInfo";
import { Navbar } from "../../Components/Navbar";
import SectionTitle from "../../Components/SectionTitle";
import Footer from "../../Components/Footer";
import { Grid } from "@chakra-ui/react";

import { PostData } from "./PostData";
import { PostItem } from "./PostItem";

const Blogs = () => {
  return (
    <>
      <SectionInfo />
      <Navbar />
      <SectionTitle title="Blogs" />
      <Grid className="section-Blog">
        {PostData.map((post) => (
          <PostItem key={post.id} {...post} />
        ))}
      </Grid>
      <Footer />
    </>
  );
};

export default Blogs;
