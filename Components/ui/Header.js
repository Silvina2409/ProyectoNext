
"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  {
    label: "Inicio",
    href: "/"
  },
  {
    label: "Nosotros",
    href: "/nosotros"
  },
  {
    label: "Contacto",
    href: "/contacto"
  },
  {
    label: <Image 
            src={"/cart.png"} 
            width={30}
            height={30}
            />,
    href: "/carrito"
  },
  ]



const Header = () => {
  const pathname = usePathname()
  return (
    <header className='w-full bg-gray-400'>
        <div className='container m-auto py-6 flex justify-between items-center'>
          <Link href={"/"}>
          <Image
            src={"/logo.jpg"}
            width={75}
            height={75}
            alt = "logo furniture"
            priority
          />
          </Link>
          
          <nav className='flex justify-between  gap-2'>
            {
              links.map(link => {
                return <Link
                key={link.label}
                href={link.href}
                className= {`${pathname === link.href ? "font-bold" : ""} text-lg text-slate-100 p-3 `}
                >
                 {link.label}   
                </Link>
              }
                 
              )
            }

          </nav>

        </div>

    </header>
  )
}

export default Header