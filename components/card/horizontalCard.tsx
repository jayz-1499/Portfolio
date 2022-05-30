import * as React from 'react';
import Image from 'next/image';

export interface HorizontalCardProps {
  imageUrl: string;
  content: string[];
}

export default function HorizontalCard(props: HorizontalCardProps) {
  const { imageUrl, content} = props;

  return (
    <div className="bg-white flex items-center justify-start shadow-product rounded-[15px] transition hover:scale-105">
      <div className="px-5 py-5 flex items-center gap-5">
        <div className="relative w-[100px] h-[100px]">
          <Image src={imageUrl} alt="errr" layout="fill" className="" />
        </div>
        <div className="">
            {content.map((item:string,index:number) =>(
                <p key={index}>{item}</p>
            ))}
        </div>
      </div>
    </div>
  );
}
