import {
  IconArrowDown,
  IconArrowsRightLeft,
  IconBrandLinkedin,
  IconBrandTailwind,
  IconBrandTwitter,
  IconBulb,
  IconClock,
  IconComponents,
  IconDownload,
  IconListCheck,
  IconMail,
  IconMapPin,
  IconPhoneCall,
  IconRocket,
} from '@tabler/icons-react';
import {
  CallToActionProps,
  ContactProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  PricingProps,
  StepsProps,
  TeamProps,
  TestimonialsProps,
} from '../../types';
import hotelbookingservice from '~/assets/images/hotel_booking_service.png';
import restaurantImg from '~/assets/images/restaurant_service.png';
import housekeepingImg from '~/assets/images/housekeeping_service.png';
import inventoryImg from '~/assets/images/inventory_service.png';
import analyticreportImg from '~/assets/images/analytics_and_reports.png';
import mobileappImg from '~/assets/images/mobile_booking_app.png';
import frontbackgroundimage from '~/assets/images/backgroundFront.png';

// Hero data on Home page *******************
export const heroHome: HeroProps = {
  image: {
    src: frontbackgroundimage,
    alt: 'Colorful Image',
  },
  mainTitle: <>Cloud based Hotel Management System | BookItEase</>,
  title: <>Automate processes. Delight customers.</>,
  subtitle: (
    <>Enhance hotel operations with Bookit Ease, the all-in-one software for bookings, payments, and guest services.</>
  ),
  callToAction: {
    text: 'Start Free Trial',
    href: '/pricing',
    icon: IconDownload,
    targetBlank: false,
  },
  callToAction2: {
    text: 'Schedule a Demo',
    href: 'https://calendly.com/ravilavanjan23',
    targetBlank: true,
  },
};

// // SocialProof data on Home page *******************
// export const socialProofHome: SocialProofProps = {
//   id: 'socialProof-on-home',
//   hasBackground: false,
//   images: [
//     {
//       link: 'https://nextjs.org/',
//       src: nextJsLogo,
//       alt: 'NextJs Logo',
//     },
//     {
//       link: 'https://react.dev/',
//       src: reactLogo,
//       alt: 'React Logo',
//     },
//     {
//       link: 'https://tailwindcss.com/',
//       src: tailwindCssLogo,
//       alt: 'Tailwind CSS Logo',
//     },
//     {
//       link: 'https://www.typescriptlang.org/',
//       src: typescriptLogo,
//       alt: 'Typescript Logo',
//     },
//   ],
// };

// Features data on Home page *******************
export const featuresHome: FeaturesProps = {
  id: 'features-on-home',
  hasBackground: false,
  columns: 3,
  header: {
    title: (
      <>
        What you get with <span className="whitespace-nowrap">us</span>
      </>
    ),
    subtitle:
      "Elevating Your Digital Presence: Discover the Synergies Unleashed in Our Platform's Core Strengths, from Seamless Integration to Open Collaboration.",
    tagline: 'Features',
  },
  items: [
    {
      title: 'Hotel Booking Service',
      description:
        'Our hotel booking service offers quick and easy room reservations. Find available rooms, compare prices, and book your stay effortlessly.        ',
      icon: IconBrandTailwind,
      callToAction: {
        text: 'Discover More',
        href: `/#contentOne-on-home-one`,
      },
    },
    {
      title: 'Restaurant Service',
      description:
        'Our restaurant service app simplifies your dining experience. Easily browse menus, make reservations, and order food for delivery or pickup.',
      icon: IconComponents,
      callToAction: {
        text: 'Discover More',
        href: '/#contentOne-on-home-two',
      },
    },
    {
      title: 'Housekeeping Service',
      description:
        'Our housekeeping service ensures rooms are cleaned after each checkout or upon customer request, maintaining a pristine environment.',
      icon: IconListCheck,
      callToAction: {
        text: 'Discover More',
        href: '/#contentOne-on-home-three',
      },
    },
    {
      title: 'Inventory Service',
      description:
        'Efficiently manage inventory with our streamlined application, offering intuitive tracking and restocking features.',
      icon: IconRocket,
      callToAction: {
        text: 'Discover More',
        href: '/#contentOne-on-home-four',
      },
    },
    {
      title: 'Analytics and Reports',
      description:
        'Effortlessly track hotel and restaurant revenues with our analytics and reports feature, gaining valuable financial insights.',
      icon: IconArrowsRightLeft,
      callToAction: {
        text: 'Discover More',
        href: '/#contentOne-on-home-five',
      },
    },
    {
      title: 'Mobile Booking App',
      description:
        'Our mobile app provides convenient hotel booking services for customers, ensuring a hassle-free experience with seamless room reservations.',
      icon: IconBulb,
      callToAction: {
        text: 'Discover More',
        href: '/#contentOne-on-home-six',
      },
    },
  ],
};

