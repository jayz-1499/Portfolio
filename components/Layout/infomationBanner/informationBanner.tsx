import * as React from 'react';
import Image from 'next/image';
import { AiOutlineMail, AiFillGithub } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { FiPhone, FiInstagram, FiFacebook } from 'react-icons/fi';

export interface InfomationBannerProps {}
type data = {
  icon: JSX.Element;
  content: string;
};
export default function InfomationBanner(props: InfomationBannerProps) {
  const info: data[] = [
    {
      icon: <AiOutlineMail className="" size={24} />,
      content: 'danhn@vmodev.com',
    },
    {
      icon: <FiInstagram className="" size={24} />,
      content: 'jayz1499',
    },
    {
      icon: <GoLocation className="" size={24} />,
      content: 'Ha Noi, Viet Nam',
    },
    {
      icon: <FiFacebook className="" size={24} />,
      content: 'fb.com/hanhatdan',
    },

    {
      icon: <FiPhone className="" size={24} />,
      content: '+84 967761999',
    },
    {
      icon: <AiFillGithub className="" size={24} />,
      content: 'jayz-1499',
    },
  ];
  return (
    <div className="">
      <div className="pt-10 flex items-center justify-center gap-10 mb-10">
        <div className="flex justify-end">
          <div className="relative w-[150px] h-[150px]">
            <Image
              src="/images/avatar.jpg"
              alt="errr"
              layout="fill"
              className="rounded-full"
            />
          </div>
        </div>
        <div className="">
          <p className="text-xl">Hi, I am Ha Nhat Dan</p>
          <p className="text-xl font-bold py-5 pt-5">Front End Developer</p>
          <p className="text-md pb-5">&quot;Welcome to my cave 🔥&quot;</p>
          {/* <ul className="grid grid-cols-2 gap-x-5">
            {info.map((items: data) => (
              <li className="flex items-center py-2 cursor-pointer">
                <span className="mr-2">{items.icon}</span> : {items.content}
              </li>
            ))}
          </ul> */}
        </div>
      </div>
    </div>
  );
}
