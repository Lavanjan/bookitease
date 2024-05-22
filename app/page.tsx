import type { Metadata } from 'next';

import { SITE } from '~/config.js';

import Hero from '~/components/widgets/Hero';
import Features from '~/components/widgets/Features';
import Content from '~/components/widgets/Content';
import FAQs2 from '~/components/widgets/FAQs2';
import Pricing from '~/components/widgets/Pricing';
import Contact from '~/components/widgets/Contact';
import {
  contactHome,
  contentHomeOne,
  contentHomeTwo,
  contentHomeThree,
  contentHomeFour,
  faqs2Home,
  featuresHome,
  heroHome,
  pricingHome,
  contentHomeFive,
  contentHomeSix,
} from '~/shared/data/pages/home.data';

export const metadata: Metadata = {
  title: SITE.title,
};

export default function Page() {
  return (
    <>
      <Hero {...heroHome} />
      <Features {...featuresHome} />
      <Content {...contentHomeOne} />
      <Content {...contentHomeTwo} />
      <Content {...contentHomeThree} />
      <Content {...contentHomeFour} />
      <Content {...contentHomeFive} />
      <Content {...contentHomeSix} />
      <FAQs2 {...faqs2Home} />
      <Pricing {...pricingHome} />
      <Contact {...contactHome} />
    </>
  );
}
