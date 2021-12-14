import { Flex, Text, Link } from '@chakra-ui/react'
import { RiStore2Line, RiShoppingCart2Line } from 'react-icons/ri'


export function Header(){
  return(
    <Flex as="nav" justify="center" w="100%" bg="gray.700" p="8">
      <Link href="/" display="flex" alignItems="center" textDecoration="none">
        <Text color="pink.500" fontWeight="bold" fontSize="1.5rem" display="inline" marginRight="2">goods</Text>
        <RiStore2Line color="#D53F8C" fontSize="1.5rem"/>
      </Link>
      <Link href="/cart" position="absolute" right="24px" textDecoration="none">
        <RiShoppingCart2Line color="white" fontSize="2rem" />
      </Link>
    </Flex>
  )
}