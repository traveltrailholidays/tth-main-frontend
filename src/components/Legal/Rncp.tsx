'use client';

import Section from '../ui/feature/Section';
import Container from '../ui/feature/Container';

const Rncp = () => {
  return (
    <Section classes='flex justify-between'>
      <Container classes='mt-32 max-w-[1400px] w-full font-[500] flex flex-col gap-5 mb-20'>
        <div className='flex flex-col gap-5 '>
            <h1 className='text-3xl font-[600]'>Payment Policy:</h1>
            <p className='mt-5'>
                30% payment at the time of booking 
            </p>
            <p>
                70% Payment at the Journey Time
            </p>
        </div>
        <div className='flex flex-col gap-5 mt-10'>
            <h1 className='text-3xl font-[600]'>Cancellation Policy:</h1>
            <p className='mt-5'>
                Before 30 Days from the date of commencement= 25 % Cancellation Charges of Total Amount... (Total trip cost) ·  
            </p>
            <p>
                Before 30 - 15 Days from the date of Commencement = 40% Cancellation Charges of Total Amount.... (Total trip cost ) · 
            </p>
            <p>
                Before 15 Days from the date of Commencement = 50% Cancellation Charges of (Total trip cost) · 
            </p>
            <p>
                Before 7 days or less from the date of Commencement = Full Cancellation Charges will be applicable (Total trip cost) 
            </p>
            <p>
                In Case passenger is no show at the time of departure, 100% of tour cost shall be detected. Even If Trip is cancelled on the same day of date booking then 10%+GST of the total trip cost will be deducted /applicable as cancellation Charges.
            </p>
        </div>
      </Container>
    </Section>
  )
}

export default Rncp;
