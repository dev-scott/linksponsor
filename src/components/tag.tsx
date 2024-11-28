import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export default function Tag(props: HTMLAttributes<HTMLDivElement>) {

    const { className, children, ...otherProps } = props
    return (

        <div className={cn("inline-flex border border-primary gap-2 text-primary px-3 py-1 rounded-full uppercase items-center", className)} {...otherProps}>
            <span className="">&#10038;</span>
            <span className="text-sm">{children}</span>
        </div>
    )
}