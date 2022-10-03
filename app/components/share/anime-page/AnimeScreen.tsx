import { FC, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { Layout } from '@/components/layout';
import { AnimeItem } from '@/components/share/home';
import { Hero } from '@/components/ui';
import { getRequestAnime } from '@/services/hooks/get-anime/getAnime';

import styles from './AnimeScreen.module.scss';

export const AnimeScreen: FC = () => {
  const { ref, inView } = useInView();
  const { data, fetchNextPage } = getRequestAnime();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  if (!data) return null;

  return (
    <Layout title='Anime List'>
      <div className={styles.anime}>
        <div className={styles.anime_container}>
          <Hero
            title='Anime List'
            description='Many people may be surprised to learn that the term "anime"
                         does not come from the Land of the Rising Sun, but from England. The
                          pithy word animation is a little shortened and assigned to a truly
                          magical art of Japanese animation. Anime cartoons online, in contrast to
                          cartoons from other countries, occupies a different niche as it is
                          designed primarily for teenagers and adult audience. It is this
                          versatility that has provided it with the widest demand. Translated with'
          />
          <ul className={styles.anime_list}>
            {data.pages.map((page) =>
              page.data.map((repo: AnimeDataParams) => (
                <AnimeItem item={repo} />
              ))
            )}
          </ul>
          <div ref={ref} />
        </div>
      </div>
    </Layout>
  );
};
