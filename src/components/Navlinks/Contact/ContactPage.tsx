import ContactForm from "@/components/Navlinks/Contact/ContactForm";
import OfficeLocation from "@/components/Navlinks/Contact/OfficeLocation";
import Section from "@/components/ui/feature/Section";
import Container from "@/components/ui/feature/Container";



export default function ContactPage() {
  return (
    <Section classes={`w-full flex justify-center`}>
        <Container classes={`w-[99%] flex flex-col items-center py-24 px-5 gap-24`}>
            <ContactForm/>
            <OfficeLocation height="450px" width="1500px"/>
        </Container>
    </Section>
  )
}
