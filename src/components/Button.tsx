import { Heading } from '@/components/Heading'

export function Button({ children, width, height, onClick, fontSize }) {
  return (
    <button onClick={onClick}>
      <Heading width={width} height={height} fontSize={fontSize}>
        {children}
      </Heading>
    </button>
  )
}
