import React from "react";
import { Image, Stack, Box, Text } from "@chakra-ui/react";
import imagestaffhome from "../../assets/images/homepageStaffPhoto.jpg";

export const AboutHome = () => {
  return (
    <>
      <Stack>
        <Stack>
          <Box>
            <Image width={800} src={imagestaffhome} alt="Dan Abramov" />
          </Box>
          <Stack>
            <Text>ABOUT ATRIUM PHYSIOTHERAPY</Text>
            <Text>
              We proudly provide quality, comprehensive Physiotherapy and
              Massage Therapy and Custom Crafted Orthotics
            </Text>
            <Text>
              Atrium Physiotherapy looks to integrate customized physiotherapy
              treatment with injury prevention techniques to ensure overall
              musculoskeletal well being. Our mission is to treat immediate
              needs while providing a strengthening program that will speed up
              recovery and lead to long term health.
            </Text>
            <Text>
              You are in the right hands, experienced therapists you can trust,
              helping you towards an optimal well being.
            </Text>
          </Stack>
        </Stack>
        <Stack>
          <Stack>
            <Stack>
              {" "}
              //icon
              <Text>
                We integrate customized physiotherapy treatment with injury
                prevention techniques to ensure overall musculoskeletal well
                being
              </Text>
            </Stack>
            <Stack>
              //icon
              <Text>
                Physiotherapy modalities, Low Intensity Laser, deep tissue
                massage, active resistive strengthening techniques,
                proprioceptive rehabilitation and therapeutic exercise are just
                some of the scientifically based solutions we apply to our
                patients during their treatment plan.
              </Text>
            </Stack>
          </Stack>
          <Stack>
            <Stack>
              //icon
              <Text>
                Our Physiotherapist combine a balanced approach after properly
                diagnosing the problem.
              </Text>
            </Stack>
            <Stack>
              //icon
              <Text>
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
