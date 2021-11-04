// import { Input } from '@chakra-ui/input'
import { Flex } from '@chakra-ui/layout'
import { CopyrightSocial } from './CopyrightSocial'
import { ConnectYourWallet } from './ConnectYourWallet'
import { NavFooterSubscribe } from './NavFooterSubscribe'

export function Footer() {
  return (
    <Flex
      mb={161}
      width="100%"
      align="center"
      justify="center"
      p="166px 20px"
      bg="#571984"
    >
      <Flex
        maxWidth={1440}
        flex={1}
        width="100%"
        height="365px"
        justify="space-between"
      >
        <CopyrightSocial />
        <ConnectYourWallet />
        <NavFooterSubscribe />
      </Flex>
    </Flex>
  )
}
