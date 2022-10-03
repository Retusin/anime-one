import { FC } from 'react';

import styles from './Footer.module.scss';

export const Footer: FC = () => (
  <div className={styles.footer}>
    <div className={styles.footer_wrapper}>
      <div className={styles.footer_list}>
        <span>Accord</span>
        <span>Privacy</span>
        <span>For copyright holders</span>
      </div>
      <div>© Retusin💙 2022</div>
    </div>
  </div>
);
