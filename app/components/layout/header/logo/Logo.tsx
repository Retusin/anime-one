import Link from 'next/link';
import { FC } from 'react';

import styles from './Logo.module.scss';

export const Logo: FC = () => (
  <Link href='/'>
    <div className={styles.logo}>AnimeOne</div>
  </Link>
);
