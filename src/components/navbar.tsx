"use client"
import Image from "next/image"
import LogoImage from "@/assets/images/logo.png"
import { Button, buttonVariants } from "./ui/button"
import Link from "next/link"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { ModeToggle } from "./mode-toggle"
import { ArrowRight } from "lucide-react"

const navLinks = [
    { label: "Home", href: "#" },
    { label: "Feature", href: "#" },
    { label: "Integrations", href: "#" },
    { label: "FAQs", href: "#" },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    return (

        <section className="py-2 sticky w-full top-0 z-50 border-b border-foreground/10   bg-background backdrop-blur ">
            <div className="container mx-auto max-w-5xl">
                <div className="grid grid-cols-2   rounded-full p-2 px-4  items-center">
                    <div>
                        <Image src={LogoImage} alt="Logo image" className="h-9 md:h-12 w-auto " />
                    </div>

                    <div className="flex justify-end items-center gap-4">
                        <ModeToggle />
                        <svg onClick={() => setIsOpen(!isOpen)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=" cursor-pointer feather feather-menu md:hidden text-foreground">
                            <line x1="3" y1="6" x2="21" y2="6" className={cn("origin-left transition", isOpen && "rotate-45 -translate-y-1")}></line>
                            <line x1="3" y1="12" x2="21" y2="12" className={cn("transition", isOpen && "opacity-0")}></line>
                            <line x1="3" y1="18" x2="21" y2="18" className={cn("origin-left transition", isOpen && "-rotate-45 translate-y-1")}></line>
                        </svg>
                        <Link
                            href={"/pricing"}
                            className={cn(buttonVariants({
                                size: "sm",
                                variant: "ghost",
                            }), " hidden md:flex text-foreground")}
                        >
                            Pricing
                        </Link>
                        <div className="h-8 w-px bg-foreground/10" />

                        <Link
                            href={"/pricing"}
                            className={cn(buttonVariants({
                                size: "sm",
                                variant: "ghost",
                            }), " hidden md:flex text-foreground")}
                        >
                            Sign in
                        </Link>
                        <div className="h-8 w-px bg-foreground/10" />

                        <Link
                            href={"/pricing"}
                            className={cn(buttonVariants({
                                size: "sm",
                                variant: "default",
                            }), " hidden md:flex  items-center gap-1.5 p-5 text-background")}
                        >
                            Sign in <ArrowRight className="size-4" />
                        </Link>

                    </div>


                </div>

                <AnimatePresence>

                    {isOpen && (

                        <motion.div

                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            exit={{ height: "0" }}

                            className={cn(" flex-wrap flex-row items-center overflow-hidden gap-4 flex md:hidden",)}>


                            <Link
                                href={"/pricing"}
                                className={cn(buttonVariants({
                                    size: "sm",
                                    variant: "ghost",
                                }), "  md:flex text-foreground")}
                            >
                                Pricing
                            </Link>
                            <div className="h-8 w-px bg-foreground/10" />

                            <Link
                                href={"/pricing"}
                                className={cn(buttonVariants({
                                    size: "sm",
                                    variant: "ghost",
                                }), "  md:flex text-foreground")}
                            >
                                Sign in
                            </Link>
                            <div className="h-8 w-px bg-foreground/10" />

                            <Link
                                href={"/pricing"}
                                className={cn(buttonVariants({
                                    size: "sm",
                                    variant: "default",
                                }), "  md:flex  items-center gap-1.5 p-5 text-background")}
                            >
                                Sign in <ArrowRight className="size-4" />
                            </Link>

                        </motion.div>

                    )}
                </AnimatePresence>



            </div>
        </section>
    )
}