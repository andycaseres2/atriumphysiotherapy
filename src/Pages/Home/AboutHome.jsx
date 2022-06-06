import React from "react";
import { Image, Stack, Box, Text } from "@chakra-ui/react";
import imagestaffhome from "../../assets/images/homepageStaffPhoto.jpg";
import "./AboutHome.css"

export const AboutHome = () => {
  return (
    <>
      <Stack pl="150px" pr="150px">
        <Stack>
          <Box>
            <Image width={900} src={imagestaffhome} alt="Dan Abramov" />
          </Box>
          <Stack textAlign="left">
            <Text 
letterSpacing="3px" className="title">ABOUT ATRIUM PHYSIOTHERAPY</Text>
            <Text fontWeight="bold" fontSize="28px" className="titleh2">
              We proudly provide quality, comprehensive Physiotherapy and
              Massage Therapy and Custom Crafted Orthotics
            </Text>
            <Text className="text">
              Atrium Physiotherapy looks to integrate customized physiotherapy
              treatment with injury prevention techniques to ensure overall
              musculoskeletal well being. Our mission is to treat immediate
              needs while providing a strengthening program that will speed up
              recovery and lead to long term health.
            </Text>
            <Text className="text">
              You are in the right hands, experienced therapists you can trust,
              helping you towards an optimal well being.
            </Text>
          </Stack>
        </Stack>
        <Stack>
          <Stack>
            <Stack textAlign="left">
              {" "}
              //icon
              <Text  className="text">
                We integrate customized physiotherapy treatment with injury
                prevention techniques to ensure overall musculoskeletal well
                being
              </Text>
            </Stack>
            <Stack>
              //icon
              <Text  className="text">
                Physiotherapy modalities, Low Intensity Laser, deep tissue
                massage, active resistive strengthening techniques,
                proprioceptive rehabilitation and therapeutic exercise are just
                some of the scientifically based solutions we apply to our
                patients during their treatment plan.
              </Text>
            </Stack>
          </Stack>
          <Stack>
            <Stack textAlign="left">
              //icon
              <Text className="text">
                Our Physiotherapist combine a balanced approach after properly
                diagnosing the problem.
              </Text>
            </Stack>
            <Stack>
              //icon
              <Text className="text">
                We believe that in order to maintain a pain free body it is
                necessary to understand a person's specific injury and prevent
                situations that might exacerbate or aggravate a condition.
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};
