import Image from "next/image";
import Link from "next/link";

const ProductCard = ({item}) => {
    return (
        <div className="basis-72 border-gray-400 ">
            <Link href={ `/productos/detail/${item.id}`}
                className= "flex flex-col items-center"
            >
            
            <Image
                alt={item.title}
                src={item.image}
                width={200}
                height={200}
                className="w-auto"
            />
            <div className="px-4 border-t items-center">
                <h3 className="text-xl my-4 "> {item.title} </h3>
                <p className="text-l font-2-semibold mb-6"> ${item.price}</p>
            </div>            
            </Link>

        </div>
    )
}
export default ProductCard