"use client"

import { Button } from "@/components/ui/button";

import Image from "next/image";
import Pointer from "@/components/pointer";
import quantumLoo from "@/assets/images/quantum.svg"
import Tag from "@/components/tag";
import FeatureCard from "@/components/feature-card";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg"
import avatar2 from "@/assets/images/avatar-lula-meyers.jpg"
import avatar3 from "@/assets/images/avatar-florence-shaw.jpg"
import avatar4 from "@/assets/images/avatar-owen-garcia.jpg"
import Avatar from "@/components/avatar";
import Key from "@/components/key";
import figmaIcon from "@/assets/images/figma-logo.svg"
import IntegrationColumn from "@/components/integrationsColumn";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion"

const logos = [
  { name: "Quantum", image: quantumLoo },
  { name: "Quantum", image: quantumLoo },
  { name: "Quantum", image: quantumLoo },
  { name: "Quantum", image: quantumLoo },
  { name: "Quantum", image: quantumLoo },
  { name: "Quantum", image: quantumLoo },
]

const features = [
  "Asset Library",
  "Code Preview",
  "Flow Mode",
  "Smart Sync",
  "Auto Layout",
  "Fast Search",
  "Smart Guides",
];

const integrations = [
  { name: "Figma", icon: figmaIcon, description: "Figma is a collaborative interface design tool." },
  { name: "Notion", icon: figmaIcon, description: "Notion is an all-in-one workspace for notes and docs." },
  { name: "Slack", icon: figmaIcon, description: "Slack is a powerful team communication platform." },
  { name: "Relume", icon: figmaIcon, description: "Relume is a no-code website builder and design system." },
  { name: "Framer", icon: figmaIcon, description: "Framer is a professional website prototyping tool." },
  { name: "GitHub", icon: figmaIcon, description: "GitHub is the leading platform for code collaboration." },
];

export type integrationType = typeof integrations

const faqs = [
  {
    question: "How is Layers different from other design tools?",
    answer: "Unlike traditional design tools, Layers prioritizes speed and simplicity without sacrificing power. Our intelligent interface adapts to your workflow, reducing clicks and keeping you in your creative flow.",
  },
  {
    question: "Is there a learning curve?",
    answer: "Layers is designed to feel intuitive from day one. Most designers are productive within hours, not weeks. We also provide interactive tutorials and comprehensive documentation to help you get started.",
  },
  {
    question: "How do you handle version control?",
    answer: "Every change in Layers is automatically saved and versioned. You can review history, restore previous versions, and create named versions for important milestones.",
  },
  {
    question: "Can I work offline?",
    answer: "Yes! Layers includes a robust offline mode. Changes sync automatically when you're back online, so you can keep working anywhere.",
  },
  {
    question: "How does Layers handle collaboration?",
    answer: "Layers is built for collaboration. You can invite team members to your projects, share feedback, and work together in real-time.",
  },
];


const textVariable = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;
const textWord = textVariable.split(" ");



