import CategoriesMenu from "@/Components/products/CategoriesMenu"
import ProductsList from "@/Components/products/ProductsList"
import { Suspense } from "react"

export async function generateMetadata  ({params, searchParams}, parent) {

    return {
        title: `Furniture ${params.categoria}`

    }
}

export function generateStaticParams () {
    return [
        {categoria: "todos"},
        {categoria: "sillones"},
        {categoria: "sillas"},
        {categoria: "mesas"}
    ]
}
export const revalidate = 3600
const Productos = ({params}) =>{
    const {categoria} = params 
    return (
        <main className="container m-auto">
            <h2 className="text-2xl my-10 border-b pb-4"> Productos</h2>
            <p> Estas viendo: {params.categoria} </p>
            <div className="flex gap-10">
                <CategoriesMenu/>
                <Suspense fallback={<div> Cargando...</div>}>
                    <ProductsList categoria = {categoria}/>
                </Suspense>
            </div>
        </main>
    )
}

export default Productos