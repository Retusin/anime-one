import { FC } from 'react';

import { Layout } from '@/components/layout';
import { Card, CardFooter, CardVideo } from '@/components/ui';

interface AnimeIdParams {
  anime: AnimeDataParams;
}

export const AnimeIdScreen: FC<AnimeIdParams> = ({ anime }) => {
  if (!anime) return null;

  return (
    <Layout title={anime.title}>
      <div className='my-12 text-black'>
        <Card item={anime} isAnime />
        <CardVideo item={anime} />
        <CardFooter item={anime} />
      </div>
    </Layout>
  );
};
