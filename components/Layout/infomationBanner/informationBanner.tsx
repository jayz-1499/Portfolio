import * as React from 'react';
import Image from 'next/image';


export interface InfomationBannerProps {}

export default function InfomationBanner(props: InfomationBannerProps) {

  return (
    <div className="">
      <div className="pt-10  md:flex md:items-center md:justify-center gap-10 mb-10">
        <div className="flex md:justify-end justify-center">
          <div className="relative w-[150px] h-[150px] rounded-full ring-4 ring-blue-500">
            <Image
              src="/images/avatar.jpg"
              alt="errr"
              layout="fill"
              className="rounded-full w-full "
            />
          </div>
        </div>
        <div className="text-center mt-5 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0">
          <p className="text-xl">Hi, I am Ha Nhat Dan</p>
          <p className="text-xl font-bold py-5 pt-5">Front End Developer</p>
          <p className="text-md pb-5">&quot;Welcome to my cave 🔥&quot;</p>
        </div>
      </div>
    </div>
  );
}
