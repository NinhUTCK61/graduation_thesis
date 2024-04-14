// import { ImageIntro } from '@/constant/images'
import { router } from 'expo-router'
import { ImageBackground } from 'react-native'
import { Button, H2, Stack, XStack, styled } from 'tamagui'

const ImageIntro = require('../assets/imgs/intro_img.png')
function Intro(): React.ReactElement {
  return (
    <ImageBackground source={ImageIntro} style={{ flex: 1, justifyContent: 'center' }}>
      <Stack gap="$10" pb="$10" jc="flex-end" bg={'rgba(0,0,0,0.5)'} w="100%" h="100%">
        <H2 fow={'bold'} px="$6">
          Schedule the Appointmentin the best Salon for yourKids.
        </H2>
        <XStack jc="space-between" w="100%" px="$2.5" flexWrap="nowrap">
          <ButtonLink
            w="48%"
            h="$5"
            onPress={() => router.push('/login')}
            fow="bold"
            bg="rgba(0,0,0,0.5)"
            boc="white"
          >
            Login
          </ButtonLink>
          <ButtonLink
            w="48%"
            h="$5"
            onPress={() => router.push('/register')}
            fow="bold"
            bg="white"
            col="purple"
          >
            Register
          </ButtonLink>
        </XStack>
      </Stack>
    </ImageBackground>
  )
}

const ButtonLink = styled(Button, {
  fow: 'bold',
  w: '$48',
  h: '$5',
})

export default Intro
