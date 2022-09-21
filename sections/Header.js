import { useRouter } from 'next/router'
import Link from 'next/link'

import Logo from '../components/common/Logo'
import ConnectWallet from '../components/ConnectWallet'

const links = [
  {
    label: 'Deposit',
    link: '/',
  },
  {
    label: 'Withdraw',
    link: '/withdraw',
  },
]

const Header = () => {
  const router = useRouter()

  return (
    <header className="h-15 border-b border-gray-200">
      <div className="container px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex">
          <Logo />

          <ul className="ml-16 flex items-center">
            {links.map((item, index) => (
              <li
                className={`mr-4 ${
                  router.route === item.link
                    ? 'text-indigo-500 border-b border-indigo-500'
                    : 'text-grey-500'
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
        <ConnectWallet />
      </div>
    </header>
  )
}

export default Header
