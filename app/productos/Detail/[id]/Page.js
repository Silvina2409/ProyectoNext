import ProductDetail from "@/Components/products/ProductDetail";

const DetailPage = ({params}) => {
    const {id} = params
    return (
        <main className="container m-auto mt-10">
            <ProductDetail id={id} />
        </main>
    )
}
export default DetailPage