import { cn } from "@/lib/utils"
import { ReactNode } from "react"

type MaxWidthWrapper = {
    className?: string
    children: ReactNode
}

export const MaxWidthWrapper = ({ className, children }: MaxWidthWrapper) => {

    return (
        <div className={cn("container py2 mx-auto py-24", className)}>
            {children}
        </div>
    )

}