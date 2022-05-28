import { Box, Stack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import './cardshome.css'

const infoCards = [
  {
    class: 'card1',
    icon: 'https://cdn-icons-png.flaticon.com/512/3209/3209080.png',
    title: 'Qualified Professionals',
    description:
      'Top-notch customer service and treatment approach that is evidence based and proven to be successful'
    },
  {
    class: 'card2',
    icon: 'https://cdn-icons.flaticon.com/png/512/2961/premium/2961342.png?token=exp=1653754938~hmac=28828a0730b21fcf8bacb3ceadcfef55',
    title: 'Extensive Experience',
    description:
      'Over 20 years of combined experience, and extensive knowledge in many areas of physical and mental health',
  },
  {
    class: 'card3',
    icon: 'https://cdn-icons-png.flaticon.com/512/3953/3953604.png',
    title: 'Leading Technology',
    description:
      'Agile treatment techniques led by advanced technology to diagnose patient issues and concerns',
  },
  {
    class: 'card4',
    icon: 'https://cdn-icons.flaticon.com/png/512/4494/premium/4494193.png?token=exp=1653755185~hmac=b1012dcb1adfe8f42fc208d00f0cec92',
    title: 'Direct Billing', //look for ways to have the word "billing in a seperate line"
    description:
      'Direct billing to various public and private insurance providers in addition to all MVA and WCB Claims',
  },
]

export const CardsHome = () => {
  return (
    <>
      <Stack
        className="cardshome"
        height="90vh"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        p={0}
      >
        {infoCards.map((card) => (
          <Stack flexDirection="row" color="white">
            <Stack padding={10}>
              <Box
                className={card.class}
                borderRadius={10}
                width="220px"
                height="400px"
                padding={10}
                pb={30}
              >
                <Box boxSize="sm" paddingTop={10}>
                  <Image
                    borderRadius={10}
                    width="50px"
                    src={card.icon} className="cardIcon"
                    alt="We have..."
                  />
                </Box>
                <Box display="flex" flexDirection="column">
                  <Text
                    m={5}
                    letterSpacing={2}
                    fontSize="25px"
                    fontFamily="Roboto"
                    fontWeight="semibold"
                  >
                    {card.title}
                  </Text>
                  <Text 
                  m={0} 
                  padding={25} 
                  letterSpacing="2px"
                  lineHeight={1.4}
                  fontFamily="Roboto"
                  fontWeight={500}
                  >
                    {card.description}
                  </Text>
                </Box>
              </Box>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </>
  )
}

export const HomeContent = () => {
  return (
    <div>
    <section className='homeSection'>
    <img src="../../assets/images/homepageStaffPhoto.jpg" alt="Atrium Staff" />
    <h1>About Atrium Physiotherapy</h1>
    <h2>We proudly provide quality, comprehensive Physiotherapy and Massage Therapy and Custom Crafted Orthotics</h2>
    <p>
      Atrium Physiotherapy looks to integrate customized physiotherapy treatment with injury prevention techniques to ensure overall musculoskeletal well being. Our mission is to treat immediate needs while providing a strengthening program that will speed up recovery and lead to long term health.
    </p>
    <p>
    You are in the right hands, experienced therapists you can trust, helping you towards an optimal well being.
    </p>
    <div>
    <div>
      <img src="https://cdn-icons-png.flaticon.com/512/1721/1721092.png" alt="" />
      <p>
We integrate customized physiotherapy treatment with injury prevention techniques to ensure overall musculoskeletal well being
      </p>
    </div>
    <div>
      <img src="https://cdn-icons-png.flaticon.com/512/1721/1721092.png" alt="" />
      <p>
      Our Physiotherapist combine a balanced approach after properly diagnosing the problem.
      </p>
    </div>
    <div>
      <img src="https://cdn-icons-png.flaticon.com/512/1721/1721092.png" alt="" />
      <p>
      Physiotherapy modalities, Low Intensity Laser, deep tissue massage, active resistive strengthening techniques, proprioceptive rehabilitation and therapeutic exercise are just some of the scientifically based solutions we apply to our patients during their treatment plan.
      </p>
    </div>
    <div>
      <img src="https://cdn-icons-png.flaticon.com/512/1721/1721092.png" alt="" />
      <p>
      We believe that in order to maintain a pain free body it is necessary to understand a person's specific injury and prevent situations that might exacerbate or aggravate a condition.
      </p>
    </div>
    <p>
      At Atrium Physiotherapy we strive to educate our patients about their condition and collaborate in developing a realistic treatment plan. Our teams of Physiotherapists and Massage Therapist have exceptional credentials and some 20 years of experience with handling all types of musculoskeletal , and neurological issues.
    </p>
    </div>
    </section>
    </div>
  )
}
