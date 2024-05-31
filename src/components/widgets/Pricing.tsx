// 'use client';

// import { CallToActionType, PricingProps } from '~/shared/types';
// import CTA from '../common/CTA';
// import Headline from '../common/Headline';
// import WidgetWrapper from '../common/WidgetWrapper';
// import ItemGrid from '../common/ItemGrid';
// import { IconCheck } from '@tabler/icons-react';
// import { useState } from 'react';
// import Button from '../common/Button';

// const Pricing = ({ header, prices, id, hasBackground = false }: PricingProps) => {
//   return (
//     <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="">
//       {header && <Headline header={header} containerClass="max-w-5xl" titleClass="text-2xl sm:text-3xl" />}
//       <div className="flex items-stretch justify-center">
//         <div className="grid grid-cols-3 gap-3 dark:text-white sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
//           {prices &&
//             prices.map(
//               ({ title, subtitle, price, period, items, callToAction, hasRibbon = false, ribbonTitle }, index) => (
//                 <div
//                   className="col-span-3 mx-auto flex w-full sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1"
//                   key={`pricing-${index}`}
//                 >
//                   {price && period && (
//                     <div className="card max-w-sm flex flex-col justify-between text-center">
//                       {hasRibbon && ribbonTitle && (
//                         <div className="absolute right-[-5px] rtl:right-auto rtl:left-[-5px] top-[-5px] z-[1] h-[100px] w-[100px] overflow-hidden text-right">
//                           <span className="absolute top-[19px] right-[-21px] rtl:right-auto rtl:left-[-21px] block w-full rotate-45 rtl:-rotate-45 bg-green-700 text-center text-[10px] font-bold uppercase leading-5 text-white shadow-[0_3px_10px_-5px_rgba(0,0,0,0.3)] before:absolute before:left-0 before:top-full before:z-[-1] before:border-[3px] before:border-r-transparent before:border-b-transparent before:border-l-green-800 before:border-t-green-800 before:content-[''] after:absolute after:right-0 after:top-full after:z-[-1] after:border-[3px] after:border-l-transparent after:border-b-transparent after:border-r-green-800 after:border-t-green-800 after:content-['']">
//                             {ribbonTitle}
//                           </span>
//                         </div>
//                       )}
//                       <div className="px-2 py-0">
//                         {title && (
//                           <h3 className="text-center text-xl font-semibold uppercase leading-6 tracking-wider mb-2">
//                             {title}
//                           </h3>
//                         )}
//                         {subtitle && (
//                           <p className="font-light sm:text-lg text-gray-600 dark:text-slate-400">{subtitle}</p>
//                         )}
//                         <div className="my-8">
//                           <div className="flex items-center justify-center text-center mb-1">
//                             <span className="text-5xl">$</span>
//                             <span className="text-6xl font-extrabold">{price}</span>
//                           </div>
//                           <span className="text-base leading-6 lowercase text-gray-600 dark:text-slate-400">
//                             {period}
//                           </span>
//                         </div>
//                         {items && (
//                           <div className="my-8 md:my-10 space-y-2 text-left">
//                             <ItemGrid
//                               conditionApply
//                               id={id}
//                               items={items}
//                               columns={1}
//                               defaultIcon={IconCheck}
//                               containerClass="gap-2 md:gap-y-2"
//                               panelClass="flex items-start space-x-2"
//                               iconClass="w-4 h-4 mt-1.5 mr-2 rtl:mr-0 rtl:ml-2 mr-1.5 flex items-center justify-center rounded-full border-2  text-white dark:text-slate-200"
//                             />
//                           </div>
//                         )}
//                       </div>
//                       {callToAction && (
//                         <Button
//                           callToAction={callToAction as CallToActionType}
//                           linkClass={`btn ${hasRibbon ? 'btn-primary' : ''}`}
//                         />
//                       )}
//                     </div>
//                   )}
//                 </div>
//               ),
//             )}
//         </div>
//       </div>
//     </WidgetWrapper>
//   );
// };

// export default Pricing;

'use client';

import { CallToActionType, Price, PricingProps } from '~/shared/types';
import Headline from '../common/Headline';
import WidgetWrapper from '../common/WidgetWrapper';
import ItemGrid from '../common/ItemGrid';
import { IconCheck } from '@tabler/icons-react';
import { useState, useEffect } from 'react';
import Button from '../common/Button';
import { getAllLicense } from '~/apis/license';
import { appLinks } from '~/shared/data/global.data';
import CTA from '../common/CTA';
import CryptoJS from 'crypto-js';

