import { Flex } from '@chakra-ui/react'

import { Header } from './Header'
 
export function Page(){
  return(
    <Flex direction="column" w="100%" h="100%">
      <Header />
    </Flex>
  )
}