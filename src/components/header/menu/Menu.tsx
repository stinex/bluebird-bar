import  { FC } from 'react'
import MenuItem from './MenuItem'

import { menu_RU } from '@/assets/data/data.ru'

const Menu:FC = () => {
  return (
    <nav className='flex-1 pl-[100px]'>
      <ul className="flex items-center gap-[30px]">
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
