import { Flex } from '@chakra-ui/react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <Flex flexDir="column" w="100vw" h="100vh">
      <Header />
      <Flex
        flex={1}
        direction="column"
        width="100%"
        align="center"
        background={`url('/assets/bg-story.svg')`}
        backgroundSize="cover"
        backgroundPosition="bottom"
      >
        Teste
      </Flex>
      <Footer />
    </Flex>
  )
}
