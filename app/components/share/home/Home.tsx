import { FC } from 'react';

import { AnimeList, Hero, HomeInfo, NewAnime } from '@/components/share/home';

interface HomeParams {
  anime: TopAnimeParams;
}

export const Home: FC<HomeParams> = ({ anime }) => (
  <div>
    <Hero />
    <div className='mx-auto max-w-[1310px] px-[15px]'>
      <NewAnime mount='Fall' anime={anime} />
      <AnimeList anime={anime} />
      <HomeInfo />
    </div>
  </div>
);