export default function Home() {

  const scrollTarget = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({ target: scrollTarget, offset: ['start end', 'end end'] })
  const [currentWord, setCurrentWord] = useState(0)
  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, textWord.length])


  useEffect(() => {

    wordIndex.on('change', (latest) => {
      setCurrentWord(latest)
    })


  }, [wordIndex])


  const [selectedIndexFaq, setSelectedIndexFaq] = useState(0)
  return (
    <>
      <section className="py-24 overflow-clip">

        <div className="container relative mx-auto ">

      

          <div className="absolute left-56 top-96 hidden lg:block">
            <Pointer name="Dev.scott" />
          </div>

          <div className="absolute right-80 -top-4 hidden lg:block" >
            <Pointer name="Ryan" color="red" />

          </div>

          <div className="flex justify-center">

            <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-foreground font-semibold">
              $7.5M seed round raised

            </div>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6 text-foreground">
            Impactful desing , created effortlessly
          </h1>
          <p className="mx-auto text-xl text-foreground/50 mt-5 max-w-2xl">
            Design tools shouldn&apos;'t slow you down . Layers combines powerful features with an intuitive interface that keeps you in your creative flow.

          </p>
          <form className="flex border border-input rounded-full p-2 mt-8 mx-auto max-w-lg">
            <input type="email" placeholder="Enter your email" className=" text-foreground border-none outline-none bg-transparent px-4 flex-1 w-full" />
            <Button variant="default" size={"sm"} type="submit" className="whitespace-nowrap rounded-full text-neutral-950">Sign up</Button>
          </form>
        </div>

      </section>
      <section className="py-24 overflow-x-clip">

        <div className="container mx-auto">
          <h3 className="text-center text-foreground text-xl">
            Already chosen by these market leaders
          </h3>
          <div className=" flex overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">

            <motion.div

              animate={{
                x: "-50%"
              }}

              transition={{
                duration: 30,
                ease: "linear",
                repeat: Infinity
              }}

              className="flex flex-none gap-25  justify-center ">

              {Array.from({ length: 2 }).map((_, i) => (

                <React.Fragment key={i}>
                  {logos.map((logo) => (
                    <Image src={logo.image} alt={logo.name} key={logo.name} />
                  ))}
                </React.Fragment>
              ))}


            </motion.div>

          </div>

        </div>

      </section>
      <section className="">
        <div className="container  mx-auto">
          <div className="sticky top-36">


            <div className="flex justify-center">


              <Tag>Introducing Layer</Tag>
            </div>
            <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10">
              <span className="text-foreground">Your creative process deserves better.</span>{" "}
              <span className="text-black/15 dark:text-white/15 ">{textWord.map((word, wordIndex) => (

                <span key={wordIndex} className={cn("transition duration-500 ", wordIndex < currentWord && "text-foreground",)}>
                  {`${word} `}
                </span>

              ))}.</span>
              <span className="text-primary block">That&apos;'s why we built Layers.</span>
            </div>

          </div>

          <div className="h-[150vh]" ref={scrollTarget}>

          </div>

        </div>
      </section>
      <section className="py-24 text-foreground ">
        <div className="container mx-auto">
          <div className="flex justify-center">

            <Tag>Features</Tag>
          </div>
          <h2 className="text-6xl font-medium text-center mt-6 text-foreground"> Where power meets <span className="text-primary"> simplicity </span> </h2>

          <div className="mt-12 grid grid-cols-1  gap-8">
            <FeatureCard title="Real-time Collaboration" description="Work together seanlessly with conflick-free team editing " className="group" >

              <div className="aspect-video flex items-center  justify-center">
                <Avatar className="z-40">
                  <Image src={avatar1} alt="avatar" className="rounded-full" />
                </Avatar>
                <Avatar className="-ml-6 z-30 border-indigo-500">
                  <Image src={avatar2} alt="avatar" className="rounded-full" />
                </Avatar>
                <Avatar className="-ml-6 z-20 border-amber-500">
                  <Image src={avatar3} alt="avatar" className="rounded-full items-center justify-center gap-1 " />
                </Avatar>
                <Avatar className="-ml-6 border-transparent group-hover:border-green-500 transition">
                  <div className="size-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1 relative">
                    <Image src={avatar4} alt="avatar 4" className="absolute size-full rounded-full opacity-0 group-hover:opacity-100 transition" />
                    {Array.from({ length: 3 }).map((_, i) => (

                      <span className="size-1.5 rounded-full bg-white inline-flex" key={i}>



                      </span>
                    ))}

                  </div>
                </Avatar>
              </div>
            </FeatureCard>
            <FeatureCard title="Real-time Collaboration" description="Work together seanlessly with conflick-free team editing" className="" >

              <div className="aspect-video flex items-center justify-center">
                <p className="text-4xl font-extrabold text-white/20 text-center">
                  W've achived <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">incredible</span> growth this
                </p>

              </div>

            </FeatureCard>
            <FeatureCard title="Real-time Collaboration" description="Work together seanlessly with conflick-free team editing" >


              <div className="aspect-video flex items-center justify-center gap-4 ">

                <Key className="w-28">
                  shift
                </Key>
                <Key>
                  alt
                </Key>
                <Key>
                  c
                </Key>

              </div>


            </FeatureCard>


          </div>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            {features.map((feature) => (
              <div key={feature} className=" dark:bg-neutral-950 hover:scale-95 transition duration-500 group border border-black/10 dark:border-white/10 inline-flex px-3 py-1.5 rounded-2xl gap-3 items-center">
                <span className="bg-primary  group-hover:rotate-45 transition duration-500 text-neutral-950 size-5 rounded-full inline-flex items-center justify-center text-xl">&#10038;</span>
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden">
        <div className="container mx-auto">

          <div className="grid lg:grid-cols-2 items-center lg:gap-16">

            <div className=" text-foreground">

              <Tag>Integration</Tag>
              <h2 className="text-6xl font-medium mt-6">Play well with <span className="text-primary"> other </span></h2>
              <p className="text-black/50 dark:text-white/50 mt-4 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et tempore asperiores aliquid optio architecto commodi facere vel alias sint dignissimos iure dolores maxime id magni reprehenderit beatae cumque, fuga non.
              </p>
            </div>
            <div>

              <div className=" grid md:grid-cols-2 gap-4  h-[400px] lg:h-[800px] mt-8 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
                <IntegrationColumn integrations={integrations} />
                <IntegrationColumn reverse integrations={integrations.slice().reverse()} className="hidden md:flex" />
              </div>
            </div>
          </div>


        </div>

      </section>
      <section className="mt-24 text-foreground">
        <div className="container mx-auto ">
          <div className="flex justify-center">
            <Tag>Faqs</Tag>
          </div>
          <h2 className="text-6xl font-medium mt-6 text-center max-w-xl mx-auto">
            Questions ? We've got <span className="text-primary">answers</span>

          </h2>

          <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
            {faqs.map((faq, faqIndex) => (
              <div key={faq.question} className="bg-background rounded-2xl border border-foreground/10 p-6 " >

                <div className="flex justify-between items-center" onClick={() => setSelectedIndexFaq(faqIndex)}>
                  <h3 className="font-medium ">
                    {faq.question}
                  </h3>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" className={cn(" cursor-pointer transition duration-300  feather feather-plus flex-shrink-0 text-primary", selectedIndexFaq == faqIndex && "rotate-45")}><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </div>
                <AnimatePresence>

                  {selectedIndexFaq === faqIndex && (

                    <motion.div

                      initial={{
                        height: 0,

                      }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}

                      className={cn("mt-6 overflow-hidden")}>
                      <p className="text-foreground/50">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>



              </div>
            ))}
          </div>

        </div>
      </section>


    </>
  );
}
