"use client";

import Container from "@/components/ui/feature/Container";
import Section from "@/components/ui/feature/Section";
import PaymentsAccordion from '@/components/Navlinks/Payments/PaymentsAccordion';

import { FaPhoneAlt } from "react-icons/fa";

const PaymentOptions = () => {
  return (
    <Section classes={`w-full flex justify-center`}>
      <Container classes={`md:px-5 w-[99%] mt-24`}>

        

        <div className={`flex justify-between flex-col md:flex-row gap-10`}>
          <div className={`w-full`}>
            <div>
              <span className={`font-semibold text-lg`}>
                Select the desired payment option
              </span>
            </div>
            <div className="mt-5">
              <PaymentsAccordion />
            </div>
          </div>

          <div
            className={`rounded-md bg-custom-shl dark:bg-custom-phd p-10 max-w-[450px] w-full h-[300px]`}
          >
            <div>
              <div className={`text-custom-clp font-semibold text-xl`}>
                <span>Get Help</span>
              </div>
              <div className={`font-semibold text-3xl mt-3`}>
                <span>Have Any Query ?</span>
              </div>
              <div className={`text-[15px] mt-5`}>
                <div>
                  Need help with any payment related issue? Please feel free to
                  contact us!
                </div>
              </div>
              <div className={`text-[15px] mt-5`}>
                <div className={`flex items-center gap-5`}>
                  <div
                    className={`bg-custom-clp rounded-full w-16 h-16 flex justify-center items-center text-custom-txd`}
                  >
                    <FaPhoneAlt size={24}/>
                  </div>
                  <div>
                    <div>
                      <span className={`font-semibold text-base`}>Call Us</span>
                    </div>
                    <div>
                      <span className={`font-semibold text-lg`}>
                        +91 9625992025
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`text-custom-clp w-full flex justify-center py-20 px-2 text-center`}
        >
          <div>
            Please kindly provide a screenshot confirming your successful
            payment. Your cooperation is greatly appreciated.
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default PaymentOptions;
