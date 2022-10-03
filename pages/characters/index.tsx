import dynamic from 'next/dynamic';
import { FC } from 'react';

import { Layout } from '@/components/layout';

const DynamicCharacterScreen = dynamic(
  () =>
    import('@/components/share/characters/CharactersScreen').then(
      (mod) => mod.CharactersScreen
    ) as any
);

const CharactersPage: FC = () => (
  <Layout title='Characters'>
    <DynamicCharacterScreen />
  </Layout>
);

export default CharactersPage;
