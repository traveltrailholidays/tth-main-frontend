
import DestinationCard from "./DestinationCard"

export default function DestinationSection() {
  return (
    <>
      <div className="w-full flex justify-center items-center">
        <div className="max-w-[1800px] w-[90%] py-12 sm:py-20">
          <div className="flex flex-col items-center gap-3">
            <div className="text-center">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold">Explore the Beautiful Places Like Never Before</span>
            </div>
            <div className="text-center">
              <span className="text-sm sm:text-base lg:text-lg text-gray-500">Personalised, well-crafted tour packages for best experiences</span>
            </div>
            <div className="text-center">
              <span className="text-custom-clp text-2xl sm:text-3xl font-bold">TOP DESTINATIONS</span>
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-10 text-black">
            <div className="flex justify-center flex-wrap xl:flex-nowrap gap-10">
              <DestinationCard locationName="Dehradun" locationImg="https://images.unsplash.com/photo-1601863239665-87cf0f4fbc38?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
              <DestinationCard locationName="Mussoorie" locationImg="https://img.cdn.zostel.com/blog_photo/109_Reception_01.jpg"/>
              <DestinationCard locationName="Rishikesh" locationImg="https://hostelgeeks.com/wp-content/uploads/2022/08/best-hostels-in-rishikesh-india.jpg"/>
              <DestinationCard locationName="Haridwar" locationImg="https://www.tripsavvy.com/thmb/l_8mGpbABJtXL6F7q6Q2vTn2TXs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-450780637_Darkroom-1aa87b7388274f03a8bc49e7b2148f3a.jpg"/>
            </div>
            <div className="flex justify-center flex-wrap lg:flex-nowrap gap-10">
              <DestinationCard locationName="Dhanoulti" locationImg="https://www.campawara.com/wp-content/uploads/2022/04/Awara-23-950x534.jpg"/>
              <DestinationCard locationName="Chakrata" locationImg="https://upload.wikimedia.org/wikipedia/commons/2/2a/Chakrata_small.JPG"/>
              <DestinationCard locationName="Kanatal" locationImg="https://assets.traveltriangle.com/blog/wp-content/uploads/2016/11/Kanatal-resort.jpg"/>
              <DestinationCard locationName="Nainital" locationImg="https://www.whereandwhen.net/site/images/illustration/nainital.jpg"/>
            </div>
            <div className="flex justify-center flex-wrap lg:flex-nowrap gap-10">
              <DestinationCard locationName="Jim Corbett" locationImg="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Bengal-Tiger_Corbett_Uttarakhand_Dec-2013.jpg/800px-Bengal-Tiger_Corbett_Uttarakhand_Dec-2013.jpg"/>
              <DestinationCard locationName="Ranikhet" locationImg="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/4c/0a/b9/xomotel-ranikhet-heights.jpg?w=700&h=-1&s=1"/>
              <DestinationCard locationName="Almora" locationImg="https://assets.cntraveller.in/photos/60ba24e4f27d46df614fc972/16:9/w_1024%2Cc_limit/Imperial-Heights-2.jpg"/>
              <DestinationCard locationName="Mukteshwaram" locationImg="https://images.nativeplanet.com/te/img/2019/01/mukteswar2-1548315039.jpg"/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}