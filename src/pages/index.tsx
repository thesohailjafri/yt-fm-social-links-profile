import {
  Avatar,
  Box,
  Button,
  Card,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react'
import Head from 'next/head'

type Props = {}
/* 
   neutral: {
      white: 'hsl(0, 0%, 100%)',
      grey: 'hsl(0, 0%, 20%)',
      darkGrey: 'hsl(0, 0%, 12%)',
      offBlack: 'hsl(0, 0%, 8%)',
    },
*/
const socials = [
  {
    name: 'GitHub',
    link: 'https://github.com/thesohailjafri',
  },
  {
    name: 'Frontend Mentor',
    link: 'https://www.frontendmentor.io/profile/thesohailjafri',
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/thesohailjafri/',
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/thesohailjafri',
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/thesohailjafri/',
  },
]

export default function Page({}: Props) {
  return (
    <Box>
      <Head>
        <title>Frontend Mentor | Social links profile</title>
      </Head>
      <Box
        p={6}
        color={'white'}
        bg={'neutral.offBlack'}
        height={'100vh'}
        width={'100vw'}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Card w={'sm'} p={9} bg={'neutral.darkGrey'} as={Stack} spacing={6}>
          <Stack spacing={6} alignItems={'center'} textAlign={'center'}>
            <Avatar
              src={'/avatar-jessica.jpeg'}
              name="Jessica Randall"
              size={'xl'}
            />
            <Stack spacing={2}>
              <Heading fontSize={'lg'} color={'white'} fontWeight={600}>
                Jessica Randall
              </Heading>
              <Text color={'primary.green'} fontWeight={500}>
                London, United Kingdom
              </Text>
            </Stack>
            <Text
              color={'white'}
            >{`"Front-end developer and avid reader."`}</Text>
          </Stack>
          <Stack spacing={4}>
            {socials.map((social) => (
              <Button
                fontSize={'sm'}
                fontWeight={600}
                color={'neutral.white'}
                bg={'neutral.grey'}
                _hover={{ bg: 'primary.green', color: 'neutral.grey' }}
                key={social.name}
              >
                {social.name}
              </Button>
            ))}
          </Stack>
        </Card>
      </Box>
    </Box>
  )
}

/* 
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- displays site properly based on user's device -->

  <link rel="icon" type="image/png" sizes="32x32" href="./assets/images/favicon-32x32.png">
  
  <title>Frontend Mentor | Social links profile</title>

  <!-- Feel free to remove these styles or customise in your own stylesheet 👍 -->
  <style>
    .attribution { font-size: 11px; text-align: center; }
    .attribution a { color: hsl(228, 45%, 44%); }
  </style>
</head>
<body>

  Jessica Randall
  London, United Kingdom
  "Front-end developer and avid reader."

  GitHub
  Frontend Mentor
  LinkedIn
  Twitter
  Instagram
  
  <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Your Name Here</a>.
  </div>
</body>
</html>
*/
