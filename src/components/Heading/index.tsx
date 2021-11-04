import { Flex, Box, Text } from '@chakra-ui/layout'

type Variant = 'red' | 'purple'

const variants = {
  purple: {
    default: {
      fill: '#C11AFF',
      gradient: 'linear(to-r, #9D0EE0, #CC65FC)'
    },
    hover: {
      fill: '',
      gradient: '',
      color: ''
    },
    active: {
      fill: '',
      gradient: '',
      color: ''
    }
  },
  red: {
    default: {
      fill: '#F42663',
      gradient: 'linear(to-r, #C1005A, #FF6C9F)'
    },
    hover: {
      fill: '#F42663',
      gradient: 'linear(to-r, #C1005A, #FF6C9F)',
      color: '#FFE76E'
    },
    active: {
      fill: '#F42663',
      gradient: 'linear(to-r, #C1005A, #FF6C9F)',
      color: '#FFE76E'
    }
  }
}

type HeadingProps = {
  children: React.ReactNode
  fontSize?: number | string
  variant?: Variant
  width?: number | string
  height?: number | string
}

export function Heading({
  children,
  fontSize = 24,
  variant = 'red',
  ...props
}: HeadingProps) {
  return (
    <Flex
      bgGradient={variants[variant].default.gradient}
      paddingX={1}
      paddingY={0}
      borderRadius="10px"
      border="3px solid #000"
      transition="all 0.2s"
      align="center"
      _hover={{
        color: variants[variant].hover && variants[variant].hover.color
      }}
      {...props}
    >
      <Box
        paddingX={4}
        paddingY={1}
        bg={variants[variant].default.fill}
        borderRadius="8px"
        flex={1}
      >
        <Text fontSize={fontSize} fontWeight={500}>
          {children}
        </Text>
      </Box>
    </Flex>
  )
}
