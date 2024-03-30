
import ProductsList from "@/Components/products/ProductsList";
import Footer from "../Components/ui/Footer";
import CategoriesMenu from "@/Components/products/CategoriesMenu";

export const metadata = {
  title: "Furniture Tienda",
  description: "Venta de muebles"

}


export default function Home() {
  const categoria = "todos"
  return (
    <>
   
    <div className=" container m-auto  ">
      <h1 className="text-6xl  text-bold my-16"> Furniture Tienda</h1>
      <hr/>
      <p className="text-2xl my-10 border-b pb-4"> Bienvenidos</p>
   
    <div className="flex gap-10" >
      <div className="my-10">     
        <CategoriesMenu />
      </div> 
      <ProductsList categoria={categoria} />
    </div>
    </div>  
    
  
    </>
  );
}
