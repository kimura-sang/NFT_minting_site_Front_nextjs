import React, { useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/layout'
import { GalleryList } from './GalleryList'
import { ArrowDown } from './ArrowDown'
import { GalleryItem } from './GalleryList'
import CustomArrows from './Keen'
import Slider from "react-slick";
import {pods, critters} from "../Data/items"

import { builder, BuilderComponent } from '@builder.io/react'

builder.init('5262c0e188e94332ac80e2c41d19b5d9')

const MyCarosel = () => (
  <BuilderComponent
    model="page"
          entry="52b2bf582d9f4eee9dec421f40efed6f" />
)

// const pods: GalleryItem[] = [
//   { image: '/assets/pods/pod-1.png', title: 'Image 1' },
//   { image: '/assets/pods/pod-2.png', title: 'Image 2' },
//   { image: '/assets/pods/pod-3.png', title: 'Image 3' },
//   { image: '/assets/pods/pod-4.png', title: 'Image 4' },
//   { image: '/assets/pods/pod-5.png', title: 'Image 5' },
//   { image: '/assets/pods/pod-6.png', title: 'Image 6' },
//   { image: '/assets/pods/pod-7.png', title: 'Image 7' },
//   { image: '/assets/pods/pod-8.png', title: 'Image 8' },
//   { image: '/assets/pods/pod-9.png', title: 'Image 9' }
// ]

// const critters: GalleryItem[] = [
//   { image: '/assets/critters/critter-1.png', title: 'Image 1' },
//   { image: '/assets/critters/critter-2.png', title: 'Image 2' },
//   { image: '/assets/critters/critter-3.png', title: 'Image 3' },
//   { image: '/assets/critters/critter-4.png', title: 'Image 4' },
//   { image: '/assets/critters/critter-5.png', title: 'Image 5' },
//   { image: '/assets/critters/critter-6.png', title: 'Image 6' },
//   { image: '/assets/critters/critter-7.png', title: 'Image 7' },
//   { image: '/assets/critters/critter-8.png', title: 'Image 8' },
//   { image: '/assets/critters/critter-9.png', title: 'Image 9' }
// ]

export function Galery() {
  const [slider1, setSlider1] = useState(0);
  const [slider2, setSlider2] = useState(0);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    // cssEase: "linear",
    pauseOnHover: true,
    swipeToSlide: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    arrows: false,
    draggable: false,
    swipe: false,
    nextArrow: null,
    prevArrow: null
  }
  
  return (
    <Flex
      direction="column"
      maxWidth={1150}
      width="100%"
      justify="space-between"
      align="center"
      mt={57}
      id="gallery"
    >
      <CustomArrows items={pods} settingsFrom={settings} width="90%" otherSlider={slider2} setSlider={setSlider1}/>
      {/* <GalleryList size="sm" items={pods} /> */}
      <Text fontSize={28} fontWeight={500} m={25}>
        IT{' '}
        <Box
          as="span"
          color=" #FFE700;
"
        >
          BEGING
        </Box>{' '}
        WITH A{' '}
        <Box
          as="span"
          color=" #FFE700;
"
        >
          POD
        </Box>
      </Text>
      <div style={{width: "90%"}}>
      <Slider {...settings}>
        {[0, 1, 2, 3, 4, 5].map((item) => (
          <ArrowDown key={item}/>
        ))}
      </Slider>
      </div>
      {/* <Flex maxWidth={1028} width="100%" justify="space-between">
        <ArrowDown />
        <ArrowDown />
        <ArrowDown />
        <ArrowDown />
        <ArrowDown />
        <ArrowDown />
      </Flex> */}
      <Text fontSize={28} fontWeight={500} m={25}>
        AND{' '}
        <Box
          as="span"
          color=" #FFE700;
"
        >
          EVOLVES
        </Box>{' '}
        INTO SOMETHING{' '}
        <Box
          as="span"
          color=" #FFE700;
"
        >
          OUT OF THIS WORLD
        </Box>
      </Text>
      <CustomArrows items={critters} settingsFrom={settings} width="90%" otherSlider = {slider1} setSlider={setSlider2}/>
      {/* <GalleryList size="sm" items={critters} /> */}
    </Flex>
  )
}
