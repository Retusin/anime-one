import Head from 'next/head';
import React, { FC } from 'react';

import { Footer, Header } from '@/components/layout';

import styles from './Layout.module.scss';

interface LayoutParams {
  children: React.ReactNode;
  title: string;
}

export const Layout: FC<LayoutParams> = ({ children, title }) => (
  <div>
    <Head>
      <title> OneAnime | {title}</title>
    </Head>
    <div className={styles.wrapper}>
      <div className='sticky top-0 z-[99]'>
        <Header />
      </div>
      <div className={styles.main}>{children}</div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  </div>
);
