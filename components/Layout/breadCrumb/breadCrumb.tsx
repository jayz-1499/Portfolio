import * as React from 'react';
import { MdWorkOutline } from 'react-icons/md';
import { BiUserCircle,BiHomeAlt } from 'react-icons/bi';
import { MdOutlinePermContactCalendar } from 'react-icons/md';
import { useRouter } from 'next/router';
import Link from 'next/link';

export interface BreadScrumbProps {}

export default function BreadScrumb(props: BreadScrumbProps) {
  const router = useRouter();
  return (
    <div className="mb-5 border-t border-[#8E8E8E] flex items-center justify-evenly">
      <Link href="/">
      <div className={`${router.pathname === '/'? "border-t border-black":"text-[#8E8E8E]"} pt-2 flex items-center cursor-pointer`}>
      <BiUserCircle size="20" />
        <span>About</span>
      </div>
      </Link>
      <Link href="/projects">
      <div className={`${router.pathname === '/projects'? "border-t border-black":"text-[#8E8E8E]"} pt-2 flex items-center cursor-pointer`}>
      <MdWorkOutline size="20" />
        <span>Projects</span>
      </div>
      </Link>
      <Link href="/contact">
      <div className={`${router.pathname === '/contact'? "border-t border-black":"text-[#8E8E8E]"} pt-2 flex items-center cursor-pointer`}>
        <MdOutlinePermContactCalendar size="20" />
        <span>Contact</span>
      </div>
      </Link>
    </div>
  );
}
