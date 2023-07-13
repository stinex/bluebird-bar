import { StaticImageData } from 'next/image'

export interface IMenu {
  name: string
  href: string
}

export interface IAdvantages {
  img: StaticImageData
  title: string
  description: string
}
