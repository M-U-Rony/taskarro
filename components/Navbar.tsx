import Image from "next/image"
import Link from "next/link"
import { MdDarkMode } from "react-icons/md";
import Button from "./Button";

export default function Navbar(){

    return(

    <nav className="w-full z-10 bg-primary flex justify-between fixed sm:h-20 lg:h-24 font-bold">
        <Link href={'/'} className="flex items-center gap-2 h-full w-52 text-2xl px-4">
            <Image src={'/logo.png'} alt="logo" height={60} width={60} className="rounded-full"></Image>
            <span className="text-[#213448]">Taskarro </span>
        </Link>
        
        <div className="flex gap-3 items-center px-4">
            <button className="cursor-pointer text-2xl"><MdDarkMode/></button>
            <Link href={'/'}><Button name={"Log in"}/></Link>
            <Link href={'/'}><Button name={"Signup"}/></Link>
        </div>
    </nav>

    )

}