
import ContactHeroSection from "@/components/Navlinks/Contact/ContactHeroSection";
import ContactPage from "@/components/Navlinks/Contact/ContactPage";

export const metadata = {
  title: 'Contact Us - Travel Trail Holidays',
}

const page = () => {
  return (
    <main>
      <ContactHeroSection/>
      <ContactPage/>
    </main>
  )
}

export default page;