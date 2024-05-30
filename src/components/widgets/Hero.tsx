import { HeroProps } from '~/shared/types';
import CTA from '../common/CTA';
import coverImageWeb from '../../assets/images/backgroundFront.png';
import hotelImageWeb from '../../assets/images/hotel.png';
import restaurantImageWeb from '../../assets/images/restaurant.png';
import mobileImageWeb from '../../assets/images/mobile.png';
import coverImageMobile from '../../assets/images/Front-Mobile.png';
import hotelImageMobile from '../../assets/images/Front-Hotel.png';
import restaurantImageMobile from '../../assets/images/Front-Restaurant.png';
import mobileAppImageMobile from '../../assets/images/Front-MobileApp.png';
import { Carousel } from 'flowbite-react';
import Image from 'next/image';

const Hero = ({ title, subtitle, mainTitle, callToAction, callToAction2, appName }: HeroProps) => {
  return (
    <section id="heroOne">
      <Carousel
        indicators={false}
        className={`absolute  mx-auto max-w-8xl h-screen  bg-cover bg-center bg-black bg-opacity-90`}
      >
        <Image src={coverImageWeb} alt="Background Image" />
        <Image src={hotelImageWeb} alt="Background Image" />
        <Image src={restaurantImageWeb} alt="Background Image" />
        <Image src={mobileImageWeb} alt="Background Image" />
      </Carousel>
      <Carousel
        indicators={false}
        className={`absolute lg:hidden xl:hidden 2xl:hidden mx-auto max-w-8xl h-screen  bg-cover bg-center bg-black bg-opacity-90`}
      >
        <Image src={coverImageMobile} alt="Background Image" />
        <Image src={hotelImageMobile} alt="Background Image" />
        <Image src={restaurantImageMobile} alt="Background Image" />
        <Image src={mobileAppImageMobile} alt="Background Image" />
      </Carousel>
      <div className="relative w-full bg-black h-screen bg-opacity-70 flex md:justify-center md:items-center md:pt-0 lg:pt-0 pt-20">
        <div>
          <div className="mx-auto max-w-4xl align-middle px-6 justify-center text-center ">
            {mainTitle && (
              <p className="leading-tighter  mb-6 text-lg text-white tracking-tighter md:text-lg lg:text-lg">
                {mainTitle}
              </p>
            )}
            {title && appName && (
              <div className="mb-6">
                <span className="leading-tighter font-heading mb-6 text-4xl text-amber-500 font-bold tracking-tighter md:text-5xl lg:text-5xl">
                  {appName}
                </span>{' '}
                &nbsp;
                <span className="leading-tighter font-heading mb-6 text-4xl text-white font-bold tracking-tighter md:text-5xl lg:text-5xl">
                  {title}
                </span>
              </div>
            )}
            <div className="mx-auto max-w-3xl">
              {subtitle && <p className="mb-6 text-xl font-normal text-slate-400">{subtitle}</p>}
              <div className="flex max-w-none flex-col flex-nowrap gap-4 px-4 sm:flex-row sm:justify-center">
                {callToAction && <CTA callToAction={callToAction} linkClass="btn btn-primary" />}
                {callToAction2 && <CTA callToAction={callToAction2} linkClass="btn" />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
