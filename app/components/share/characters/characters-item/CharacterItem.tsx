import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface CharacterItemParams {
  item: CharactersParams;
}

export const CharacterItem: FC<CharacterItemParams> = ({ item }) => (
  <Link href={`characters/${item.mal_id}`}>
    <div>
      <Image
        src={item.images.jpg.image_url}
        width={188}
        height={262}
        className='rounded-xl shadow-2xl '
      />
      <div className='mt-3'>
        <h2 className='text-lg font-semibold text-black'>{item.name}</h2>
      </div>
    </div>
  </Link>
);