// Content data on Hotel Booking Service *******************
export const contentHomeOne: ContentProps = {
  id: 'contentOne-on-home-one',
  hasBackground: true,
  header: {
    title: 'Hotel Booking Service',
    // subtitle: 'Quando cetero his ne, eum admodum sapientem ut',
    // tagline: 'Content',
  },
  // content:
  //   'Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos etiam regione ut, persius eripuit quo id. Sit te euismod tacimates.',
  items: [
    {
      title: 'Manage Front Desk Bookings',
      description:
        'Efficiently handle front desk bookings with our user-friendly interface, allowing staff to easily view, modify, and confirm reservations in real-time, ensuring smooth operations and guest satisfaction.',
    },
    {
      title: 'Book Events like Swimming Pool',
      description:
        'Enhance your stay by booking additional services such as access to the swimming pool or other recreational activities.',
    },
    {
      title: 'Export Reservation Details',
      description:
        'Easily export reservation details for your records or to share with relevant parties, ensuring smooth communication and organization.',
    },
    {
      title: 'Reservation Overview Screen',
      description:
        'Access a comprehensive overview of your reservations in one convenient screen, keeping track of your bookings effortlessly.',
    },
    {
      title: 'Invoicing',
      description:
        'Receive detailed invoices for your reservations, simplifying the payment process and ensuring transparency.',
    },
    {
      title: 'Rate Management',
      description:
        'Manage rates effectively to ensure competitive pricing and optimize revenue generation for the hotel.',
    },
  ],
  image: {
    src: hotelbookingservice,
    alt: 'Colorful Image',
  },
  isReversed: false,
  isAfterContent: false,
};

