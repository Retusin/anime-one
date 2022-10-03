import Link from 'next/link';
import { FC } from 'react';

import { MenuDataParams } from '../menu.data';

import styles from './MenuItem.module.scss';

interface MenuItemParams {
  item: MenuDataParams;
}

export const MenuItem: FC<MenuItemParams> = ({ item }) => (
  <li>
    <Link href={item.link}>
      <span className={styles.menu_item}>{item.title}</span>
    </Link>
  </li>
);
