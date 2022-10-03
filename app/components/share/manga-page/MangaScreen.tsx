import { FC, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { Layout } from '@/components/layout';
import { MangaItem } from '@/components/share/manga-page/manga-item/MangaItem';
import { Hero } from '@/components/ui';
import { getRequestManga } from '@/services/hooks/get-manga/getManga';

export const MangaScreen: FC = () => {
  const { ref, inView } = useInView();
  const { data: manga, fetchNextPage } = getRequestManga();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  if (!manga) return null;

  return (
    <Layout title='Manga'>
      <div className='py-10 container mx-auto px-8 '>
        <div className='bg-white rounded-xl shadow-2xl '>
          <Hero title='Manga' />
          <ul className='px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 items-center py-8 text-center'>
            {manga.pages.map((page) =>
              page.data.map((repo: AnimeDataParams) => (
                <MangaItem item={repo} key={repo.mal_id} />
              ))
            )}
          </ul>
          <div ref={ref} />
        </div>
      </div>
    </Layout>
  );
};
