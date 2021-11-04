import { Flex } from '@chakra-ui/layout'
import Image from 'next/image'
export function OurMission() {
  return (
    <Flex mt={75} direction="column">
      <Image
        src="/assets/our-mission/our-mission-3x.png"
        width={820}
        height={366}
        alt="our mission"
      />
      <Image
        src="/assets/our-mission/our-partners.svg"
        width={260}
        height={66}
        alt="our partners"
      />
      <Flex justify="space-between" mt={19} mb={35}>
        <Image
          src="/assets/our-mission/for-the-planet.png"
          width={195}
          height={85}
          alt="for the planet"
        />
        <Image
          src="/assets/our-mission/one-tree-planted.png"
          width={329}
          height={85}
          alt="one tree planted"
        />
        <Image
          src="/assets/our-mission/change.png"
          width={287}
          height={85}
          alt="change"
        />
      </Flex>
      <Image
        src="/assets/opensea-logo.svg"
        width={247}
        height={35}
        alt="open sea"
      />
    </Flex>
  )
}
