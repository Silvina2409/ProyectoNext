import Image from "next/image";

import Counter from "./Components/ui/Counter";
import Footer from "./Components/ui/Footer";
export const metadata = {
  title: "Furniture Tienda",
  description: "Venta de muebles"

}


export default function Home() {
  return (
    <>
   
    <div className=" bg-yellow-50 m-0 flex flex-col items-center ">
      <h1 className="text-6xl  text-bold m-20"> Furniture Tienda</h1>
      <hr/>
      <p className="text-3xl mt-4 pb-4"> Bienvenidos</p>
      <Counter/>
      <Image 
        src={"https://acdn.mitiendanube.com/stores/001/120/603/products/comedor-4-7340e910968ff2475316648034755556-480-0.webp"}
        alt= "mesa"
        width={100}
        height={100}
      />

    </div>
    <Footer/>
    </>
  );
}
