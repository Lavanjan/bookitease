import Image from 'next/image';
import productLogo from '~/assets/images/product-logo.png';

const Logo = () => (
  <span className="ml-2 self-center whitespace-nowrap text-2xl font-bold text-gray-900 dark:text-white md:text-xl">
    <Image width={200} src={productLogo} alt="Product Logo" />
  </span>
);

export default Logo;
