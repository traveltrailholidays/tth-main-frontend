import PaymentOptions from "@/components/Navlinks/Payments/PaymentOptions";
import PaymentsHeroSection from "@/components/Navlinks/Payments/PaymentsHeroSection";

export const metadata = {
  title: 'Payments - Travel Trail Holidays',
}

const page = () => {
  return (
    <main>
      <PaymentsHeroSection/>
      <PaymentOptions/>
    </main>
  )
}

export default page;