// Content data on Restaurant Service *******************
export const contentHomeTwo: ContentProps = {
  id: 'contentOne-on-home-two',
  hasBackground: true,
  header: {
    title: 'Restaurant Service',
  },
  // content:
  //   'Per odio fabellas consulatu cu. Utroque detracto mel ea, quo te latine theophrastus. Ea his tale nib dissentias, mei exerci tamquam euripidis cu.',
  items: [
    {
      title: 'Manage Orders',
      description:
        'Efficiently track and manage all incoming orders for room service, amenities, and other hotel services in real-time.',
    },
    {
      title: 'Chef Screen Management',
      description:
        'Streamline kitchen operations with real-time order updates and detailed preparation instructions, ensuring timely and accurate food preparation.',
    },
    {
      title: 'Waiter Screen Management',
      description:
        'Empower waitstaff with a dedicated screen to view and manage table orders, track orders, and communicate with the kitchen in real-time.',
    },
    {
      title: 'Notify For Orders',
      description:
        'Receive instant notifications for new orders, updates, and changes, ensuring prompt attention and timely service.',
    },
    {
      title: 'Invoicing',
      description:
        'Automatically generate detailed invoices for guest stays and services, ensuring accurate billing and easy payment processing.',
    },
    {
      title: 'Customizing Food Categories',
      description:
        'Enhance user experience and streamline ordering by presenting a personalized and intuitive menu structure.',
    },
  ],
  image: {
    src: restaurantImg,
    alt: 'Colorful Image',
  },
  isReversed: true,
  isAfterContent: true,
};
//Housekeeping Service
export const contentHomeThree: ContentProps = {
  id: 'contentOne-on-home-three',
  hasBackground: true,
  header: {
    title: 'Housekeeping Service',
  },
  // content:
  //   'Per odio fabellas consulatu cu. Utroque detracto mel ea, quo te latine theophrastus. Ea his tale nib dissentias, mei exerci tamquam euripidis cu.',
  items: [
    {
      title: 'On Demand Cleaning Service',
      description:
        'Request immediate cleaning assistance for specific areas or rooms, ensuring prompt maintenance and guest satisfaction.',
    },
    {
      title: 'Trolly Service',
      description:
        'Enable efficient transportation of  amenities, and supplies throughout the hotel premises, enhancing convenience and service delivery.',
    },
    {
      title: 'Processed Cleaning Service',
      description:
        'Schedule regular cleaning sessions for rooms and common areas, maintaining high cleanliness standards and guest comfort.',
    },
    {
      title: 'Task Management',
      description:
        'With centralized task management, supervisors can efficiently allocate resources and monitor progress, enhancing overall operational efficiency.',
    },

    {
      title: 'Laundry Service',
      description:
        'Provide guests with convenient access to professional laundry services, ensuring cleanliness and comfort throughout their stay.',
    },
  ],
  image: {
    src: housekeepingImg,
    alt: 'Colorful Image',
  },
  isReversed: false,
  isAfterContent: false,
};
//Inventory Service
export const contentHomeFour: ContentProps = {
  id: 'contentOne-on-home-four',
  hasBackground: true,
  header: {
    title: 'Inventory Service',
  },
  // content:
  //   'Per odio fabellas consulatu cu. Utroque detracto mel ea, quo te latine theophrastus. Ea his tale nib dissentias, mei exerci tamquam euripidis cu.',
  items: [
    {
      title: 'Stock Management',
      description:
        'Efficiently track and control inventory levels for all supplies and amenities, ensuring optimal stock availability.',
    },
    {
      title: 'Supplier Management',
      description:
        'Maintain detailed records of suppliers, manage orders, and track deliveries to ensure timely procurement of quality goods. ',
    },
    {
      title: 'Inventory Alerts',
      description:
        'Receive instant notifications for low stock levels, expiring items, and other critical inventory changes to prevent disruptions.',
    },
  ],
  image: {
    src: inventoryImg,
    alt: 'Colorful Image',
  },
  isReversed: true,
  isAfterContent: true,
};
//Analytics and Reports
export const contentHomeFive: ContentProps = {
  id: 'contentOne-on-home-five',
  hasBackground: true,
  header: {
    title: 'Analytics and Reports',
  },
  // content:
  //   'Per odio fabellas consulatu cu. Utroque detracto mel ea, quo te latine theophrastus. Ea his tale nib dissentias, mei exerci tamquam euripidis cu.',
  items: [
    {
      title: 'Total Revenue Report',
      description:
        "Generate comprehensive reports detailing the hotel's overall revenue across various channels and services.",
    },
    {
      title: 'Total Receipt Report ',
      description:
        'Track and consolidate all receipts from transactions, providing a detailed overview of daily, weekly, or monthly income.',
    },
    {
      title: 'Agent Wise Report ',
      description:
        'Monitor and evaluate performance of individual booking agents, including the number of reservations and revenue generated.',
    },
    {
      title: 'Service Charge Report ',
      description:
        ' Summarize all service charges applied to guest bills, giving a detailed account of additional revenue streams.',
    },
    {
      title: 'Reservations Reports',
      description:
        'Access detailed reports on reservations, including booking sources, occupancy rates, and cancellation trends. ',
    },
  ],
  image: {
    src: analyticreportImg,
    alt: 'Colorful Image',
  },
  isReversed: false,
  isAfterContent: false,
};
export const contentHomeSix: ContentProps = {
  id: 'contentOne-on-home-six',
  hasBackground: true,
  header: {
    title: 'Mobile Booking App',
  },
  // content:
  //   'Per odio fabellas consulatu cu. Utroque detracto mel ea, quo te latine theophrastus. Ea his tale nib dissentias, mei exerci tamquam euripidis cu.',
  items: [
    {
      title: 'Find Available Rooms',
      description:
        'Easily search and view available rooms directly from your mobile device, ensuring you find the perfect stay quickly.',
    },
    {
      title: 'Room Booking',
      description: 'Book your chosen room instantly through the app, with a simple and intuitive reservation process.',
    },
    {
      title: 'Notification Services',
      description:
        'Receive timely notifications about your bookings, special offers, and important updates to stay informed and prepared.',
    },
    {
      title: 'Online Payments',
      description:
        'Make secure and hassle-free payments for your reservations directly within the app, ensuring a smooth and convenient transaction process.',
    },
  ],
  image: {
    src: mobileappImg,
    alt: 'Colorful Image',
  },
  isReversed: true,
  isAfterContent: true,
};
// Steps data on Home page *******************
// export const stepsHome: StepsProps = {
//   id: 'steps-on-home',
//   hasBackground: false,
//   isReversed: false,
//   isImageDisplayed: true,
//   image: {
//     src: gasImg,
//     alt: 'Steps image',
//   },
//   header: {
//     title: 'Sed ac magna sit amet risus tristique interdum.',
//   },
//   items: [
//     {
//       title: 'Step 1',
//       description:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla. Praesent placerat enim ut ex tincidunt vehicula. Fusce sit amet dui tellus.',
//       icon: IconArrowDown,
//     },
//     {
//       title: 'Step 2',
//       description:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla.',
//       icon: IconArrowDown,
//     },
//     {
//       title: 'Step 3',
//       description:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla.',
//       icon: IconArrowDown,
//     },
//     {
//       title: 'Ready!',
//     },
//   ],
// };

