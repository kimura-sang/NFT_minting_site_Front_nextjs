import { Box, Flex, Text } from '@chakra-ui/layout'
import Image from 'next/image'
import Link from 'next/link'
import {smoothScroll} from '../Hero/index'

export function WhyWeAreHere() {
  const scrollDown = (e) => {
    e.preventDefault();
    smoothScroll("#scrolldown3")
  }
  return (
    <Flex
      direction="column"
      background={`url('/assets/why/earth.png')`}
      backgroundPosition="top center"
      backgroundRepeat="no-repeat"
      mt="-60px"
      zIndex="0"
      maxWidth={1440}
      width="100%"
    >
      <Flex width="100%" justify="space-between" align="flex-start">
        <a href="#" onClick={scrollDown}>
          <Box mt="150px">
            <Image
              id="scrolldown2"
              src="/assets/hero/scroll-down.png"
              width={88}
              height={137}
              alt="scroll down"
            />
          </Box>
        </a>
        <Box mt={384} position="relative">
          <Image
            src="/assets/why/why-we-are-here.png"
            alt="Why we are here"
            width={938}
            height={902}
          />
          <Flex
            width="100%"
            zIndex={1}
            position="absolute"
            bottom={-210}
            left={-114}
          >
            <Box>
              <Image
                src={`/assets/why/taylor-picture.png`}
                alt="taylor mitchel"
                width={258}
                height={246}
              />
            </Box>
            <Flex direction="column" ml="30px" mt="130px">
              <Text color="#00FFAA" fontSize={34} fontWeight={600}>
                TAYLOR MITCHEL
              </Text>
              <Text fontSize={24} fontWeight={500}>
                Digital Content Creator
                <br />
                Founder of Cosmic Critters
              </Text>
              <Flex mt={4} width={214} justify="space-between">
                <Link href="" passHref>
                  <Image
                    src={`/assets/twitter-logo-3x.png`}
                    alt="twitter"
                    width={54}
                    height={54}
                  />
                </Link>
                <Link href="" passHref>
                  <Image
                    src={`/assets/instagram-logo-3x.png`}
                    alt="instagram"
                    width={54}
                    height={54}
                  />
                </Link>
                <Link href="" passHref>
                  <Image
                    src={`/assets/tiktok-logo-3x.png`}
                    alt="tiktok"
                    width={54}
                    height={54}
                  />
                </Link>
              </Flex>
            </Flex>
          </Flex>
        </Box>
        <a href="#" onClick={scrollDown}>
          <Box mt="150px">
            <Image
              src="/assets/hero/scroll-down.png"
              width={88}
              height={137}
              alt="scroll down"
            />
          </Box>
        </a>
      </Flex>
    </Flex>
  )
}
