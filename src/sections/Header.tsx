import { ConnectButton } from '@rainbow-me/rainbowkit'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Logo from '../components/common/Logo'

const links = [
  {
    label: "Farms",
    link: "/farms",
  },
  {
    label: "Garden",
    link: "/garden",
  },
  {
    label: "Temple",
    link: "/temple",
  },
];

const Header = () => {
  const router = useRouter();

  return (
    <header className="h-15 border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex">
          <Logo />

          <ul className="ml-16 flex items-center">
            {links.map((item, index) => (
              <li
                className={`mr-4 ${
                  router.route === item.link
                    ? "text-primary border-b border-info"
                    : ""
                }`}
                key={index}
              >
                <Link href={item.link}>
                  <a>{item.label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect Wallet */}
        <ConnectButton />
      </div>
    </header>
  );
};

export default Header;
