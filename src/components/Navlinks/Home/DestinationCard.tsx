'use client';

interface CardProps {
  locationName: string;
  locationImg: string;
}

export default function DestinationCard(props: CardProps) {
  return (
    <>
      <div className="flex bg-custom-shl shadow-md rounded max-w-[350px] w-[90%] flex-col hover:scale-105 card_animation transition">
        <img
          src={props.locationImg}
          alt=""
          className="rounded-t select-none w-full h-60"
        />
        <div className="flex justify-center items-center p-3">
          <span className="font-semibold text-xl">{props.locationName}</span>
        </div>
      </div>
    </>
  );
}
