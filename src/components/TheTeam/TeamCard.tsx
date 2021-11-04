import { Box, Flex, Stack, Text, VStack } from '@chakra-ui/layout'
import Image from 'next/image'
import Link from 'next/link'
import { Heading } from '../Heading'

export type TeamCardProps = {
  name: string
  position: string
  image: string
  social: {
    media: 'instagram' | 'twitter'
    link: string
  }[]
}

export function TeamCard({
  name,
  image,
  position,
  social
}: TeamCardProps): JSX.Element {
  return (
    <Flex direction="column" align="center">
      <Box>
        <Image src={image} alt={name} width={200} height={200} />
      </Box>
      <VStack
        mt={42}
        bg="#1B0628"
        width={256}
        height={148}
        spacing={4}
        align="center"
        justify="center"
        position="relative"
        borderRadius={8}
        border="2px solid #FEF9E4"
      >
        <Box position="absolute" top={0} mt={-6}>
          <Heading variant="purple">{name}</Heading>
        </Box>
        <Text>{position}</Text>
        <Stack mt={6} direction="row" width="80%" justify="space-evenly">
          {social.map((item) => (
            <Link href={item.link} key={item.media} passHref>
              <Image
                src={`/assets/${item.media}-logo-3x.png`}
                alt={item.media}
                width={40}
                height={40}
              />
            </Link>
          ))}
        </Stack>
      </VStack>
    </Flex>
  )
}
