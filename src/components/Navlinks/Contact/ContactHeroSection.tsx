"use client";

import Image from "next/image";

import styles from "@/stylesheets/custom.module.css";
import Section from "@/components/ui/feature/Section";

const ContactHeroSection = () => {
  return (
    <Section classes="mt-16">
      <div
        className={`w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] relative`}
      >
        <Image
          src="/images/contact.jpg"
          width={4240}
          height={2832}
          alt="hero_bg"
          priority
          quality={100}
          className="w-[100vw] h-full object-cover select-none"
        />
        <div className="absolute w-full h-full bg-black top-0 opacity-60 flex justify-center items-center"></div>
        <div className="absolute w-full h-full top-0 flex flex-col gap-10 justify-center items-center">
          <span
            className={`${styles.reem_kufi} text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white transition font-semibold`}
          >
            Contact Us
          </span>
        </div>
      </div>
    </Section>
  )
}

export default ContactHeroSection;