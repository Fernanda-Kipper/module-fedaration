import { Flex } from '@chakra-ui/react'

import { Header } from './Header'
 
export function Page({ children }){
  return(
    <Flex direction="column" w="100%" h="100%">
      <Header />
      <Flex p="8" alignItems="center" justify="center" flexWrap="wrap">
        {children}
      </Flex>
    </Flex>
  )
}