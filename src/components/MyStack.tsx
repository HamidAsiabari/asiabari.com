import { styled, useMedia, View, YStack } from "tamagui";
import { VStack } from "@/components/template/VStack";
import { HStack } from '@/components/template/HStack'


const MyStack = ({ isVertical, children }:any) => {
  const media = useMedia()
  if(isVertical==undefined){
    isVertical =media.xs
  }
  return isVertical ? <VStack alignItems="center">{children}</VStack> : <HStack>{children}</HStack>;
}
export default MyStack;