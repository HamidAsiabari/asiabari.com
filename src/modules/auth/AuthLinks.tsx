import React from 'react'
import { Button, H2, YStack } from 'tamagui'
import { router } from 'expo-router'
import i18n from '@i18n/i18'

const AuthLinks = () => {
  return (<YStack space="$5"  alignSelf='center' > 
        <H2>{i18n.t('dashboard')}</H2>
        <Button onPress={() => router.push("/auth/signin")}>{i18n.t('signin_title')}</Button>
        <Button onPress={() => router.push("/auth/signup")}>{i18n.t('signup_title')}</Button>
        <Button onPress={() => router.push("/users/Hamid Asiabari")}>{i18n.t('go_to_test_profile')}</Button>
    </YStack>)
}

export default AuthLinks