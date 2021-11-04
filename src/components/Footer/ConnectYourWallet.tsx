import { Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/Button'

export function ConnectYourWallet() {
  return (
    <Flex
      direction="column"
      justify="space-between"
      align="center"
      maxWidth={320}
      width="100%"
    >
      <Text id="scrolldown3" fontWeight={500} fontSize={24} textAlign="center">
        Mint a Critter NOW
      </Text>
      <Link href="/" passHref>
        <Button width={278} height={49} fontSize={24} onClick={() => false}>
          Connect Your Wallet
        </Button>
      </Link>
      <Text fontWeight={500} fontSize={22} textAlign="center">
        AND JOIN THE
        <Text color="#FFE700">COMMUNITY!</Text>
      </Text>
      <Image
        src="/assets/opensea-logo.svg"
        alt="open sea"
        width={182}
        height={42}
      />
    </Flex>
  )
}
