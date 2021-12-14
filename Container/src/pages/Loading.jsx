import { Flex, Spinner } from "@chakra-ui/react";

export function Loading(){
  return(
    <Flex
      h="100vh"
      w="100vw"
      backgroundColor="rgba(0,0,0,0.5)"
      alignItems="center"
      justify="center"
    >
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='purple.500'
        size='xl'
      />
    </Flex>
  )
}