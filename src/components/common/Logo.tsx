import Link from 'next/link'
import { FaYinYang } from 'react-icons/fa'

import { APP_NAME } from '../../data'

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/">
      <a className={(className || "") + " my-2 flex items-center space-x-1"}>
        <FaYinYang className="h-8 w-8 flex-shrink-0 mr-3" />
        <span className="font-bold text-3xl font-sans tracking-tight whitespace-nowrap">
          {APP_NAME}
        </span>
      </a>
    </Link>
  );
};

export default Logo;
