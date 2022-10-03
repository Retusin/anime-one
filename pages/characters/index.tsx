import { FC } from 'react';

import { Layout } from '@/components/layout';
import { CharactersScreen } from '@/components/share';

const CharactersPage: FC = () => (
  <Layout title='Characters'>
    <CharactersScreen />
  </Layout>
);

export default CharactersPage;
