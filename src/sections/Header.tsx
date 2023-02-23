import { ConnectButton } from '@rainbow-me/rainbowkit'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

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
  const [open, setOpen] = React.useState(false);
  console.log(open);

  return (
    <header className="h-15 border-b border-gray-200">
      <div className="hidden mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <div className="flex">
          <Logo />
          {/* Desktop */}
          <div>
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
          <ConnectButton />
        </div>
      </div>
      <div className="container sm:hidden mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Mobile*/}
        <div className="flex flex-row justify-between w-full">
          <Logo className="mx-auto" />
          <div className="btn" onClick={() => setOpen(true)}>
            <AiOutlineMenu />
          </div>
        </div>
        {open ? (
          <div
            // className={`fixed top-0 left-0 z-40 w-screen h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-base-100`}
            className={`fixed top-0 left-0 z-40 h-screen w-screen bg-base-100 transition-transform flex flex-col gap-5`}
          >
            <div className="flex flex-row justify-between p-4">
              <Logo className="mx-auto" />
              <div className="btn" onClick={() => setOpen(false)}>
                <svg
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close menu</span>
              </div>
            </div>
            <div className="p-2">
              <ul className="flex items-center flex flex-col gap-2">
                {links.map((item, index) => (
                  <li
                    className={`${
                      router.route === item.link
                        ? "text-xl text-primary border-b border-info"
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
            <div className="mx-auto">
              <ConnectButton />
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