// Testimonials data on Home page *******************
export const testimonialsHome: TestimonialsProps = {
  id: 'testimonials-on-home',
  hasBackground: true,
  header: {
    title: 'What our customers say about us',
    subtitle:
      'Etiam sed odio et dolor auctor gravida. Curabitur tincidunt elit non risus pharetra sodales. Etiam sit amet mattis massa.',
  },
  testimonials: [
    {
      name: 'Tayla Kirsten',
      job: 'Marketing Manager',
      testimonial: `I'm impressed by the speed and performance of these templates. My website now loads in the blink of an eye, significantly enhancing my visitors' experience. Thanks to TailNext, my online business is thriving.`,
      image: {
        src: 'https://images.unsplash.com/photo-1619734086067-24bf8889ea7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Tayla Kirsten',
      },
      href: '/',
    },
    {
      name: 'Silver Jordan',
      job: 'Senior Marketer',
      testimonial: `I had never found it so easy to customize a website. TailNext's templates are incredibly flexible, and with Tailwind CSS, I've managed to give my website the look and feel I always wanted. Highly recommended!`,
      image: {
        src: 'https://images.unsplash.com/photo-1565049786474-1dea82a8b995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Silver Jordan',
      },
      href: '/',
    },
    {
      name: 'Kelsey Arden',
      job: 'Co-Founder & CEO',
      testimonial: `As a beginner in web development, I really needed clear guidance. Tailnext made it possible. I was able to install and customize my website seamlessly, and I'm thrilled with the results!`,
      image: {
        src: 'https://images.unsplash.com/photo-1659057106920-da022cfbc0cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Kelsey Arden',
      },
      href: '/',
    },
    {
      name: 'Sarah Johnson',
      job: 'Business Owner',
      testimonial: `They've not only saved me a ton of time but have also made my websites look incredibly professional. The level of detail and thought that went into designing these templates is truly impressive.`,
      image: {
        src: 'https://images.unsplash.com/photo-1572417884940-c24659be6068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Sarah Johnson',
      },
      href: '/',
    },
    {
      name: 'Keith Young',
      job: 'Freelance Developer',
      testimonial: `The clean code and integration with Next.js make my projects a breeze. Plus, the responsive design ensures that my clients' websites look amazing on any device. These templates have become my secret weapon for success!`,
      image: {
        src: 'https://images.unsplash.com/photo-1694287877106-ee22f764aef1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Keith Young',
      },
      href: '/',
    },
    {
      name: 'Lisa Gordon',
      job: 'Project Manager',
      testimonial: `Their templates are not only stunning but also user-friendly. The support I received from their community has been exceptional. I'm proud to say that I've built my dream website with TailNext.`,
      image: {
        src: 'https://images.unsplash.com/photo-1665984867752-6370ab5ae35e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Lisa Gordon',
      },
      href: '/',
    },
  ],
};

