import { Flex } from '@chakra-ui/react'
import Image from 'next/image'

export function ArrowDown() {
  return (
    <Flex align="center" justify="center" width={145}  style={{margin: "auto", padding: "2%", position: "relative", textAlign: "center"}}>
      <Image
        src="/assets/gallery/arrow-down-gallery.svg"
        alt="arrow down"
        width={26}
        height={40}
      />
    </Flex>
  )
}
