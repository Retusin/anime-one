import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { FaStar } from 'react-icons/fa';

import styles from './AnimeItem.module.scss';

interface AnimeItemParams {
  item: AnimeDataParams;
}

export const AnimeItem: FC<AnimeItemParams> = ({ item }) => (
  <Link href={`/anime/${item.mal_id}`}>
    <li className={styles.item}>
      <div className={styles.item_wrapper}>
        <div className={styles.item_card}>
          <Image
            src={item.images.jpg.large_image_url}
            className={styles.item_image}
            width={150}
            height={210}
            alt={item.title}
          />
          <div className={styles.item_info}>
            <span>
              <FaStar size={18} />
            </span>
            <span className={styles.item_score}>{item.score}</span>
          </div>
        </div>
        <div>
          <h3 className={styles.item_title}>{item.title}</h3>
          <span className={styles.item_subtitle}>{item.title_japanese}</span>
          <ul className={styles.item_params}>
            <li>{item.status} /</li>
            <li>{item.year} /</li>
            <li>{item.episodes} series</li>
          </ul>
          <p className={styles.item_synopsis}>{item.synopsis}</p>
        </div>
      </div>
    </li>
  </Link>
);
