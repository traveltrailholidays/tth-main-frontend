import AboutHeroSection from "@/components/Navlinks/About/AboutHeroSectio";
import AboutInfoSection from "@/components/Navlinks/About/AboutInfoSection";
import AboutSetUsApart from "@/components/Navlinks/About/AboutSetUsApart";

export const metadata = {
  title: 'About Us - Travel Trail Holidays',
}

const page = () => {
  return (
    <main>
      <AboutHeroSection/>
      <AboutInfoSection/>
      <AboutSetUsApart/>
    </main>
  )
}

export default page;