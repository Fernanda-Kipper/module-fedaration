import React from 'react'

import { Page } from "../components/Page"
import { Loading } from './Loading'

const Cart = React.lazy(() => import("cart/Cart"));

export function CartPage(){
    return(
        <Page>
            <React.Suspense fallback={<Loading />}>
                <Cart />
            </React.Suspense>
        </Page>
    )
}