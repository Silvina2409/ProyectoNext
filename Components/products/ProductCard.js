import Image from "next/image";
import Link from "next/link";

const ProductCard = ({item}) => {
    return (
        <div className="basis-72 shadow-lg rounded">
            <Link href={ `/productos/detail/${item.id}`}
                className= "flex flex-col"
            >
            
            <Image
                alt={item.title}
                src={item.image}
                width={200}
                height={200}
            />
            <div className="px-4 border-t border-gray-200">
                <h3 className="text sm my-4 "> {item.title} </h3>
                <p className="text-2xl font-2-semibold mb-6"> ${item.price}</p>
            </div>            
            </Link>

        </div>
    )
}
export default ProductCard