import { Flex, Text, Wrap, WrapItem, Box } from '@chakra-ui/react'
import { NavLink } from '@/components/Navbar/NavLink'

export function NavFooterSubscribe() {
  return (
    <Flex direction="column" maxWidth={520} width="100%" align="flex-end">
      <Wrap width={412} spacing={25} justify="space-between">
        <WrapItem width={200} height={50}>
          <NavLink href="/#gallery">
            <Text fontSize={21}>GALLERY</Text>
          </NavLink>
        </WrapItem>
        <WrapItem width={200} height={50}>
          <NavLink href="/faq">
            <Text fontSize={21}>FAQ</Text>
          </NavLink>
        </WrapItem>
        <WrapItem width={200} height={50}>
          <NavLink href="/#roadmap">
            <Text fontSize={21}>ROADMAP</Text>
          </NavLink>
        </WrapItem>
        <WrapItem width={200} height={50}>
          <NavLink href="#contact">
            <Text fontSize={21}>CONTACT US</Text>
          </NavLink>
        </WrapItem>
        <WrapItem width={200} height={50}>
          <NavLink href="/sustainability">
            <Text fontSize={21}>SUSTAINABILITY</Text>
          </NavLink>
        </WrapItem>
        <WrapItem width={200} height={50}>
          <NavLink href="#policy">
            <Text fontSize={21}>PRIVACY POLICY</Text>
          </NavLink>
        </WrapItem>
        <WrapItem width={200} height={50}>
          <NavLink href="/story">
            <Text fontSize={21}>STORY</Text>
          </NavLink>
        </WrapItem>
        <WrapItem width={200} height={50}>
          <NavLink href="#terms">
            <Text fontSize={21}>TERMS OF SERVICE</Text>
          </NavLink>
        </WrapItem>
      </Wrap>
      <Box>
        {/* <TagLabel></TagLabel> */}
        {/* <Input /> */}
      </Box>
    </Flex>
  )
}
