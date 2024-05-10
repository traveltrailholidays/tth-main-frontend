
export default function HeroSection() {
  const PHONE_NUMBER = process.env.WHATSAPP_NUMBER;

  return (
    <>
      <div className="mt-[64px] w-full flex justify-center items-center relative">
        <div className="w-full">
          <img
            src="/images/homeHeroBg.jpg"
            alt="heroBg"
            className="w-full h-[70vh] object-cover overflow-hidden select-none"
          />
        </div>
        <div className="bg-black bg-opacity-50 w-full h-full absolute flex items-center justify-center flex-col gap-5">
          <div className="flex flex-wrap justify-center w-[90%]">
            <div className="text-white text-4xl sm:text-6xl lg:text-8xl font-semibold flex flex-wrap gap-2 select-none">
              <span>Explore</span>
              <span>the</span>
              <span className="relative">
                World
                <img
                  decoding="async"
                  src="https://bracketweb.com/trevlowp/wp-content/uploads/2023/11/slider-1-shape-2.png"
                  alt="alt"
                  title="slider-1-shape-2"
                  className="absolute lg:-bottom-3 -bottom-1 right-0"
                ></img>
              </span>
            </div>
          </div>
          <div className="mt-5">
            <a
              href={`https://api.whatsapp.com/send?phone=${PHONE_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF5956] px-5 py-3 rounded text-white font-semibold"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
