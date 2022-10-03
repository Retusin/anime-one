import { FC } from 'react';

import { Layout } from '@/components/layout';
import { CharacterCard, Slider } from '@/components/ui';

import '@splidejs/react-splide/css';

interface CharacterIdScreenParams {
  character: CharactersParams;
}

export const CharacterIdScreen: FC<CharacterIdScreenParams> = ({
  character
}) => (
  <Layout title={character.name}>
    <div className='mainContainer bg-white mt-12 mb-20 rounded-xl text-black'>
      <CharacterCard item={character} />
      <Slider item={character} title='Anime' isAnime />
      <Slider item={character} title='Manga' />
    </div>
  </Layout>
);
