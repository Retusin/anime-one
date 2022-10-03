import React from 'react';

import { Layout } from '@/components/layout';
import { Card, CardFooter } from '@/components/ui';

interface MangaIdProps {
  manga: AnimeDataParams;
}

export const MangaIdScreen: React.FC<MangaIdProps> = ({ manga }) => (
  <Layout title={manga.title}>
    <div className='text-black'>
      <Card item={manga} />
      <CardFooter item={manga} />
    </div>
  </Layout>
);
