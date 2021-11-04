import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
  sm: '30em',
  md: '48em',
  lg: '77.500em',
  xl: '80em',
  '2xl': '96em'
})

export const theme = extendTheme({
  breakpoints,
  colors: {
    gray: {
      '50': '#eeeef2',
      '100': '#d1d2dc',
      '200': '#b3b5c6',
      '300': '#9699b0',
      '400': '#797d9a',
      '500': '#616480',
      '600': '#4b4d63',
      '700': '#353646',
      '800': '#1f2029',
      '900': '#181b23'
    }
  },
  fonts: {
    heading: 'Rubik, sans-serif',
    body: 'Rubik, sans-serif'
  },
  styles: {
    global: {
      body: {
        bg: '#571984',
        color: '#FFF8D4'
      },
      a: {
        color: '#FFF8D4 !important'
      },
      'a:hover': {
        color: '#00E562 !important'
      }
    }
  }
})
