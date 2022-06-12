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
            <Image className="staffImage" src={imagestaffhome} alt="Staff Photo" />
          </Box>
          <Stack textAlign="left">
            <Text className="title">ABOUT ATRIUM PHYSIOTHERAPY</Text>
            <Text className="subtitle">
              We proudly provide quality, comprehensive Physiotherapy and
              Massage Therapy and Custom Crafted Orthotics
            </Text>
            <div className="text">
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
            </div>
            
          </Stack>
        </Stack>
<<<<<<< HEAD
        <Stack className="Container">
          <Stack>
=======
        <Stack className="stackContainer">   
>>>>>>> 005768cd7728886c680d06ad2354e3923ee17635
            <Stack textAlign="left">
              {" "}
              <img src="https://cdn-icons.flaticon.com/png/512/2251/premium/2251677.png?token=exp=1654528005~hmac=91d4e519e73e0ae3676c87ee08880393"width={40}/>
              <Text  className="text">
                We integrate customized physiotherapy treatment with injury
                prevention techniques to ensure overall musculoskeletal well
                being
              </Text>
            </Stack>
            <Stack>
            <img src="https://cdn-icons.flaticon.com/png/512/2251/premium/2251677.png?token=exp=1654528005~hmac=91d4e519e73e0ae3676c87ee08880393"width={40}/>
              <Text  className="text">
                Physiotherapy modalities, Low Intensity Laser, deep tissue
                massage, active resistive strengthening techniques,
                proprioceptive rehabilitation and therapeutic exercise are just
                some of the scientifically based solutions we apply to our
                patients during their treatment plan.
              </Text>
            </Stack>      
            <Stack textAlign="left">
            <img src="https://cdn-icons.flaticon.com/png/512/2251/premium/2251677.png?token=exp=1654528005~hmac=91d4e519e73e0ae3676c87ee08880393"width={40}/>
              <Text className="text">
                Our Physiotherapist combine a balanced approach after properly
                diagnosing the problem.
              </Text>
            </Stack>
            <Stack>
            <img src="https://cdn-icons.flaticon.com/png/512/2251/premium/2251677.png?token=exp=1654528005~hmac=91d4e519e73e0ae3676c87ee08880393"width={40}/>
              <Text className="text">
                We believe that in order to maintain a pain free body it is
                necessary to understand a person's specific injury and prevent
                situations that might exacerbate or aggravate a condition.
              </Text>
            </Stack>
        </Stack>
      </Stack>
    </>
  );
};
