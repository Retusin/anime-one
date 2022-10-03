import { FC } from 'react';

import { MenuItem } from './menu-item/MenuItem';
import { MenuData } from './menu.data';

import styles from './Menu.module.scss';

export const Menu: FC = () => (
  <div>
    <ul className={styles.menu}>
      {MenuData.map((item) => (
        <MenuItem item={item} key={item.title} />
      ))}
    </ul>
  </div>
);
