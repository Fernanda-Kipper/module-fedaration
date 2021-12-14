import { useCart } from '../hooks/useCart'
import { Box, Button, Image, Flex } from '@chakra-ui/react'
import { BsCartPlusFill } from 'react-icons/bs'

export function ProductItem({ product }){
  const { addToCart } = useCart()

  return (
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' m="2">
      <Image src={product.image} alt={product.title} maxW="300px"/>
      <Box p='6'>
        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          isTruncated
        >
          {product.title}
        </Box>

        <Flex justify="space-between" onClick={() => addToCart(product)}>
          {product.value}
          <Button>
            <BsCartPlusFill color="#D53F8C"/>
          </Button>
        </Flex>
      </Box>
    </Box>
  )
}