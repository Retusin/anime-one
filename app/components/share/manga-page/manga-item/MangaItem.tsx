import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface MangaItemParams {
  item: AnimeDataParams;
}

export const MangaItem: FC<MangaItemParams> = ({ item }) => (
  <div>
    <Link href={`manga/${item.mal_id}`}>
      <div className='cursor-pointer text-black'>
        <Image
          src={item.images.jpg.large_image_url}
          width={198}
          height={250}
          alt={item.title}
          className='rounded-xl shadow-2xl'
        />
        <div className='mt-4'>
          <div className='text-xs font-semibold mb-2 max-w-[152px] mx-auto line-clamp-1'>
            {item.title_japanese}
          </div>
          <h2 className='line-clamp-1 text-xl max-w-[200px] mx-auto text-violet-900'>
            {item.title}
          </h2>
        </div>
      </div>
    </Link>
  </div>
);
