'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

export const Navbar = () => {

    const pathName = usePathname()
    const router = useRouter();

    const navlinks = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "About",
            path: "/about"
        },
        {
            name: "Contact",
            path: "/contact"
        }
    ]

    const handler = () =>{
        router.push('/about')
    }


    return (
        <div className='bg-emerald-300 font-bold text-blue-900 flex justify-between items-center p-4' >
            <h1>Logo</h1>
            <div className='flex space-x-4'>
                {
                    navlinks.map(link => <Link href={link.path} key={link.name} className={`${pathName === link.path ? "text-blue-600" : "text-black"}`}>{link.name}</Link>)
                }
            </div>
            <button onClick={handler}>Log in</button>
        </div>

    )
}
