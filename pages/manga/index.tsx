import dynamic from 'next/dynamic';
import { FC } from 'react';

const DynamicMangaScreen = dynamic(
  () =>
    import('@/components/share/manga-page/MangaScreen').then(
      (mod) => mod.MangaScreen
    ) as any
);

const MangaPage: FC = () => <DynamicMangaScreen />;

export default MangaPage;