const Pricing = ({ header, prices, id, hasBackground = false }: PricingProps) => {
  const [licenseOrginData, setlicenseOrginData] = useState([]);
  const [licenseData, setLicenseData] = useState<Array<Price>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedTab, setSelectedTab] = useState<'Month' | 'Annual'>('Month');

  useEffect(() => {
    getAllLicense()
      .then(async (data) => {
        setlicenseOrginData(data.result.license);
        const convertedData = await convertData(data.result.license, 'Month');
        setLicenseData(convertedData);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to fetch license data');
        setLoading(false);
      });
  }, []);

  const convertData = (
    response: {
      id: number;
      numberOfDays: number;
      name: string;
      monthPrice: any;
      features: string | string[];
      freeTrail: any;
      hasTrail: boolean;
      yearPrice: number;
      perPropertyPrice: string;
      perRoomPrice: string;
    }[],
    tabType: string,
  ) => {
    const prices = response.map(
      (
        license: {
          id: number;
          numberOfDays: number;
          name: string;
          monthPrice: any;
          features: string | string[];
          freeTrail: any;
          hasTrail: boolean;
          yearPrice: number;
          perPropertyPrice: string;
          perRoomPrice: string;
        },
        index: number,
      ) => {
        const encryptedLicenceId = CryptoJS.AES.encrypt(JSON.stringify(license.id), 'qwerty').toString();
        const encryptedPlanPeriod = CryptoJS.AES.encrypt(JSON.stringify(selectedTab), 'qwerty').toString();
        return {
          title: license.name.toLowerCase(),
          subtitle: `Optimal choice for personal use`,
          price: tabType === 'Month' ? license.monthPrice : license.yearPrice,
          period: tabType === 'Month' ? 'per month' : 'per year',
          items: [
            {
              description: 'Hotel Service Application.',
              access: license.features.includes('HOTEL'),
            },
            {
              description: 'House Keeping Service Application.',
              access: license.features.includes('HOUSEKEEPING'),
            },
            {
              description: 'Inventory Service Application.',
              access: license.features.includes('INVENTORY'),
            },
            {
              description: 'Restaurant Service Application.',
              access: license.features.includes('RESTAURANT'),
            },
            {
              description: 'Reports & Analytics.',
              access: license.features.includes('REPORTS'),
            },
            {
              description: 'Mobile Application.',
              access: license.features.includes('WEB_WIDGET'),
            },
            {
              description: `Additional Property Charge $${license?.perPropertyPrice}/room.`,
              access: true,
            },
            {
              description: `Additional Room Charge $${license?.perRoomPrice}/room.`,
              access: true,
            },
          ],
          callToAction: {
            targetBlank: true,
            text: license.hasTrail ? `Free ${license.numberOfDays}-day trial` : 'Get started',
            href: `${appLinks.adminPortal}?lId=${license.id}&lPeriod=${selectedTab}`,
          },
          hasRibbon: index === 1 ? true : false,
          ribbonTitle: 'Popular',
        };
      },
    );
    return prices;
  };

  const handleTabChange = async (tab: 'Month' | 'Annual') => {
    setSelectedTab(tab);
    const convertedData = await convertData(licenseOrginData, tab);
    setLicenseData(convertedData);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="">
      {header && <Headline header={header} containerClass="max-w-5xl" titleClass="text-2xl sm:text-3xl" />}
      <div className="flex justify-center">
        <button
          type="button"
          className={`${selectedTab === 'Month' ? 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' : 'button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'}`}
          onClick={() => handleTabChange('Month')}
        >
          Month
        </button>
        <button
          type="button"
          className={`tab-btn ${selectedTab === 'Annual' ? 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' : 'button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'}`}
          onClick={() => handleTabChange('Annual')}
        >
          Annual
        </button>
      </div>
      <div className="flex items-stretch justify-center">
        <div className="grid grid-cols-3 gap-3 dark:text-white sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {licenseData &&
            licenseData.map(
              ({ title, subtitle, price, period, items, callToAction, hasRibbon = false, ribbonTitle }, index) => (
                <div
                  className="col-span-3 mx-auto flex w-full sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1"
                  key={`pricing-${index}`}
                >
                  {/* {price && period && ( */}
                  <div className="card max-w-sm flex flex-col justify-between text-center">
                    {hasRibbon && ribbonTitle && (
                      <div className="absolute right-[-5px] rtl:right-auto rtl:left-[-5px] top-[-5px] z-[1] h-[100px] w-[100px] overflow-hidden text-right">
                        <span className="absolute top-[19px] right-[-21px] rtl:right-auto rtl:left-[-21px] block w-full rotate-45 rtl:-rotate-45 bg-green-700 text-center text-[10px] font-bold uppercase leading-5 text-white shadow-[0_3px_10px_-5px_rgba(0,0,0,0.3)] before:absolute before:left-0 before:top-full before:z-[-1] before:border-[3px] before:border-r-transparent before:border-b-transparent before:border-l-green-800 before:border-t-green-800 before:content-[''] after:absolute after:right-0 after:top-full after:z-[-1] after:border-[3px] after:border-l-transparent after:border-b-transparent after:border-r-green-800 after:border-t-green-800 after:content-['']">
                          {ribbonTitle}
                        </span>
                      </div>
                    )}
                    <div className="px-2 py-0">
                      {title && (
                        <h3 className="text-center text-xl font-semibold uppercase leading-6 tracking-wider mb-2">
                          {title}
                        </h3>
                      )}
                      {subtitle && (
                        <p className="font-light sm:text-lg text-gray-600 dark:text-slate-400">{subtitle}</p>
                      )}
                      <div className="my-8">
                        <div className="flex items-center justify-center text-center mb-1">
                          <span className="text-5xl">$</span>
                          <span className="text-6xl font-extrabold">{price}</span>
                        </div>
                        <span className="text-base leading-6 lowercase text-gray-600 dark:text-slate-400">
                          {period}
                        </span>
                      </div>
                      {items && (
                        <div className="my-8 md:my-10 space-y-2 text-left">
                          <ItemGrid
                            conditionApply
                            id={id}
                            items={items}
                            columns={1}
                            defaultIcon={IconCheck}
                            containerClass="gap-2 md:gap-y-2"
                            panelClass="flex items-start space-x-2"
                            iconClass="w-4 h-4 mt-1.5 mr-2 rtl:mr-0 rtl:ml-2 mr-1.5 flex items-center justify-center rounded-full border-2  text-white dark:text-slate-200"
                          />
                        </div>
                      )}
                    </div>
                    {callToAction && (
                      <CTA
                        callToAction={callToAction as CallToActionType}
                        linkClass={`btn ${hasRibbon ? 'btn-primary' : ''}`}
                      />
                    )}
                  </div>
                  {/* )} */}
                </div>
              ),
            )}
        </div>
      </div>
    </WidgetWrapper>
  );
};

export default Pricing;
