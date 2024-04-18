import Boton from "../ui/Boton";
import Image from "next/image";



const CartItem = ({item}) => {
  return (
    
        <li className="shadow flex justify-between items-center max-w-xl gap-6 p-4 m-8">
            <Image
                src={item.image}
                alt = {item.title}
                width={80}
                height={80}            
            />
           <div>
                <h3> {item.title}</h3>
                <p className="text-sm font-semibold"> ${item.price * item.quantity}</p>
                <p className="text-sm"> Cantidad: {item.quantity}</p>
            </div> 
            <Boton className="bg-brown-600">
                <Image
                    src={"/trash.png"}
                    alt="trash"
                    width={30}
                    height={30}
                />
            </Boton>
        </li>

    
  )
}

export default CartItem