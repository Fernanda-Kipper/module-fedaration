import React from 'react'
import { Page } from "../components/Page";
import { Loading } from "./Loading";

const ProductList = React.lazy(() => import("productlist/ProductList"));

export function ProductListPage(){
  return(
    <React.Suspense fallback={<Loading />}>
      <Page>
        <ProductList />
      </Page>
    </React.Suspense>
  )
}