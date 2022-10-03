import { FC, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { CharacterItem } from '@/components/share/characters/characters-item/CharacterItem';
import { Hero } from '@/components/ui';
import { getRequestCharacters } from '@/services/hooks/get-characters/getCharacters';

export const CharactersScreen: FC = () => {
  const { ref, inView } = useInView();
  const { data: characters, fetchNextPage } = getRequestCharacters();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  if (!characters) return null;

  return (
    <div className='py-10'>
      <div className='mainContainer bg-white rounded-xl shadow-2xl '>
        <Hero
          title='Anime characters'
          description='Below is the entire list of Anime characters. Here you will find complete information about your favorite characters - height, weight, field of activity, pictures, photos, anime in which they participated and much more.'
        />
        <ul className='px-6 grid grid-cols-6 gap-10 items-center py-8 text-center items-baseline'>
          {characters.pages.map((page) =>
            page.data.map((repo: CharactersParams) => (
              <CharacterItem item={repo} />
            ))
          )}
        </ul>
        <div ref={ref} />
      </div>
    </div>
  );
};
