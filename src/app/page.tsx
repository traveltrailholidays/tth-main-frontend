import DestinationSection from "@/components/Navlinks/Home/DestinationSection";
import HeroSection from "@/components/Navlinks/Home/HeroSection";


const page = async () => {
  return (
    <main className='mt-16'>
      <HeroSection/>
      <DestinationSection/>
    </main>
  )
}

export default page;


