// import Image from 'next/image'
import Link from 'next/link'
import { Stack, Flex } from '@chakra-ui/layout'
import { NavLink } from './NavLink'
import { Button } from '@/components/Button'

export function SidebarNav(): JSX.Element {
  return (
    <Stack direction="row" spacing="16" align="center">
      <NavLink href="/#roadmap">ROADMAP</NavLink>
      <NavLink href="/story">STORY</NavLink>
      <NavLink href="/sustainability">SUSTAINABILITY</NavLink>
      <NavLink href="/#gallery">GALLERY</NavLink>
      <NavLink href="/faq">FAQ</NavLink>
      <Flex ml="4" align="center">
        <Link href="/#connect" passHref>
          <Button width={221} height={39} fontSize={17} onClick={() => false}>
            Connect Your Wallet
          </Button>
        </Link>
      </Flex>
    </Stack>
  )
}
