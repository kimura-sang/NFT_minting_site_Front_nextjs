import { Box } from '@chakra-ui/layout'
import Image from 'next/image'

export type GalleryItemSize = 'sm' | 'md' | 'lg'

export interface GalleryItemProps {
  image: string
  title: string
  size: GalleryItemSize
}

const sizes: Record<GalleryItemSize, number> = {
  sm: 145,
  md: 175,
  lg: 287
}

export function GalleryItem({ image, title, size }: GalleryItemProps) {
  return (
    <Box mr="0" ml="0" width={sizes[size]} height={sizes[size]} bgColor="#FFFFFF" style={{margin: "auto", position: "relative", textAlign: "center"}}>
      <Image src={image} alt={title} width={sizes[size]} height={sizes[size]} />
    </Box>
  )
}
