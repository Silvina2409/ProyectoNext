"use client"

import CartItem from "@/Components/cart/CartItem"
import { useCartContext } from "@/Components/context/CartContext"

const CartPage = () =>{
    const {cart} = useCartContext()
    return(
        <main className="m-8">
            <h2 className="font-bold"> Tu compra </h2>
            <ul>
                {
                    cart.map((item) => <CartItem item={item} key={item.id} />)
                }
            </ul>
        </main>
    )
}
export default CartPage