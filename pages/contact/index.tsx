import * as React from 'react';
import { AiOutlineMail, AiFillGithub } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { FiPhone, FiInstagram, FiFacebook } from 'react-icons/fi';
export interface ContactProps {}
type data = {
  icon: JSX.Element;
  content: string;
};
export default function Contact(props: ContactProps) {
  const info: data[] = [
    {
      icon: <GoLocation className="" size={24} />,
      content: 'Ha Noi, Viet Nam',
    },
    {
      icon: <AiOutlineMail className="" size={24} />,
      content: 'danhn@vmodev.com',
    },
    {
      icon: <FiInstagram className="" size={24} />,
      content: 'jayz1499',
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
    <div className="flex justify-center h-screen">
      <div className="">
        {info.map((items: data,index: number) => (
          <div key={index} className="flex items-center cursor-pointer py-5">
            <span className="">{items.icon}</span> : {items.content}
          </div>
        ))}
      </div>
    </div>
  );
}
