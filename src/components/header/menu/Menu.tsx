import  { FC } from 'react'
import MenuItem from './MenuItem'

import { menu_RU } from '@/assets/data/data.ru'

const Menu:FC = () => {
  return (
    <nav className="flex-1 md:pl-0 lg:pl-[100px]">
      <ul className="flex-col lg:flex-row flex items-center gap-[30px]">
        {menu_RU.map((item) => (
          <li key={item.name}>
            <MenuItem item={item} />
          </li>
        ))}
      </ul>
    </nav>
  )
}
export default Menu
