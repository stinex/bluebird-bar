import { IAdvantages, IMenu } from './data.ru.interface'

import iconAdvantagesOne from '@/assets/images/icon-advantages-one.svg'
import iconAdvantagesTwo from '@/assets/images/icon-advantages-two.svg'
import iconAdvantagesThree from '@/assets/images/icon-advantages-three.svg'

export const menu_RU: IMenu[] = [
  {
    name: 'Линка 1',
    href: 'Ссылка 1',
  },
  {
    name: 'Линка 2',
    href: 'Ссылка 2',
  },
  {
    name: 'Линка 3',
    href: 'Ссылка 3',
  },
  {
    name: 'Линка 4',
    href: 'Ссылка 4',
  },
]

export const advantages_RU: IAdvantages[] = [
  {
    img: iconAdvantagesOne,
    title: 'Наша история',
    description:
      'Мы продолжаем богатую традицию качественных напитков и гостеприимной атмосферы.',
  },
  {
    img: iconAdvantagesTwo,
    title: 'Наша миссия',
    description:
      'Cоздать незабываемые вечера, предлагая великолепные напитки и превосходное обслуживание.',
  },
  {
    img: iconAdvantagesThree,
    title: 'Меню',
    description:
      'Широкий выбор изысканных напитков и коктейлей для самых требовательных гурманов.',
  },
]
