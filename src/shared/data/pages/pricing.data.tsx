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
      description: ``,
    },
    {
      title: 'What are my payment options?',
      description: ``,
    },
    {
      title: 'How do I change my plan to a different one?',
      description: ``,
    },
    {
      title: 'What happen at the end of my free trial?',
      description: ``,
    },
    {
      title: 'Can I cancel my plan at any time?',
      description: ``,
    },
  ],
  callToAction: {
    text: 'Contact us',
    href: '/contact',
  },
};
