import { CartItem } from "./components/CartItem"
import { useCart } from "./hooks/useCart"

export default function Cart(){
    const { cart, removeFromCart } = useCart()
    return(
        <>
            {cart.map(item => <CartItem item={item} onRemove={removeFromCart}/>)}
        </>
    )
}