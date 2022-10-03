import { FC } from 'react';

import { NewAnimeItem } from '@/components/share/home';

import styles from './NewAnime.module.scss';

interface NewAnimeParams {
  anime: TopAnimeParams;
  mount: string;
}

export const NewAnime: FC<NewAnimeParams> = ({ mount, anime }) => {
  const data = anime.data.slice(0, 7);

  return (
    <section className={styles.new}>
      <h2 className={styles.new_title}>{mount} anime</h2>
      <ul className={styles.new_menu}>
        {data.map((item) => (
          <NewAnimeItem anime={item} key={item.mal_id} />
        ))}
      </ul>
    </section>
  );
};
