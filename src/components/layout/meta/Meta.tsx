import { FC, PropsWithChildren } from 'react'


import Head from "next/head"
import { useRouter } from 'next/router'
import { siteName, titleMerge } from './meta.config'

import { ISeo } from './meta.interface'

const Meta: FC<PropsWithChildren<ISeo>> = ({
    title,
    description,
    image = 'logo.png',
    children,
    type = 'website'
}) => {
    const { asPath } = useRouter()
    const currentUrl = `${process.env.NEXT_PUBLIC_APP_URL}${asPath}`
    return (
      <>
        <Head>
          <title itemProp="headline">{titleMerge(title)}</title>
          {description ? (
            <>
              <meta
                itemProp="description"
                name="description"
                content={description}
              />
              <link rel="canonical" href={currentUrl} />
              <meta property="og:type" content={type} />
              <meta property="og:locale" content="ru" />
              <meta property="og:title" content={titleMerge(title)} />
              <meta property="og:url" content={currentUrl} />
              <meta property="og:image" content={image} />
              <meta property="og:site_name" content={siteName} />
              <meta property="og:description" content={description} />
              <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/swiper@10/swiper.min.css"
              />
            </>
          ) : (
            <meta name="robots" content="noindex, nofollow" />
          )}
        </Head>
        {children}
      </>
    )
}
export default Meta