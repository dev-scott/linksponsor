"use client"

import { type integrationType } from "@/app/(landing)/page";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion"
import React from "react";
export default function IntegrationColumn(props: { integrations: integrationType, className?: string, reverse?: boolean }) {
    const { integrations, className, reverse } = props
    return (
        <motion.div
            initial={{
                y: reverse ? '-50%': 0
            }}
            animate={{
                y: reverse ? 0 : "-50%",
            }}
            transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear"
            }}


            className={cn("flex flex-col gap-4 pb-4", className)}>


            {Array.from({ length: 2 }).map((_, i) => (

                <React.Fragment key={i}>

                    {integrations.map((integration) => (
                        <div key={integration.name} className="bg-neutral-900 border border-white/10 rounded-3xl p-6">
                            <div className="flex justify-center">
                                <Image src={integration.icon} alt="integration" className="size-24" />
                            </div>
                            <h3 className="text-3xl text-center mt-6">{integration.name}</h3>
                            <p className="text-center text-white/50 mt-2">{integration.description}</p>
                        </div>
                    ))}

                </React.Fragment>
            ))}




        </motion.div>
    )

}