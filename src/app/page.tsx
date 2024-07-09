import CustomPackages from "@/components/Navlinks/Home/CustomPackages";
import DestinationSection from "@/components/Navlinks/Home/DestinationSection";
import HeroSection from "@/components/Navlinks/Home/HeroSection";


const page = async () => {
  return (
    <main className='mt-16'>
      <HeroSection/>
      <DestinationSection/>
      <CustomPackages/>
    </main>
  )
}

export default page;


