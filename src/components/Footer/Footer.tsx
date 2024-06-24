
import Link from "next/link";
import Image from "next/image";
import Logo from '@/components/ui/Logo';
import { FacebookSolid, XRegular, InstagramRegular, LinkedinSolid } from "@/assets/svgs/socialSvg";
import { ArrowRightSolid, LocationSolid, MessageSolid, DialerSolid } from "@/assets/svgs/uiSvg";
import ActiveLink from "@/components/ui/feature/ActiveLink";
import Section from "@/components/ui/feature/Section";
import Container from "@/components/ui/feature/Container";


const Footer = () => {

  return (
    <Section
      classes={`border-t-[1px] bg-background`}
    >
      <Container
        classes={`flex justify-between items-center relative flex-col`}
      >
        <div className={`flex justify-between items-center w-full pt-10 pb-5 flex-col gap-5 md:flex-row border-b-[1px]`}>
          <Logo textClasses=""/>
          <div className="Social_links flex gap-5 flex-wrap">
            <Link
              href="https://www.facebook.com/profile.php?id=61558911416361"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-600 rounded-full w-10 h-10 items-center justify-center flex hover:bg-[#FF5956]"
            >
              <FacebookSolid
                height="1rem"
                width="1rem"
                fillColor="#fff"
                strokeWidth="0"
                strokeColor="currentColor"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/company/102316821/admin/feed/posts/?feedType=following"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-600 rounded-full w-10 h-10 items-center justify-center flex hover:bg-[#FF5956]"
            >
              <LinkedinSolid
                height="1rem"
                width="1rem"
                fillColor="#fff"
                strokeWidth="0"
                strokeColor="currentColor"
              />
            </Link>
            <Link
              href="https://twitter.com/TTrailHolidays"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-600 rounded-full w-10 h-10 items-center justify-center flex hover:bg-[#FF5956]"
            >
              <XRegular
                height="1rem"
                width="1rem"
                fillColor="#fff"
                strokeWidth="0"
                strokeColor="currentColor"
              />
            </Link>
            <Link
              href="https://www.instagram.com/traveltrailholidays/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-600 rounded-full w-10 h-10 items-center justify-center flex hover:bg-[#FF5956]"
            >
              <InstagramRegular
                height="1rem"
                width="1rem"
                fillColor="#fff"
                strokeWidth="0"
                strokeColor="currentColor"
              />
            </Link>
          </div>
        </div>

        <div className={`w-[95%] flex justify-between pt-10 pb-5 flex-wrap gap-10`}>
          <div className={`max-w-[410px]`}>
            <div className={``}>
              <span className={`text-xl font-[500]`}>Quick Links</span>
            </div>
            <div className={`sm:p-3 flex flex-col gap-2 px-3 py-2`}>
                <div className="flex items-center gap-1">
                  <ArrowRightSolid height="0.7rem" width="0.7rem" fillColor="#cbd5e0" strokeWidth="0" strokeColor="currentColor"/>
                  <ActiveLink href="/" exact  classes={``} text="Home"/>
                </div>
                <div className="flex items-center gap-1">
                  <ArrowRightSolid height="0.7rem" width="0.7rem" fillColor="#cbd5e0" strokeWidth="0" strokeColor="currentColor"/>
                  <ActiveLink href="/about" exact  classes={``} text="About"/>
                </div>
                <div className="flex items-center gap-1">
                  <ArrowRightSolid height="0.7rem" width="0.7rem" fillColor="#cbd5e0" strokeWidth="0" strokeColor="currentColor"/>
                  <ActiveLink href="/contact" exact  classes={``} text="Contact"/>
                </div>
                <div className="flex items-center gap-1">
                  <ArrowRightSolid height="0.7rem" width="0.7rem" fillColor="#cbd5e0" strokeWidth="0" strokeColor="currentColor"/>
                  <ActiveLink href="/payments" exact  classes={``} text="Payments"/>
                </div>
            </div>
          </div>
          <div className={`max-w-[410px]`}>
            <div className={``}>
              <span className={`text-xl font-[500]`}>Top Destinations</span>
            </div>
            <div className={`sm:p-3 flex flex-col gap-2 px-3 py-2`}>
            <div className="flex items-center gap-1">
                  <ArrowRightSolid height="0.7rem" width="0.7rem" fillColor="#cbd5e0" strokeWidth="0" strokeColor="currentColor"/>
                  <ActiveLink href="#" exact  classes={``} text="Rishikesh"/>
                </div>
                <div className="flex items-center gap-1">
                  <ArrowRightSolid height="0.7rem" width="0.7rem" fillColor="#cbd5e0" strokeWidth="0" strokeColor="currentColor"/>
                  <ActiveLink href="#" exact  classes={``} text="Haridwar"/>
                </div>
                <div className="flex items-center gap-1">
                  <ArrowRightSolid height="0.7rem" width="0.7rem" fillColor="#cbd5e0" strokeWidth="0" strokeColor="currentColor"/>
                  <ActiveLink href="#" exact  classes={``} text="Dehradun"/>
                </div>
                <div className="flex items-center gap-1">
                  <ArrowRightSolid height="0.7rem" width="0.7rem" fillColor="#cbd5e0" strokeWidth="0" strokeColor="currentColor"/>
                  <ActiveLink href="#" exact  classes={``} text="Mussoorie"/>
                </div>
            </div>
          </div>
          <div className={`max-w-[410px]`}>
            <div className={``}>
              <span className={`text-xl font-[500]`}>Legal</span>
            </div>
            <div className={`sm:p-3 flex flex-col gap-2 px-3 py-2`}>
                <Link href='/legal/privacy-policy' className="flex items-center gap-1">
                  <ArrowRightSolid height="0.7rem" width="0.7rem" fillColor="#cbd5e0" strokeWidth="0" strokeColor="currentColor"/>
                  <ActiveLink href="#" exact  classes={``} text="Privacy Policy"/>
                </Link>
                <Link href='/legal/terms-condition' className="flex items-center gap-1">
                  <ArrowRightSolid height="0.7rem" width="0.7rem" fillColor="#cbd5e0" strokeWidth="0" strokeColor="currentColor"/>
                  <ActiveLink href="#" exact  classes={``} text="Terms & Condition"/>
                </Link>
                <Link href='/legal/refund-cancellation-policy' className="flex items-center gap-1">
                  <ArrowRightSolid height="0.7rem" width="0.7rem" fillColor="#cbd5e0" strokeWidth="0" strokeColor="currentColor"/>
                  <ActiveLink href="#" exact  classes={``} text="Refund & Cancellation Policy"/>
                </Link>
            </div>
          </div>
          <div className={`max-w-[410px]`}>
            <div className={``}>
              <span className={`text-xl font-[500]`}>GET IN TOUCH</span>
            </div>
            <div className={`sm:p-3 flex flex-col gap-2 px-3 py-2`}>
            <div className="flex items-center gap-2">
                  <div>
                    <DialerSolid height="1rem" width="1rem" fillColor="#cbd5e0" strokeWidth="0" strokeColor="currentColor"/>
                  </div>
                  <ActiveLink href="tel:+919953276022" exact  classes={``} text="+91 9953276022"/>
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <DialerSolid height="1rem" width="1rem" fillColor="#cbd5e0" strokeWidth="0" strokeColor="currentColor"/>
                  </div>
                  <ActiveLink href="tel:+919625992025" exact  classes={``} text="+91 9625992025"/>
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <MessageSolid height="1rem" width="1rem" fillColor="#cbd5e0" strokeWidth="0" strokeColor="currentColor"/>
                  </div>
                  <ActiveLink href="mailto:support@traveltrailholidays.com" exact  classes={``} text="support@traveltrailholidays.com"/>
                </div>
                <div className="flex  gap-2">
                  <div className={`mt-[0.20rem]`}>
                    <LocationSolid height="1rem" width="1rem" fillColor="#cbd5e0" strokeWidth="0" strokeColor="currentColor"/>
                  </div>
                  <ActiveLink href="https://www.google.com/maps/place/Travel+Trail+Holidays/@28.499434,77.311883,18z/data=!4m6!3m5!1s0x233345ea4f02dbf5:0x55345f187277ecd2!8m2!3d28.4994338!4d77.3118827!16s%2Fg%2F11y3rzvw5z?hl=en&entry=ttu" exact  classes={``} text="Office No - 35, Gali No. 03, Block B, Molarband Extn, Badarpur, New Delhi - 110044"/>
                </div>
            </div>
          </div>
        </div>

        <div className={`pt-5 w-full flex justify-between md:pb-5 mb-5 md:mb-0 flex-col text-center md:flex-row items-center gap-2 border-t-[1px]`}>
          <span className={``}>Copyright © 2024 <Link href={`/`} className={`hover:underline`}>Travel Trail Holidays</Link>. All Rights Reserved.</span>
          <span className={``}>
            <span>Designed with <span className={`text-custom-clp text-lg select-none`}>&#x2665;</span> by <Link href={process.env.DIWAKAR_JHA_LINK!} target="_blank" className={`text-custom-clp hover:underline`}>iamdkjha</Link>.</span>
          </span>
        </div>

      </Container>
    </Section>
  );
}

export default Footer;