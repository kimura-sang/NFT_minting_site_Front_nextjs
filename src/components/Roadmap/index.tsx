import { Box, Flex } from '@chakra-ui/layout'
import Image from 'next/image'
import {smoothScroll} from '../Hero/index'

export function Roadmap() {
  const scrollDown = (e) => {
    e.preventDefault();
    smoothScroll("#scrolldown2")
  }
  return (
    <Flex id="roadmap" direction="column" align="center" width="100%" mt={62}>
      <Flex
        justify="space-between"
        maxWidth={1440}
        width="100%"
        align="flex-start"
      >
        <a href="#" onClick={scrollDown}>
          <Image
            id="scrolldown1"
            src="/assets/hero/scroll-down.png"
            width={88}
            height={137}
            alt="scroll down"
          />
        </a>
        <Flex direction="column" align="center" width="100%">
          <Box position="absolute">
            <Image
              src="/assets/roadmap/galaxy.png"
              alt="Roadmap"
              width={957}
              height={773}
            />
          </Box>
          <Box mt={51}>
            <Image
              src="/assets/roadmap/roadmap.svg"
              alt="Roadmap"
              width={452}
              height={183}
            />
          </Box>
        </Flex>
        <a href="#" onClick={scrollDown}>
          <Image
            src="/assets/hero/scroll-down.png"
            width={88}
            height={137}
            alt="scroll down"
          />
        </a>
      </Flex>

      <Flex
        flex={1}
        mt={250}
        width="100%"
        justify="center"
        align="center"
        position="relative"
        zIndex="2"
      >
        <Box position="absolute" left="0">
          <Image
            src="/assets/roadmap/pods-left.png"
            alt="Phases"
            width={112}
            height={1272}
          />
        </Box>
        <Box>
          <Image
            src="/assets/roadmap/phases-roadmap.png"
            alt="Phases"
            width={1231}
            height={1382}
          />
        </Box>
        <Box position="absolute" right={0}>
          <Image
            src="/assets/roadmap/pods-right.png"
            alt="Phases"
            width={102}
            height={705}
          />
        </Box>
      </Flex>
    </Flex>
  )
}
