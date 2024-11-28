"use client"
import Image from "next/image"
import LogoImage from "@/assets/images/logo.png"
import { Button } from "./ui/button"
import Link from "next/link"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"

const navLinks = [
    { label: "Home", href: "#" },
    { label: "Feature", href: "#" },
    { label: "Integrations", href: "#" },
    { label: "FAQs", href: "#" },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    return (

        <section className="py-4 lg:py-8 sticky w-full top-0 z-50  bg-neutral-950/85 backdrop-blur ">
            <div className="container mx-auto max-w-5xl">
                <div className="grid grid-cols-2 lg:grid-cols-3  rounded-full p-2 px-4  items-center">
                    <div>
                        <Image src={LogoImage} alt="Logo image" className="h-9 md:h-12 w-auto " />
                    </div>
                    <div className=" justify-center items-center hidden lg:flex">
                        <nav className="flex gap-6 font-medium">
                            {navLinks.map((link) => (
                                <Link href={link.href} key={link.label}>
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                    <div className="flex justify-end gap-4">
                        <svg onClick={() => setIsOpen(!isOpen)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=" cursor-pointer feather feather-menu md:hidden">
                            <line x1="3" y1="6" x2="21" y2="6" className={cn("origin-left transition", isOpen && "rotate-45 -translate-y-1")}></line>
                            <line x1="3" y1="12" x2="21" y2="12" className={cn("transition", isOpen && "opacity-0")}></line>
                            <line x1="3" y1="18" x2="21" y2="18" className={cn("origin-left transition", isOpen && "-rotate-45 translate-y-1")}></line>
                        </svg>
                        <Button className="  hidden md:flex  bg-transparent border border-white    text-neutral h-10 rounded-full px-6 font-medium  ">Login</Button>
                        <Button className=" hidden md:flex bg-primary  text-neutral-900 text-pretty  h-10 rounded-full px-6 font-medium ">Sign Up</Button>
                    </div>


                </div>

                <AnimatePresence>

                    {isOpen && (

                        <motion.div

                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            exit={{ height: "0" }}

                            className={cn("flex flex-col items-center overflow-hidden gap-4",)}>
                            {navLinks.map((link) => (
                                <a href={link.href} key={link.label} className="">{link.label}</a>
                            ))}

                            <Button className="   md:flex  bg-transparent border border-white    text-neutral h-10 rounded-full px-6 font-medium  ">Login</Button>
                            <Button className="  md:flex bg-primary  text-neutral-900 text-pretty  h-10 rounded-full px-6 font-medium ">Sign Up</Button>


                        </motion.div>

                    )}
                </AnimatePresence>



            </div>
        </section>
    )
}