import { Flex, HStack, Box } from '@chakra-ui/layout'
import Image from 'next/image'
import { GalleryItem, GalleryItemProps, GalleryItemSize } from './GalleryItem'

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

// export default (props) => {
//   const [sliderRef] = useKeenSlider({
//     spacing: 10,
//     slidesPerView: 1,
//     centered: true,
//     loop: true,
//     mode: "snap",
//     breakpoints: {
//       "(min-width: 768px)": {
//         slidesPerView: 2,
//         mode: "free-snap",
//       },
//       "(min-width: 1200px)": {
//         slidesPerView: 3,
//         mode: "free-snap",
//       },
//     },
//   })

export type GalleryItem = Omit<GalleryItemProps, 'size'>

interface GalleryListProps {
  items: GalleryItem[]
  size?: GalleryItemSize
  showTransparentPod?: boolean
}
export function GalleryList({
  items,
  size = 'sm',
  showTransparentPod = false
}: GalleryListProps) {
  
  return (
    <Flex
      width="fit-content"
      justify="space-between"
      align="center"
      position="relative"
    >
      <Box mr={34}>
        <Image
          src="/assets/gallery/arrow-left.svg"
          width={30}
          height={40}
          alt="arrow left"
        />
      </Box>
      <HStack spacing={30} align="center" justify="space-between">
      {/* <div ref={sliderRef} className="keen-slider"> */}
        {items.map((item) => (
          <GalleryItem key={item.image} size={size} {...item} />
        ))}
      {/* </div> */}
      </HStack>

      <Box ml={34}>
        <Image
          src="/assets/gallery/arrow-right.svg"
          width={30}
          height={40}
          alt="arrow right"
        />
      </Box>
      {showTransparentPod && (
        <Box
          position="absolute"
          left="50%"
          transform="translateX(-50%)"
          width={392}
          height={533}
        >
          <Image
            src="/assets/pods/transparent-pod.png"
            alt="transparent pod"
            width={392}
            height={533}
          />
        </Box>
      )}
    </Flex>
  )
}
