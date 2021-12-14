import { Skeleton } from '@chakra-ui/react'

import { ProductItem } from "./components/ProductItem";
import { When } from './components/When';
import { useProducts } from "./hooks/useProducts";

export default function ProductList(){
  const { data, isLoading } = useProducts()
  return(
    <>
      <When expr={isLoading}>
        <Skeleton height='100px' width='300px' m="2" />
        <Skeleton height='100px' width='300px' m="2" />
        <Skeleton height='100px' width='300px' m="2" />
        <Skeleton height='100px' width='300px' m="2" />
        <Skeleton height='100px' width='300px' m="2" />
        <Skeleton height='100px' width='300px' m="2" />
      </When>
      <When expr={!isLoading && data}>
        {data?.map(product => <ProductItem product={product} />)}
      </When>
    </>
  )
}