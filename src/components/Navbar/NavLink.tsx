import {
  Icon,
  Link as ChakraLink,
  Text,
  LinkProps as ChakraLinkProps
} from '@chakra-ui/react'
import { ActiveLink } from '../ActiveLink'

interface NavLinkProps extends ChakraLinkProps {
  icon?: React.ElementType
  children: React.ReactNode
  href: string
}

export function NavLink({
  icon,
  children,
  href,
  ...props
}: NavLinkProps): JSX.Element {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink
        display="flex"
        align="center"
        {...props}
        _hover={{ color: '#00E562' }}
      >
        {icon && <Icon as={icon} fontSize={20} />}
        <Text ml={icon && 4} fontSize={17}>
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  )
}
