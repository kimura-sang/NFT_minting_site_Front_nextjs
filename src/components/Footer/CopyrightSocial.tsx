import { Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'

export function CopyrightSocial() {
  return (
    <Flex
      direction="column"
      align="flex-start"
      justify="space-between"
      maxWidth={520}
      width="100%"
    >
      <Image
        src="/assets/footer/logo-footer.svg"
        alt="logo"
        width={390}
        height={34}
      />

      <Text>
        Copyright © Cosmic Critters
        <br /> and Metaverse Labs Inc.
        <br />
        All rights reserved
      </Text>

      <Flex width={197} justify="space-between">
        <Image
          src="/assets/footer/twitter-footer.svg"
          alt="twitter"
          width={38}
          height={38}
        />
        <Image
          src="/assets/footer/discord-footer.svg"
          width={38}
          height={38}
          alt="discord"
        />
        <Image
          src="/assets/footer/instagram-footer.svg"
          width={38}
          height={38}
          alt="instagram"
        />
      </Flex>
    </Flex>
  )
}
