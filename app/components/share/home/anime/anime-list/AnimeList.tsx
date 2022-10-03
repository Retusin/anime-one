import Link from 'next/link';
import { FC } from 'react';

import { AnimeItem } from '@/components/share/home';
import { Button } from '@/components/ui';

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
            {animeList.map((item: any``) => (
              <AnimeItem item={item} />
            ))}
          </ul>
          <div className='text-center'>
            <Link href='/anime'>
              <a>
                <Button title='Show All' />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
