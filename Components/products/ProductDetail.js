import Image from "next/image";
import QtySelector from "./QtySelector"


const ProductDetail =async ({id}) => {
    const item =  await fetch(`http://localhost:3000/api/product/${id}`, {cache: "no-store"}).then (r => r.json())

    
    
    return (
        <div className="max-w-4xl m-auto">
           
            <section className="flex gap-6"> 
                <div className="relative basis-1/2"> 
                    <Image 
                    src={item.image}
                    alt = {item.title}
                    width={400}
                    height={400}
                    />
                </div>
                <div className="basis-1/2">
                    <h3 className="text-4xl font-semibold border-b border-gray-200 pb-4 mb-4"> {item.title} </h3>
                    <p className="text-2xl">$ {item.price} </p>
                    <QtySelector item={item} />
                </div>    
            </section>
            <section className="mt-12">
                <h3 className="text-2xl font-semibold border-b border-gray-200 pb-4 my-4"> Descripción</h3>
                <p className="text-gray-600 text-lg"> {item.description} </p>
            </section>

        </div>
    )
}

export default ProductDetail