import Image from 'next/image'
import Link from 'next/link'
import { Flex, useBreakpointValue, IconButton, Icon } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { useSidebarDrawer } from '../../context/SidebarDrawerContext'
import { Navbar } from '@/components/Navbar'

export function Header(): JSX.Element {
  const { onOpen } = useSidebarDrawer()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex
      position="fixed"
      as="header"
      w="100%"
      h="70"
      mx="auto"
      px="6"
      align="center"
      justify="center"
      bg="#300B44"
      zIndex={3}
    >
      <Flex align="center" justify="space-between" w="100%" maxWidth="1440px">
        <Flex flex={1}>
          <Link href="/" passHref>
            <Image
              src="/assets/header/logo.png"
              alt="logo"
              width={195}
              height={27}
            />
          </Link>
        </Flex>

        <Navbar />

        {!isWideVersion && (
          <IconButton
            aria-label="Open navigation"
            icon={<Icon as={RiMenuLine} />}
            fontSize={24}
            variant="unstyled"
            onClick={onOpen}
            mr="2"
          />
        )}
      </Flex>
    </Flex>
  )
}
