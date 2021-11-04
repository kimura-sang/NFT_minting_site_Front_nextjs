import { Flex } from '@chakra-ui/layout'
import Image from 'next/image'

export function Social() {
  return (
    <Flex
      justify="space-around"
      align="center"
      maxWidth={560}
      w="100%"
      mt={5}
      mb={46}
    >
      <Image
        src="/assets/twitter-logo-3x.png"
        width={65}
        height={65}
        alt="twitter"
      />
      <Image
        src="/assets/discord-logo-3x.png"
        width={57.39}
        height={65}
        alt="twitter"
      />
      <Image
        src="/assets/instagram-logo-3x.png"
        width={65}
        height={65}
        alt="twitter"
      />
    </Flex>
  )
}
