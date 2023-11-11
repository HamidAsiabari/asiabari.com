import { Button, H3, XStack, YStack} from 'tamagui'
import { router } from 'expo-router'
import i18n from '@i18n/i18'
import { ArrowLeft, LogIn } from '@tamagui/lucide-icons'
import SignInForm from '@modules/auth/SignInForm'
import { VStack } from '@/components/template/VStack'

const signin = () => {
return (<>
      {/* <XStack 
        alignItems="center"
        space="$2" >
        <Button icon={ArrowLeft} onPress={()=>router.push("/")} />
        <H3></H3>
      </XStack> */}
      <YStack padding="$3" space="$2" alignItems="center" justifyContent='flex-end'>
          <SignInForm  />
          <Button variant='outlined'
          iconAfter={LogIn}
          onPress={() => router.push("/auth/signup")}>{i18n.t('go_to_signup')}</Button>
    </YStack>
  </>)
}
export default signin