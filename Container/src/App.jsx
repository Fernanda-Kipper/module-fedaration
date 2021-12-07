import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/500.css'
import '@fontsource/montserrat/600.css'

import { Cart } from './pages/Cart'
import { ProductList } from './pages/ProductList'

const theme = extendTheme({
  fonts: {
    heading: "Montserrat, Helvetica, sans-serif",
    body:  "Montserrat, Helvetica, sans-serif",
  },
})

export default function App(){
  return(
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/" element={<ProductList />}/>
        </Routes>
      </Router>
    </ChakraProvider>
  )
}