// FAQS data on Home page *******************
export const faqs2Home: FAQsProps = {
  id: 'faqsTwo-on-home',
  hasBackground: false,
  header: {
    title: 'Frequently Asked Questions',
    subtitle: 'Users quickly find the information they need about the app’s features, usage, and troubleshooting.',
    tagline: 'FAQS',
  },
  items: [
    {
      title: 'What is hotel management software?',
      description: `Hotel management software is a cutting-edge, cloud-based solution that empowers small hoteliers to manage their property more effectively and achieve greater success. This innovative technology allows hoteliers to take their business online, modernising their operations and embracing the latest industry trends.`,
    },
    {
      title: 'What features does your hotel management software offer?',
      description: `Our hotel management software offers a comprehensive range of features, including room reservations, guest check-in/check-out, billing and invoicing, housekeeping management, reporting and analytics, and more.`,
    },
    {
      title: 'Is your hotel management software easy to use?',
      description: `Yes, our software is designed with user-friendly interfaces and intuitive features to ensure ease of use for hotel staff at all levels, from front desk agents to management.`,
    },
    {
      title: 'How can your software help me manage reservations and bookings?',
      description: `Our software allows you to efficiently manage room reservations, including checking availability, processing bookings, and handling cancellations or modifications. You can also set up different room rates, packages, and discounts to attract more guests.`,
    },
    {
      title: 'Does your software provide reporting and analytics capabilities?',
      description: `Yes, our software includes robust reporting and analytics tools that provide valuable insights into your hotel's performance, including occupancy rates, revenue generation, guest demographics, and more. These insights can help you make informed decisions to optimize your operations and maximize profitability.`,
    },
    {
      title: 'Is customer support available if I encounter any issues or need assistance?',
      description: `Yes, we offer dedicated customer support to assist you with any questions, technical issues, or training needs related to our hotel management software. Our support team is available via phone, email, or live chat to provide prompt assistance whenever you need it.`,
    },
  ],
};

