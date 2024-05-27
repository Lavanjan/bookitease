import { ComparisonProps, FAQsProps, PricingProps } from '~/shared/types';
import { HeroProps } from '~/shared/types';

// Hero data on Pricing page *******************
export const heroPricing: HeroProps = {
  title: 'Plans and Prices',
  subtitle: (
    <>
      <span className="hidden md:inline">
        {`Here, you'll find a clear breakdown of our service plans and their respective features. Whether you're a small
        business or a large enterprise, we have options tailored to your needs.`}
      </span>{' '}
      You can choose the plan that best suits your goals!
    </>
  ),
  tagline: 'Demo Pricing Page',
};

// Pricing data on Pricing page *******************
export const pricingPricing: PricingProps = {
  id: 'pricing-on-pricing',
  hasBackground: true,
  header: {
    title: 'Our plans',
    subtitle: (
      <>
        Discover our flexible pricing options designed to fit your needs perfectly.{' '}
        <span className="hidden md:inline">{`No matter the size of your hotel, we have the right plan for you.`}</span>
      </>
    ),
  },
  prices: [
    {
      title: 'basic',
      subtitle: 'Optimal choice for personal use',
      price: 29,
      period: 'per month',
      items: [
        {
          description: 'Hotel Service Application.',
          access: true,
        },
        {
          description: 'House Keeping Service Application.',
          access: true,
        },
        {
          description: 'Inventory Service Application.',
          access: true,
        },
        {
          description: 'Restaurant Service Application.',
          access: false,
        },
        {
          description: 'Reports & Analytics.',
          access: true,
        },
        {
          description: 'Mobile Application.',
          access: true,
        },
        {
          description: 'Additional Room Charge $2/room.',
          access: true,
        },
      ],
      callToAction: {
        targetBlank: false,
        text: 'Free 30-day trial',
        href: '',
      },
      hasRibbon: false,
    },
    {
      title: 'standard',
      subtitle: 'Optimal choice for small teams',
      price: 69,
      period: 'per month',
      items: [
        {
          description: 'Hotel Service Application.',
          access: true,
        },
        {
          description: 'House Keeping Service Application.',
          access: true,
        },
        {
          description: 'Inventory Service Application.',
          access: true,
        },
        {
          description: 'Restaurant Service Application.',
          access: true,
        },
        {
          description: 'Reports & Analytics.',
          access: true,
        },
        {
          description: 'Mobile Application.',
          access: true,
        },
        {
          description: 'Additional Room Charge $2/room.',
          access: true,
        },
      ],
      callToAction: {
        targetBlank: true,
        text: 'Free 30-day trial',
        href: '/',
      },
      hasRibbon: true,
      ribbonTitle: 'Popular',
    },
    {
      title: 'premium',
      subtitle: 'Optimal choice for companies',
      price: 199,
      period: 'per month',
      items: [
        {
          description: 'Hotel Service Application.',
          access: true,
        },
        {
          description: 'House Keeping Service Application.',
          access: true,
        },
        {
          description: 'Inventory Service Application.',
          access: true,
        },
        {
          description: 'Restaurant Service Application.',
          access: true,
        },
        {
          description: 'Reports & Analytics.',
          access: true,
        },
        {
          description: 'Mobile Application.',
          access: true,
        },
        {
          description: 'Unlimited Rooms.',
          access: true,
        },
      ],
      callToAction: {
        targetBlank: true,
        text: 'Free 30-day trial',
        href: '/',
      },
      hasRibbon: false,
    },
  ],
};

// Comparison pricing data on Pricing page *******************
export const comparisonPricing: ComparisonProps = {
  id: 'comparison-on-pricing',
  hasBackground: false,
  header: {
    title: "What's available for each plan?",
    subtitle:
      'Discover our flexible pricing options designed to fit your needs perfectly. No matter the size of your hotel, we have the right plan for you.',
    // tagline: 'Comparison',
  },
  columns: [
    {
      title: 'compare plans',
      items: [
        {
          title: 'Hotel Service',
        },
        {
          title: 'House Keeping Service',
        },
        {
          title: 'Inventory Service',
        },
        {
          title: 'Reports & Analytics',
        },
        {
          title: 'Restaurant Service',
        },
        {
          title: 'Mobile Application',
        },
        {
          title: 'Number of Rooms',
        },
      ],
    },
    {
      title: 'trial',
      items: [
        {
          title: true,
        },
        {
          title: true,
        },
        {
          title: true,
        },
        {
          title: true,
        },
        {
          title: false,
        },
        {
          title: true,
        },
        {
          title: 'Limited',
        },
      ],
      callToAction: {
        text: 'Get started',
        href: '/',
      },
    },
    {
      title: 'standard',
      items: [
        {
          title: true,
        },
        {
          title: true,
        },
        {
          title: true,
        },
        {
          title: false,
        },
        {
          title: true,
        },
        {
          title: true,
        },
        {
          title: 'Limited',
        },
      ],
      callToAction: {
        text: 'Get started',
        href: '/',
      },
    },
    {
      title: 'premium',
      items: [
        {
          title: true,
        },
        {
          title: true,
        },
        {
          title: true,
        },
        {
          title: true,
        },
        {
          title: true,
        },
        {
          title: true,
        },
        {
          title: 'Unlimited',
        },
      ],
      callToAction: {
        text: 'Get started',
        href: '/',
      },
    },
  ],
};

// FAQS3 data on Pricing page *******************
export const faqs3Pricing: FAQsProps = {
  id: 'faqsThree-on-pricing',
  hasBackground: true,
  header: {
    title: 'Pricing FAQs',
    subtitle: 'Do you have other questions?',
    // tagline: 'FAQS',
    position: 'left',
  },
  items: [
    {
      title: 'Which plan is best for me?',
      description: `Nunc mollis tempor quam, non fringilla elit sagittis in. Nullam vitae consectetur mi, a elementum arcu. Sed laoreet, ipsum et vehicula dignissim, leo orci pretium sem, ac condimentum tellus est quis ligula.`,
    },
    {
      title: 'What are my payment options?',
      description: `Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eleifend vestibulum nisl in iaculis. Mauris dictum ac purus vestibulum auctor. Praesent imperdiet lectus et massa faucibus, quis viverra massa rhoncus.`,
    },
    {
      title: 'How do I change my plan to a different one?',
      description: `Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur.`,
    },
    {
      title: 'What happen at the end of my free trial?',
      description: `Nunc dapibus lacinia ipsum ut elementum. Integer in pretium sapien. Ut pretium nisl mauris, ut rutrum justo condimentum id. Etiam aliquet, arcu at iaculis laoreet, est arcu egestas sapien, eget sollicitudin odio orci et nunc.`,
    },
    {
      title: 'Can I import data from other tools?',
      description: `Duis in maximus mauris, id eleifend mauris. Nam a fringilla arcu. Curabitur convallis, tellus non aliquet rhoncus, lacus massa auctor eros, in interdum lectus augue sed augue. Fusce tempor ex id faucibus efficitur.`,
    },
    {
      title: 'Can I cancel my plan at any time?',
      description: `Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros.`,
    },
  ],
  callToAction: {
    text: 'Contact us',
    href: '/contact',
  },
};
