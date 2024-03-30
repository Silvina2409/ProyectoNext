"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
    {label: "Todos", href: "/productos/todos"},
    {label: "Mesas", href: "/productos/mesas"},
    {label: "Sillas", href: "/productos/sillas"},
    {label: "Sillones", href: "/productos/sillones"}
]

const CategoriesMenu = () => {
    const pathname = usePathname()
    return (
        <div className="flex flex-col gap-3">
            {links.map (link => (
            <Link
            key={link.label}
            href={link.href}
            className={`${pathname === link.href ? "font-semibold border-b" : "" } py-2`}
            >
            {link.label}
            </Link>       
            )        
            ) }
        </div>
    )
}
export default CategoriesMenu