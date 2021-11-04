import { Flex } from '@chakra-ui/react'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Galery } from '@/components/Gallery'
import { OurMission } from '@/components/OurMission'
import { MintACritter } from '@/components/MintACritter'
import { Roadmap } from '@/components/Roadmap'
import { WhyWeAreHere } from '@/components/WhyWeAreHere'
import { TheTeam } from '@/components/TheTeam'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <Flex flexDir="column" w="100%" height="100vh">
      <Header />
      <Flex
        direction="column"
        minWidth="100%"
        width="100%"
        align="center"
        background={`url('/assets/bg-main.svg')`}
        backgroundSize="cover"
        backgroundPosition="bottom"
      >
        <Hero />
        <Galery />
        <OurMission />
        <MintACritter />
        <Roadmap />
        <WhyWeAreHere />
        <TheTeam />
      </Flex>
      <Footer />
    </Flex>
  )
}
