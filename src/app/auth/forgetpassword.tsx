import { Button, H3, XStack, YStack} from 'tamagui'
import { router } from 'expo-router'
import i18n from '@i18n/i18'
import { ArrowLeft, LogIn } from '@tamagui/lucide-icons'
import  MyStack  from '@components/MyStack'
import ForgetPasswordForm from '@modules/auth/ForgetPasswordForm'
import { VStack } from '@/components/template/VStack'

const forgetpassword = () => {
return (<VStack justifyContent="flex-start">
      <YStack padding="$3" space="$2" alignItems="center" justifyContent='flex-end'>
          <ForgetPasswordForm  />
          <Button variant='outlined'
          iconAfter={LogIn}
          onPress={() => router.push("/auth/signin")}>{i18n.t('go_to_signin')}</Button>
    </YStack>
  </VStack>)
}
export default forgetpassword