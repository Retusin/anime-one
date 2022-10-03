import dynamic from 'next/dynamic';
import { FC } from 'react';

const DynamicAnimeScreen = dynamic(
  () =>
    import('@/components/share/anime-page/AnimeScreen').then(
      (mod) => mod.AnimeScreen
    ) as any
);

const AnimePage: FC = () => <DynamicAnimeScreen />;

export default AnimePage;
