import { cn } from "@/lib/utils"
import { Button } from "./ui/button"

type PricingProps = {
    pricing: "annually" | "monthly",
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
}

export const TogglePlan = ({ pricing, onClick }: PricingProps) => {

    return (
        <Button onClick={onClick} className={cn("w-12 h-6 flex justify-start rounded-full translate-x-0 items-center  p-1 bg-gradient-to-r from-[hsl(236,72%,79%)] to-[hsl(237,63%,64%)] ")} >
            <div className={cn("rounded-full h-4 w-4 bg-white transition-all", {
                "translate-x-[calc(100%+8px)]": pricing === "monthly"
            })} />
        </Button>
    )
}