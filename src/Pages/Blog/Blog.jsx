import React from "react";
import SectionInfo from "../../Components/SectionInfo";
import { Navbar } from "../../Components/Navbar";
import SectionTitle from "../../Components/SectionTitle";
import Footer from "../../Components/Footer";
import { Grid } from "@chakra-ui/react";
import { AddPost } from "./AddPost";
import { PostData } from "./Blogdata";
import { PostItem } from "./PostItem";
import { SideBarRight } from "./SideBarRight";
import "./blogs.css";

export default function Blog() {
  return (
    <>
      <SectionInfo />
      <Navbar />
      <SectionTitle title="Blogs" />
      <div className="container-blogs">
        <Grid className="section-Blog">
          {PostData.map((post) => (
            <PostItem key={post.id} {...post} />
          ))}
        </Grid>
        <SideBarRight />
      </div>
      <AddPost />
      <Footer />
    </>
  );
};


