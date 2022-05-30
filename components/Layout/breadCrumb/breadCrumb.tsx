import * as React from 'react';
import { MdWorkOutline } from 'react-icons/md';
import { BiUserCircle,BiHomeAlt } from 'react-icons/bi';
import { MdOutlinePermContactCalendar } from 'react-icons/md';

export interface BreadScrumbProps {}

export default function BreadScrumb(props: BreadScrumbProps) {
  return (
    <div className="mb-5 border-t border-[#8E8E8E] flex items-center justify-evenly">
      <div className="border-t border-black pt-2 flex items-center">
      <BiUserCircle size="20" />
        <span>About</span>
      </div>
      <div className="text-[#8E8E8E] pt-2 flex items-center">
      <MdWorkOutline size="20" />
        <span>Projects</span>
      </div>
      <div className="text-[#8E8E8E] pt-2 flex items-center">
        <MdOutlinePermContactCalendar size="20" />
        <span>Contact</span>
      </div>
    </div>
  );
}
