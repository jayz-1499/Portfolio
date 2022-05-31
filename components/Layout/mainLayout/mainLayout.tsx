import * as React from 'react';
import InfomationBanner from '../infomationBanner/informationBanner';
import BreadScrumb from '../breadCrumb/breadCrumb';

export default function MainLayout({ children }: { children: JSX.Element }) {
  return (
    <div>
      <div className="bg-image"></div>
      <div className="relative z-50">
        <div className="mx-0 sm:mx-0 md:mx-0 lg:mx-[20%] xl:mx-[25%] bg-white">
          <InfomationBanner />
          <div className="px-5">
            <BreadScrumb />
          </div>
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}
