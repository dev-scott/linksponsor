"use client"

import { MaxWidthWrapper } from "@/components/max-width-wrapper"
import Tag from "@/components/tag"
import { TogglePlan } from "@/components/toggle-plan"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { useState } from "react"

const Page = () => {

    const [currentPricing, setCurrentPricing] = useState<"annually" | "monthly">("annually")

    const PRICING_DATA = [
        {
            title: "Creator",
            description: "For youtubers looking for more sponsors in their niche",
            monthlyPrice: 50,
            annuallyPrice: 150,
            features: [
                "List of sponsors",
                "List of sponsored youtubers",
                "Similar sponsors",
                "Search by niche",
                "Recap mails ( coming soon )",
            ]
        },
        {
            title: "Sponsor",
            description: "For sponsors looking for new youtubers to work with ",
            monthlyPrice: 100,
            annuallyPrice: 250,
            features: [
                "all the perks of creator",
                "Powerfull filtering system: ha n...",
                "Similar Youtubers",
                "Notifications ( coming soon )",
            ]
        },
    ]

    function handleToggle() {
        if (currentPricing === "annually") {
            setCurrentPricing("monthly");
        }
        if (currentPricing === "monthly") {
            setCurrentPricing("annually");
        }
    }

    return (
        <MaxWidthWrapper>

            <div className="flex justify-center flex-col items-center gap-4">


                <div className="flex">

                    <Tag >
                        Our flexible pricing
                    </Tag>
                </div>
                <h1 className="font-bold text-xl ">Choose the perfect price for you need</h1>
                <span className="font-semibold text-foreground/80 text-center text-base max-w-prose text-pretty">Learn how to choose the perfect planner to meet your life goals . <br /> bring about transformation , Stick with new habits</span>

                <div className="flex font-semibold text-base gap-4 text-foreground">

                    <p>
                        Annually
                    </p>
                    <TogglePlan onClick={handleToggle} pricing={currentPricing} />
                    <p>
                        Monthly
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-4 relative">

                    {PRICING_DATA.map((item, key) => (

                        <div className=" py-6 px-4 h-full max-h-[700px]  w-full max-w-[300px] border rounded-xl flex flex-col justify-between" key={key}>
                            <div>
                                <h1 className="font-bold text-2xl text-pretty max-w-prose text-foreground mb-6">{item.title}</h1>
                                <span className="text-base font-semibold text-foreground/60 max-w-prose ">
                                    {item.description}
                                </span>

                                <h1 className="text-2xl  font-bold text-foreground mt-5">
                                    {currentPricing == "annually" ? `${item.annuallyPrice}/year` : null}
                                    {currentPricing == "monthly" ? `${item.monthlyPrice}/month` : null}

                                </h1>
                                <div className="mt-4 grid gap-y-2 ">
                                    {item.features.map((description, key) => (
                                        <div key={key} className="w-full flex justify-start items-center gap-3 ">

                                            <span>
                                                <Check />
                                            </span>
                                            <span>
                                                {description}
                                            </span>


                                        </div>
                                    ))}
                                </div>
                            </div>



                            <div className="mt-4 w-full self-end">
                                <Button variant={"default"} className="text-background bg-foreground w-full py-6 px-4">
                                    Buy now
                                </Button>
                            </div>
                        </div>
                        ))}



                </div>

            </div>
            <div>

            </div>

        </MaxWidthWrapper>
    )

}

export default Page