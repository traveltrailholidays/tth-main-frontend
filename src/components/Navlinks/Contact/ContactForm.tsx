'use client';


import { useState, ChangeEvent, FormEvent } from "react";
import styles from "@/stylesheets/custom.module.css";

import { IoIosMail, IoIosSend } from "react-icons/io";
import { FaFacebook, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import {FaXTwitter} from 'react-icons/fa6';

import { toast } from "react-hot-toast";

import Link from "next/link";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you can handle form submission, for example, send data to your backend
    
    // Reset form fields after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    try {
      const response = await fetch("api/contact", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // toaster
        toast.success('Messaage sent successfully');
        // Reset form fields after submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        console.error("Failed to submit form");
      }

      const { msg } = await response.json();
      console.log(msg);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleChange = async (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className={`max-w-[1500px] w-full flex flex-col md:flex-row md:items-center gap-20 md:gap-0`}>
        <div className={` bg-custom-shl dark:bg-custom-shd md:w-2/3 p-7 pr-10 rounded-md md:rounded-none md:rounded-l-md `}>
            <div className={`flex items-center justify-between`}>
                <span className={`${styles.box_heading} text-custom-clp font-[500]`}>Send us a message</span>
                <IoIosMail size={24} className="text-custom-txl dark:text-custom-txd"/>
            </div>
            <form onSubmit={handleSubmit}>
                <div className={`mt-10 flex flex-col md:gap-10 gap-5`}>
                    <div className={`flex flex-col md:flex-row gap-5 md:gap-10 justify-between`}>
                        <div className={`w-full flex flex-col gap-1`}>
                            <div className={`ml-[2px]`}>
                                <span>Your Name</span>
                            </div>
                            <input type="text" className={`w-full rounded-md border-[0.15rem] border-border outline-none bg-custom-sbl dark:bg-custom-sbd p-2`} name="name" value={formData.name} onChange={handleChange} />
                        </div>
                        <div className={`w-full flex flex-col gap-1`}>
                            <div className={`ml-[2px]`}>
                                <span>Email Address</span>
                            </div>
                            <input type="text" className={`w-full rounded-md border-[0.15rem] border-border outline-none bg-custom-sbl dark:bg-custom-sbd p-2`} name="email" value={formData.email} onChange={handleChange} />
                        </div>
                    </div>
                    <div className={`flex flex-col md:flex-row md:gap-10 gap-5 justify-between`}>
                        <div className={`w-full flex flex-col gap-1`}>
                            <div className={`ml-[2px]`}>
                                <span>Phone Number</span>
                            </div>
                            <input type="text" className={`w-full rounded-md border-[0.15rem] border-border outline-none bg-custom-sbl dark:bg-custom-sbd p-2`} name="phone" value={formData.phone} onChange={handleChange} />
                        </div>
                        <div className={`w-full flex flex-col gap-1`}>
                            <div className={`ml-[2px]`}>
                                <span>Subject</span>
                            </div>
                            <input type="text" className={`w-full rounded-md border-[0.15rem] border-border outline-none bg-custom-sbl dark:bg-custom-sbd p-2`} name="subject" value={formData.subject} onChange={handleChange} />
                        </div>
                    </div>
                    <div>
                        <div className={`w-full flex flex-col gap-1`}>
                            <div className={`ml-[2px]`}>
                                <span>Message</span>
                            </div>
                            <textarea rows={5} className={`w-full rounded-md border-[0.15rem] border-border outline-none bg-custom-sbl dark:bg-custom-sbd p-2 resize-none`} name="message" value={formData.message} onChange={handleChange} />
                        </div>
                    </div>
                </div>
                <div className={`mt-10 flex w-full flex-row-reverse`}>
                    <div className="flex gap-2 items-center justify-between border-custom-phl dark:border-border border-[2px] rounded-md p-2 hover:cursor-pointer hover:bg-custom-sbl hover:dark:bg-custom-sbd">
                      <button type="submit" className="font-[500] text-xl">Submit</button>
                      <IoIosSend size={24} className="text-custom-txl dark:text-custom-txd"/>
                    </div>
                </div>
            </form>
        </div>
        <div className={`bg-custom-clp text-white md:w-1/3 p-7 rounded-md md:rounded-none md:rounded-r-md h-full flex flex-col justify-between w-full`}>
            <div>
                <span className={`${styles.box_heading} font-[500]`}>Contact Information</span>
            </div>
            <div className={`flex w-full justify-center`}>
                <div className={`py-10`}>
                    <span>support@traveltrailholidays.com</span>
                </div>
            </div>
            <div className="flex gap-5">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href='https://www.facebook.com/profile.php?id=61558911416361'
                className="hover:cursor-pointer"
              >
                <FaFacebook size={20}/>
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href='https://www.linkedin.com/company/102316821/admin/feed/posts/?feedType=following' 
                className="hover:cursor-pointer"
              >
                <FaLinkedinIn size={20}/>
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href='https://twitter.com/TTrailHolidays' 
                className="hover:cursor-pointer"
              >
                <FaXTwitter size={20}/>
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href='https://www.instagram.com/traveltrailholidays/' 
                className="hover:cursor-pointer"
              >
                <FaInstagram size={20}/>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default ContactForm;