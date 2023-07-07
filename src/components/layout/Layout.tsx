import { FC, PropsWithChildren } from 'react'

import Meta from './meta/Meta'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'

import { ISeo } from './meta/meta.interface'

interface ILayout extends ISeo {}

const Layout: FC<PropsWithChildren<ILayout>> = ({ children, ...rest }) => {
  return (
    <>
      <Meta {...rest} />
      <Header />
      <main className="flex-0 lg:flex-1">{children}</main>
      <Footer />
    </>
  )
}
export default Layout
