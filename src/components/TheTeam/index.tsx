import { Flex, Box } from '@chakra-ui/layout'
import Image from 'next/image'
import { TeamCard, TeamCardProps } from './TeamCard'

const teamItems: TeamCardProps[] = [
  {
    name: 'JOJ',
    position: 'Creative Director',
    image: '/assets/team/joj.png',
    social: [
      {
        link: 'https://www.instagram.com/in/joj-kim-b8a9b9a4/',
        media: 'instagram'
      },
      {
        link: 'https://www.instagram.com/in/joj-kim-b8a9b9a4/',
        media: 'twitter'
      }
    ]
  },
  {
    name: 'Masterbrews',
    position: 'Solidity Developer',
    image: '/assets/team/masterbrews.png',
    social: [
      {
        link: 'https://www.instagram.com/in/joj-kim-b8a9b9a4/',
        media: 'twitter'
      }
    ]
  },
  {
    name: 'Joshua Schmitz',
    position: 'Marketing Specialist',
    image: '/assets/team/joshua.png',
    social: [
      {
        link: 'https://www.instagram.com/in/joj-kim-b8a9b9a4/',
        media: 'twitter'
      }
    ]
  }
]

export function TheTeam() {
  return (
    <Flex
      direction="column"
      width="100%"
      align="center"
      mt={-220}
      zIndex="0"
      maxWidth={950}
    >
      <Box mt={480}>
        <Image
          src="/assets/team/the-team.png"
          alt="The Team"
          width={482}
          height={201}
        />
      </Box>
      <Flex width="100%" justify="space-between">
        {teamItems.map((item) => (
          <TeamCard key={item.name} {...item} />
        ))}
      </Flex>
    </Flex>
  )
}
