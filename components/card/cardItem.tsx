import * as React from 'react';
import Image from 'next/image';

export interface CardItemProps {
    imageUrl: string;
    time?:string;
    major:string;
}

export default function CardItem(props: CardItemProps) {
    const { imageUrl, time,major } = props;
  return (
    <div className="bg-white flex items-center justify-center shadow-product rounded-[15px] transition hover:scale-105">
      <div className="px-5 py-5">
        <div className="relative w-[200px] h-[200px]">
          <Image
            src={imageUrl}
            alt="errr"
            layout="fill"
            className=""
          />
        </div>
        <div className="mt-8">
         {time && <p>Time: {time}.</p>}
          <p>{major}</p>
        </div>
      </div>
    </div>
  );
}
