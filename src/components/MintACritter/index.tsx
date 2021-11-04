import { Flex, Box, Text } from '@chakra-ui/layout'
import { GalleryItem, GalleryList } from '../Gallery/GalleryList'
import Image from 'next/image'
import React, { useState } from 'react';
import CustomArrows from '../Gallery/Keen'
import {pods, critters} from "../Data/items"

// const pods: GalleryItem[] = [
//   { image: '/assets/pods/pod-1.png', title: 'Image 1' },
// ]
// const critters: GalleryItem[] = [
//   { image: '/assets/critters/critter-1.png', title: 'Image 1' }
// ]

export function MintACritter() {
  const [slider1, setSlider1] = useState(0);
  const [slider2, setSlider2] = useState(0);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    swipeToSlide: true,
    focusOnSelect: true,
  }
  return (
    <Flex direction="row" align="flex-start" justify="center"  mt={50} maxWidth="100%" px="90px">
      {/* <GalleryList items={pods} size="lg" /> */}
      <CustomArrows items={pods} settingsFrom={settings} size="lg" width="18%" otherSlider = {slider2} setSlider={setSlider1}/>

      <Flex direction="column" justify="center" align="center" minWidth="200px" mx="50px">
        <Text fontSize={28} fontWeight={500} textAlign="center">
          Mint a Critter
          <br />
          <Box as="span" fontSize={46} fontWeight={500} lineHeight="33px">
            NOW
          </Box>
        </Text>

        <Image
          src="/assets/mint-a-critter/connect-your-wallet-3x.png"
          alt="connect your wallet"
          width={307}
          height={230}
        />
        <Text fontSize={22} fontWeight={500}>
          AND JOIN THE{' '}
        </Text>
        <Text fontSize={20} fontWeight={500} color="#FFE700">
          COMMUNITY!
        </Text>
      </Flex>

      {/* <GalleryList items={critters} size="lg" showTransparentPod /> */}
      <CustomArrows items={critters} settingsFrom={settings} size="lg" width="18%" otherSlider = {slider1} setSlider={setSlider2} showTransparentPod={true}/>
    </Flex>
  )
}
