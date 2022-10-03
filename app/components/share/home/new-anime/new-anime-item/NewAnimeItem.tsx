import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import styles from './NewAnimeItem.module.scss';

interface NewAnimeItemParams {
  anime: AnimeDataParams;
}

export const NewAnimeItem: FC<NewAnimeItemParams> = ({ anime }) => (
  <Link href={`/anime/${anime.mal_id}`}>
    <li className={styles.anime}>
      <Image
        src={anime.images.jpg.large_image_url}
        className={styles.anime_image}
        width={162}
        height={226}
        alt={anime.title}
      />
      <h2 className={styles.anime_title}>{anime.title}</h2>
    </li>
  </Link>
);
