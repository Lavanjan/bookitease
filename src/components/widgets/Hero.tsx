import Image from 'next/image';
import { HeroProps } from '~/shared/types';
import CTA from '../common/CTA';
import { useState } from 'react';
import { InlineWidget } from 'react-calendly';
import backgroundimg from '../../assets/images/backgroundFront.png';

const Hero = ({ title, subtitle, callToAction, callToAction2, image }: HeroProps) => {
  return (
    <section id="heroOne">
      <div className="mx-auto max-w-8xl h-screen   bg-[url('../../assets/images/backgroundFront.png')] bg-cover bg-black bg-opacity-90 ">
        <div className="w-full bg-black h-screen bg-opacity-70 ">
          {/* {image && (
          <div className="relative m-auto max-w-8xl">
            <Image
              className="mx-auto h-auto w-full rounded-md bg-gray-400 dark:bg-slate-700"
              src={image.src}
              alt={image.alt}
              width={1024}
              height={607}
              sizes="(max-width: 64rem) 100vw, 1024px"
              loading="eager"
              placeholder="blur"
              priority
            />
          </div>
        )} */}
          <div className="  pt-12  md:pt-20   ">
            <div className="mx-auto max-w-4xl align-middle  justify-center text-center ">
              {title && (
                <h1 className="leading-tighter font-heading mb-6 text-xl text-white font-bold tracking-tighter md:text-5xl lg:text-5xl">
                  {title}
                </h1>
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

          {/* {image && (
            <div className="relative m-auto max-w-5xl">
              <Image
                className="mx-auto h-auto w-full rounded-md bg-gray-400 dark:bg-slate-700"
                src={image.src}
                alt={image.alt}
                width={1024}
                height={607}
                sizes="(max-width: 64rem) 100vw, 1024px"
                loading="eager"
                placeholder="blur"
                priority
              />
            </div>
          )} */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
