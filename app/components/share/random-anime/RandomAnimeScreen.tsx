import { FC } from 'react';

import { Layout } from '@/components/layout';
import { Card, CardFooter, CardVideo } from '@/components/ui';

interface RandomAnimeScreenParams {
  random: AnimeDataParams;
}

export const RandomAnimeScreen: FC<RandomAnimeScreenParams> = ({ random }) => (
  <Layout title={random.title}>
    <div className='text-black'>
      <Card item={random} isAnime />
      <CardVideo item={random} />
      <CardFooter item={random} />
    </div>
  </Layout>
);
