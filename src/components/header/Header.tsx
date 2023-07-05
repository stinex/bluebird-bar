import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Logo from '@/assets/images/logo.svg'
import Menu from './menu/Menu'
import Social from '../social/Social'

const Header: FC = () => {
  return (
    <header className="md:max-w-[1750px] m-auto flex items-center w-[100%] h-[130px] px-[15px] lg:px-[15px] sm:px-[39px]">
      <Link href="/">
        <Image src={Logo} alt="Bluebird" className="h-[53px] w-[194px]"></Image>
      </Link>
      <Menu />
      <Social />
    </header>
  )
}

export default Header
