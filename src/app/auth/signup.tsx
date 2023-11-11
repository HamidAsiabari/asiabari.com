import { Button, H3, XStack, YStack} from 'tamagui'
import { router } from 'expo-router'
import SignUpForm from '@modules/auth/SignUpForm'
import i18n from '@i18n/i18'
import { ArrowLeft, LogIn } from '@tamagui/lucide-icons'
import { VStack } from '@/components/template/VStack'
import Footer from '@/components/template/Footer'

const signup = () => {
return (
<>
  <VStack >
      {/* <XStack 
        alignItems="center"
        space="$2" >
        <Button icon={ArrowLeft} onPress={()=>router.push("/")} />
        <H3></H3>
      </XStack> */}
      <YStack padding="$3" space="$2" alignItems="center" justifyContent='flex-end'>
          <SignUpForm  />
          <Button variant='outlined'
          iconAfter={LogIn}
          onPress={() => router.push("/auth/signin")}>{i18n.t('go_to_signin')}</Button>
    </YStack>
  
  </VStack>
  
  </>)
}
export default signup