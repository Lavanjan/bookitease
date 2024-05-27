import { HeroProps } from '~/shared/types';
import CTA from '../common/CTA';

const Hero = ({ title, subtitle, mainTitle, callToAction, callToAction2 }: HeroProps) => {
  return (
    <section id="heroOne">
      <div className="mx-auto max-w-8xl h-screen bg-[url('../../assets/images/backgroundFront.png')] bg-cover bg-center bg-black bg-opacity-90">
        <div className="w-full bg-black h-screen bg-opacity-70 flex md:justify-center md:items-center md:pt-0 lg:pt-0 pt-20">
          <div>
            <div className="mx-auto max-w-4xl align-middle px-6 justify-center text-center ">
              {mainTitle && (
                <p className="leading-tighter  mb-6 text-sm text-white tracking-tighter md:text-base lg:text-base">
                  {mainTitle}
                </p>
              )}
              {title && (
                <h1 className="leading-tighter font-heading mb-6 text-4xl text-white font-bold tracking-tighter md:text-5xl lg:text-5xl">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
