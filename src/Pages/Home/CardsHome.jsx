import { Box, Stack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import './cardshome.css'

const infoCards = [
  {
    class: 'card1',
    icon: 'http://cdn.onlinewebfonts.com/svg/img_491471.png',
    title: 'Qualified',
    description:
      'Our physiotherapists and other service providers are committed to excellence. Providing the highest standards of care. Top-notch customer service and treatment approach that is evidence based and proven to be successful.',
  },
  {
    class: 'card2',
    icon: '',
    title: 'Extensive',
    description:
      'With over 20 years of combined experience we have extensive knowledge in many areas of physical and mental health.',
  },
  {
    class: 'card3',
    icon: '',
    title: 'Leading Technology',
    description:
      'Our staff uses leading technology to diagnose patient issues and concerns. Allowing for agile treatment techniques',
  },
  {
    class: 'card4',
    icon: '',
    title: 'Direct Billing',
    description:
      'We provide direct billing to various public and private insurance providers in addition to all MVA and WCB Claims.',
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
                    borderRadius={999}
                    width="50px"
                    src={card.icon} className="cardIcon"
                    alt="Dan Abramov"
                  />
                </Box>
                <Box display="flex" flexDirection="column">
                  <Text
                    m={5}
                    letterSpacing={2}
                    fontSize="25px"
                    fontWeight="bold"
                  >
                    {card.title}
                  </Text>
                  <Text m={0} padding={25} letterSpacing="2px">
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
