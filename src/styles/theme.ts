import { extendTheme } from '@chakra-ui/react'
const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontSize: '14px',
        color: 'white',
      },
    },
  },
  colors: {
    primary: {
      green: 'hsl(75, 94%, 57%)',
    },
    neutral: {
      white: 'hsl(0, 0%, 100%)',
      grey: 'hsl(0, 0%, 20%)',
      darkGrey: 'hsl(0, 0%, 12%)',
      offBlack: 'hsl(0, 0%, 8%)',
    },
  },
  fonts: {
    heading: 'Inter',
    body: 'Inter',
  },
})
export default theme
