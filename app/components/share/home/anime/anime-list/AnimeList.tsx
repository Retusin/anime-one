import Link from 'next/link';
import React, { FC } from 'react';

import { AnimeItem } from '@/components/share/home';

import styles from './AnimeList.module.scss';

interface AnimeListParams {
  anime: TopAnimeParams;
}

export const AnimeList: FC<AnimeListParams> = ({ anime }) => {
  const animeList = anime.data.slice(0, 10);

  return (
    <section>
      <div className={styles.list}>
        <div className={styles.list_item}>
          <h2 className={styles.list_title}>New anime on the website</h2>
          <ul className={styles.list_menu}>
            {animeList.map((item: any) => (
              <AnimeItem item={item} key={item.mal_id} />
            ))}
          </ul>
          <div className='text-center'>
            <Link href='/anime'>
              <button
                type='button'
                className='py-2 px-4 max-w-[max-content]  bg-violet-600 hover:bg-violet-700 focus:ring-violet-500 focus:ring-offset-violet-200 text-white transition ease-in duration-200 text-text-center text-[24px] font-semibold shadow-md mx-auto rounded-lg '
              >
                Show All
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
