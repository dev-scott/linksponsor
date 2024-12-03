import React from 'react'
import logoImage from "@/assets/images/logo.png"
import Image from 'next/image'

const footerLinks = [
    { href: "#", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
];


const Footer = () => {
    return (
        <footer className=''>
            <div className='container mx-auto'>

                <div className='flex flex-col md:flex-row md:justify-between  items-center gap-6'>
                    <div>
                        <Image src={logoImage} alt="logo" className='size-24' />
                    </div>
                    <div>
                        <nav className='flex gap-6'>
                            {footerLinks.map((link, id) => (

                                <a href={link.href} key={id} className='text-foreground/50 text-sm'>{link.label}</a>
                            ))}
                        </nav>
                    </div>
                </div>

            </div>

        </footer>
    )
}

export default Footer
