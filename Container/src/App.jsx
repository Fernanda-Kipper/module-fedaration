import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { QueryClientProvider, QueryClient } from "react-query";

import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/500.css'
import '@fontsource/montserrat/600.css'

import { CartPage } from './pages/Cart'
import { ProductListPage } from './pages/ProductList'

const theme = extendTheme({
  fonts: {
    heading: "Montserrat, Helvetica, sans-serif",
    body:  "Montserrat, Helvetica, sans-serif",
  },
})

const queryClient = new QueryClient()

export default function App(){
  return(
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/cart" element={<CartPage />}/>
            <Route path="/" element={<ProductListPage />}/>
          </Routes>
        </Router>
      </ChakraProvider>
    </QueryClientProvider>
  )
}