// Pricing data on Home page *******************
export const pricingHome: PricingProps = {
  id: 'pricing-on-home',
  hasBackground: true,
  header: {
    title: 'Prices for each plan',
    subtitle: 'Pick a plan to grow your hotel and your business with BookItEase.',
    // tagline: 'Pricing',
  },
  prices: [
    {
      title: 'basic',
      price: 29,
      period: 'per month',
      items: [
        {
          description: 'Hotel Service',
          access: true,
        },
        {
          description: 'House Keeping Service',
          access: true,
        },

        {
          description: 'Inventory Service',
          access: true,
        },
        {
          description: 'Reports & Analytics',
          access: true,
        },
        {
          description: 'Restaurant Service',
          access: false,
        },
        {
          description: 'Mobile Application',
          access: true,
        },
        {
          description: 'Additional Room Charge $10/Room',
          access: true,
        },
      ],
      callToAction: {
        targetBlank: true,
        text: 'Free 7-day trial',
        href: '/',
      },
      hasRibbon: false,
    },
    {
      title: 'standard',
      price: 69,
      period: 'per month',
      items: [
        {
          description: 'Hotel Service',
          access: true,
        },
        {
          description: 'House Keeping Service',
          access: true,
        },
        {
          description: 'Inventory Service',
          access: true,
        },
        {
          description: 'Reports & Analytics',
          access: true,
        },
        {
          description: 'Restaurant Service',
          access: true,
        },
        {
          description: 'Mobile Application',
          access: true,
        },
        {
          description: 'Additional Room Charge $10/Room',
          access: true,
        },
      ],
      callToAction: {
        targetBlank: true,
        text: 'Free 15-day trial',
        href: '/',
      },
      hasRibbon: true,
      ribbonTitle: 'Popular',
    },
    {
      title: 'premium',
      price: 199,
      period: 'per month',
      items: [
        {
          description: 'Hotel Service',
          access: true,
        },
        {
          description: 'House Keeping Service',
          access: true,
        },
        {
          description: 'Inventory Service',
          access: true,
        },
        {
          description: 'Reports & Analytics',
          access: true,
        },
        {
          description: 'Restaurant Service',
          access: true,
        },
        {
          description: 'Mobile Application',
          access: true,
        },
        {
          description: 'Additional Room Charge $0/Room',
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

// Team data on Home page *******************
export const teamHome: TeamProps = {
  id: 'team-on-home',
  hasBackground: false,
  header: {
    title: 'Team Members',
    subtitle:
      'Suspendisse in dui nibh. Donec enim leo, sodales et egestas id, malesuada non diam. Sed dapibus velit et mauris condimentum, vel imperdiet erat egestas.',
    // tagline: 'Team',
  },
  teams: [
    {
      name: 'Cindy Belcher',
      occupation: 'SEO Consultant',
      image: {
        src: 'https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Cindy Belcher',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Toby Foster',
      occupation: 'Marketing Tech',
      image: {
        src: 'https://images.unsplash.com/photo-1614583224978-f05ce51ef5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2172&q=80',
        alt: 'Toby Foster',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Clark Bourne',
      occupation: 'Content Manager',
      image: {
        src: 'https://images.unsplash.com/photo-1639628735078-ed2f038a193e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
        alt: 'Clark Bourne',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Bella Chase',
      occupation: 'UX Designer',
      image: {
        src: 'https://images.unsplash.com/photo-1628260412297-a3377e45006f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
        alt: 'Bella Chase',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
  ],
};

// Contact data on Home page *******************
export const contactHome: ContactProps = {
  hasBackground: true,
  header: {
    title: 'Get in Touch',
    subtitle: 'Easily reach out to our support team for any inquiries',
    tagline: 'Contact',
  },
  content:
    "We value your input and are committed to providing the best support possible. Don't hesitate to get in touch with us through any of these channels!",
  items: [
    // {
    //   title: 'Our Address',
    //   description: ['72 Palali Rd, Jaffna,', 'Sri Lanka'],
    //   icon: IconMapPin,
    // },
    {
      title: 'Contact',
      description: ['Mobile: +94 21 221 4205', 'Mail: info@invictainnovations.com'],
      icon: IconPhoneCall,
    },
    {
      title: 'Working hours',
      description: ['Monday - Friday: 08:30 - 17:30'],
      icon: IconClock,
    },
  ],
  form: {
    title: 'Ready to Get Started?',
    inputs: [
      {
        type: 'text',
        name: 'name',
        autocomplete: 'off',
        placeholder: 'Your name',
      },
      {
        type: 'email',
        name: 'email',
        autocomplete: 'on',
        placeholder: 'Your email address',
      },
    ],
    textarea: {
      cols: 30,
      rows: 5,
      name: 'textarea',
      placeholder: 'Write your message...',
    },
    btn: {
      title: 'Send Message',
      type: 'submit',
    },
  },
};

// CallToAction data *******************
export const callToAction2Home: CallToActionProps = {
  title: 'Next.js + Tailwind CSS',
  subtitle:
    'Aliquam sodales porttitor lacus ac tristique. Etiam posuere elit at leo feugiat sodales. Sed ac mauris quis sem tempor condimentum non at metus.',
  callToAction: {
    text: 'Get template',
    href: 'https://github.com/onwidget/tailnext',
    icon: IconDownload,
  },
  items: [
    {
      title: 'Get template',
      description: 'Aliquam sodales est lectus, quis.',
      href: 'https://github.com/onwidget/tailnext',
    },
    {
      title: 'Learn more',
      description: 'Class aptent taciti sociosqu ad litora torquent per conubia.',
      href: '/',
    },
    {
      title: 'Subscribe',
      description: 'Morbi orci nunc, euismod ac dui id, convallis.',
      form: {
        icon: IconMail,
        input: {
          type: 'email',
          name: 'email',
          autocomplete: 'email',
          placeholder: 'Enter your email address',
        },
        btn: {
          title: 'Subscribe',
          type: 'submit',
        },
      },
    },
  ],
};
