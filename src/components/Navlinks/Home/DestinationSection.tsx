"use client";

import { FaBuilding, FaCarAlt } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { IoTime } from "react-icons/io5";
import { useEffect, useState } from "react";
import DestinationCard from "./DestinationCard";
import ExplorePackages from "./ExplorePackages";


interface Package {
  _id:string,
  title: string;
  description: string;
  nights: number;
  days: number;
  regularPrice: number;
  discount: number;
  location:string;
  imageUrls:string;
  daysActivities:[];

}

export default function DestinationSection() {
  const [packages, setPackages] = useState<Package[]>([]);

  useEffect(() => {
    const allPackages = async () => {
      const res = await fetch("/api/all-packages");
      const data = await res.json();
      if (data.success === false) {
        console.log("error in fetching data");
        return;
      }
      setPackages(data);
    };
    allPackages();
  }, []);


  // console.log(packages[0]._id);
  

  return (
    <>
      <div className="w-full flex justify-center items-center">
        <div className="max-w-[1800px] w-[90%] py-12 sm:py-20">
          <div className="flex flex-col items-center gap-3">
            <div className="text-center">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
                Explore the Beautiful Places Like Never Before
              </span>
            </div>
            <div className="text-center">
              <span className="text-sm sm:text-base lg:text-lg text-gray-500">
                Personalised, well-crafted tour packages for best experiences
              </span>
            </div>
            <div className="text-center">
              <span className="text-custom-clp text-2xl sm:text-3xl font-bold">
                TOP DESTINATIONS
              </span>
            </div>
          </div>
          <div className=" p-6 mt-10 flex flex-col justify-around gap-10 flex-wrap w-full sm:flex-row ">
            {
              packages.map((allpackage,index )=>{
                return(
                  <ExplorePackages key={index}
                  title={allpackage.title}
                  id = {allpackage._id}
                  description={allpackage.description}
                  days={allpackage.days}
                  nights={allpackage.nights}
                  regularPrice={allpackage.regularPrice}
                  discount={allpackage.discount}
                  imageUrls={allpackage.imageUrls}
                  location={allpackage.location}
                  daysActivities={allpackage.daysActivities}
                />
                )
              })
            }

               {/*
            <ExplorePackages
              name="Kedarnath"
              desc="The Temple at Kedarnath presents an imposing sight, standing in middle of a wide plateau surrounded by lofty snow covered peaks. The temple was originally built in 8th century A.D. by Jagad Guru Adi Shankaracharya and stands adjacent to site of an even earlier temple built by the Pandavas."
            />
            <ExplorePackages
              name="Kedarnath"
              desc="The Temple at Kedarnath presents an imposing sight, standing in middle of a wide plateau surrounded by lofty snow covered peaks. The temple was originally built in 8th century A.D. by Jagad Guru Adi Shankaracharya and stands adjacent to site of an even earlier temple built by the Pandavas."
            />
            <ExplorePackages
              name="Kedarnath"
              desc="The Temple at Kedarnath presents an imposing sight, standing in middle of a wide plateau surrounded by lofty snow covered peaks. The temple was originally built in 8th century A.D. by Jagad Guru Adi Shankaracharya and stands adjacent to site of an even earlier temple built by the Pandavas."
            />
            <ExplorePackages
              name="Kedarnath"
              desc="The Temple at Kedarnath presents an imposing sight, standing in middle of a wide plateau surrounded by lofty snow covered peaks. The temple was originally built in 8th century A.D. by Jagad Guru Adi Shankaracharya and stands adjacent to site of an even earlier temple built by the Pandavas."
            />
            <ExplorePackages
              name="Kedarnath"
              desc="The Temple at Kedarnath presents an imposing sight, standing in middle of a wide plateau surrounded by lofty snow covered peaks. The temple was originally built in 8th century A.D. by Jagad Guru Adi Shankaracharya and stands adjacent to site of an even earlier temple built by the Pandavas."
            />
            <ExplorePackages
              name="Kedarnath"
              desc="The Temple at Kedarnath presents an imposing sight, standing in middle of a wide plateau surrounded by lofty snow covered peaks. The temple was originally built in 8th century A.D. by Jagad Guru Adi Shankaracharya and stands adjacent to site of an even earlier temple built by the Pandavas."
            />
            <ExplorePackages
              name="Kedarnath"
              desc="The Temple at Kedarnath presents an imposing sight, standing in middle of a wide plateau surrounded by lofty snow covered peaks. The temple was originally built in 8th century A.D. by Jagad Guru Adi Shankaracharya and stands adjacent to site of an even earlier temple built by the Pandavas."
            />
            <ExplorePackages
              name="Kedarnath"
              desc="The Temple at Kedarnath presents an imposing sight, standing in middle of a wide plateau surrounded by lofty snow covered peaks. The temple was originally built in 8th century A.D. by Jagad Guru Adi Shankaracharya and stands adjacent to site of an even earlier temple built by the Pandavas."
            />
            <ExplorePackages
              name="Kedarnath"
              desc="The Temple at Kedarnath presents an imposing sight, standing in middle of a wide plateau surrounded by lofty snow covered peaks. The temple was originally built in 8th century A.D. by Jagad Guru Adi Shankaracharya and stands adjacent to site of an even earlier temple built by the Pandavas."
            />
            <ExplorePackages
              name="Kedarnath"
              desc="The Temple at Kedarnath presents an imposing sight, standing in middle of a wide plateau surrounded by lofty snow covered peaks. The temple was originally built in 8th century A.D. by Jagad Guru Adi Shankaracharya and stands adjacent to site of an even earlier temple built by the Pandavas."
            />
            */}
            {/* <ExplorePackages
              name="Kedarnath"
              desc="The Temple at Kedarnath presents an imposing sight, standing in middle of a wide plateau surrounded by lofty snow covered peaks. The temple was originally built in 8th century A.D. by Jagad Guru Adi Shankaracharya and stands adjacent to site of an even earlier temple built by the Pandavas."
            /> 
            */}
          </div>
        </div>
      </div>
    </>
  );
}
