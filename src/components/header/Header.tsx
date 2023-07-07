import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { MdMenu } from 'react-icons/md'

import Logo from '@/assets/images/logo.svg'
import Menu from './menu/Menu'
import Social from '../social/Social'

const Header: FC = () => {
  return (
    <header className="md:max-w-[1750px] flex items-center w-[100%] h-[90px] lg:h-[130px] px-[15px] lg:m-auto lg:px-[15px] md:px-[39px] sm:px-[15px] justify-between lg:justify-normal">
      <Link href="/">
        <Image src={Logo} alt="Bluebird" className="h-[53px] w-[194px]"></Image>
      </Link>

      <div className="bg-whiteColor absolute max-w-[65vw] h-screen left-0 top-0 p-16 shadow-lg  flex-col translate-x-[-100%]  ==== overflow-auto lg:translate-x-0 z-20 lg:h-auto lg:p-0 lg:max-w-[100%] lg:flex-row lg:shadow-none lg:relative items-center w-[100%] flex">
        <Menu />
        <Social />
      </div>

      <button className="block lg:hidden">
        <MdMenu className="fill-mainColor" size={40} />
      </button>
    </header>
  )
}

export default Header
