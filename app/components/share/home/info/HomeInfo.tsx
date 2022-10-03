import { FC } from 'react';

import styles from './HomeInfo.module.scss';

export const HomeInfo: FC = () => (
  <div className={styles.info}>
    <div className={styles.info_wrapper}>
      <h2 className={styles.info_title}>AnimeOne</h2>
      <p>
        <span className='font-semibold'>AnimeOne </span> - only free anime
        without registration The main advantage of our portal is the ability to
        watch all anime absolutely free. We believe that the art of Japanese
        animation should be accessible to everyone, especially since the
        majority of our viewers are young people. No fee is charged at any stage
        of using the site, which makes our project truly convenient for
        everyone.
      </p>
      <p>
        In addition, using the <span className='font-semibold'>AnimeOne </span>{' '}
        site does not require registration. Users can watch the anime online for
        free immediately after accessing the site.
      </p>
      <p>
        If you like Japanese cartoons, go to{' '}
        <span className='font-semibold'>AnimeOne </span> . We promise you a real
        pleasure watching the best anime!
      </p>
    </div>
  </div>
);
