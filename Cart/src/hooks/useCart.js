import { useState } from "react"

export function useCart(){
  const [cart, setCart] = useState(() => {
    const storagedCart = localStorage.getItem('@goods:cart')

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });

  const updateCart = () => {
    setCart(() => {
      const storagedCart = localStorage.getItem('@goods:cart')
  
      if (storagedCart) {
        return JSON.parse(storagedCart);
      }
  
      return [];
    })
  }

  const addToCart = async (newProduct) => {
    updateCart()
    let productAmountNeeded = cart.reduce((amount,product) => {
      console.log(product)
      if(product.id === newProduct.id){
        amount += product.amount
      }
      return amount
    },1)

    switch(productAmountNeeded){
      case 1:
      {
        let productToAdd = {...newProduct, amount: productAmountNeeded}
        setCart([...cart, newProduct])
        localStorage.setItem('@goods:cart', JSON.stringify([...cart, productToAdd]))
        break
      }
      default:
        {
          let newCart = cart.map(product => {
            if(newProduct.id === product.id){
              product.amount = productAmountNeeded
              return product
            }
            return product
          })
          setCart(newCart)
          localStorage.setItem('@goods:cart', JSON.stringify(newCart))
        }
    }
  };

  const removeFromCart = (id) => {
    updateCart()
    let productExistOnCart = false
      
    let newCart = cart.filter(product => {
      if (product.id === id){
        productExistOnCart = true
      }
      return product.id !== id
    })
    
    if(productExistOnCart){
      localStorage.setItem('@goods:cart', JSON.stringify(newCart))
      setCart(newCart)
    }
  }

  return { addToCart, removeFromCart, cart }
}