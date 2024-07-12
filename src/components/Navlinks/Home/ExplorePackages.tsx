'use client';

import React from 'react'
import { CarTaxiFront, Clock3 } from 'lucide-react';
import { Hotel } from 'lucide-react';
import { FaBuilding, FaCarAlt } from 'react-icons/fa';
import { FaMapLocationDot } from 'react-icons/fa6';
import { GiForkKnifeSpoon } from 'react-icons/gi';
import { IoTime } from 'react-icons/io5';
import Link from 'next/link';

interface ExplorePackagesProps  {
    id:string,
    title: string,
    description: string,
    days : number,
    nights:number,
    regularPrice : number,
    discount:number,
    imageUrls:string,
    location:string,
    daysActivities:[],
}


const ExplorePackages: React.FC<ExplorePackagesProps> = ({id,title,description,imageUrls,location,days,nights,daysActivities,regularPrice,discount})=> {
    const truncatedDesc = description.length > 100 ? `${description.substring(0, 100)}.............` : description;
    const Discounted = (discount/100)*regularPrice;
    const totalDiscount = regularPrice-Discounted;
  return (
    <Link href={`/package/${id}`} className="max-w-[500px] w-[95%] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className=" overflow-hidden  relative rounded-t-lg ">
          <a href="#" className="w-full  ">
            <img
              className=" transition-all duration-700 ease-in-out hover:scale-110 object-cover overflow-hidden w-full rounded-t-lg"
              src={imageUrls}
              alt="product image"
            />
          </a>
        </div>
        <div className="px-5 pb-5">
          <a href="#">
            <h1 className=" mt-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h1>
            <p className=' mt-2'> {truncatedDesc} </p>
          </a>
          <div className="flex justify-between items-center mt-2.5 mb-5">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              <svg
                className="w-4 h-4 text-yellow-300 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                5.0
              </span>
            </div>
            <div className=' flex text-md gap-2 text-slate-700'>
              <FaBuilding/>
              <FaCarAlt/>
              <FaMapLocationDot/>
              <GiForkKnifeSpoon/>
              
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className=" flex gap-1 items-center text-md font-semibold text-gray-900 dark:text-white">
              <IoTime /> {days} days /{nights} nights
            </span>
            <span className="  flex gap-2 text-lg font-bold  dark:text-white ">
              <span className=' text-red-500 line-through'>{regularPrice}</span>
              <span className=' text-green-500 '> {totalDiscount} </span>
            </span>
            {/* <a href="#" className="text-white bg-[#FF5956] p-3 rounded-lg">
              Continue
            </a> */}
          </div>
        </div>
      </Link>
  )
}

export default ExplorePackages