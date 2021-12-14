import { Box, Button, Image, Flex } from '@chakra-ui/react'
import { RiDeleteBin5Line } from 'react-icons/ri'

export function CartItem({ item, onRemove }){
  return(
    <Box w='60%' maxH="sm" borderWidth='1px' borderRadius='lg' overflow='hidden' m="2" position='relative'>
    <Image src={item.image} alt={item.title} height="200px"/>
    <Box p='6' w='100%'>
      <Box
        mt='1'
        fontWeight='semibold'
        as='h4'
        lineHeight='tight'
        isTruncated
      >
        {item.title}
      </Box>
      {item.value}

      <Flex flexDir="column" alignItems="center" justify="center" position='absolute' right='32px' top='50%'>
        {item.amount} unidades
        <Button onClick={() => onRemove(item.id)}>
          <RiDeleteBin5Line color="#D53F8C"/>
        </Button>
      </Flex>
    </Box>
  </Box>
  )
}