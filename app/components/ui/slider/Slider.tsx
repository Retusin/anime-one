import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { Splide, SplideSlide } from '@splidejs/react-splide';

interface SliderParams {
  item: CharactersParams;
  title: string;
  isAnime?: boolean;
}

export const Slider: FC<SliderParams> = ({ item, title, isAnime }) => (
  <div className='mainContainer bg-white px-14 pt-12 pb-24'>
    <h2 className='font-semibold text-[32px] mb-12'>{title}</h2>
    {isAnime ? (
      <Splide
        options={{
          gap: 25,
          perPage: 5,
          perMove: 1,
          pagination: false,
          rewind: false,
          arrows: false
        }}
      >
        {item.anime.map((anime) => (
          <Link key={anime.anime.mal_id} href={`/anime/${anime.anime.mal_id}`}>
            <SplideSlide>
              <Image
                src={anime.anime.images.jpg.large_image_url}
                width={300}
                height={400}
                alt={anime.anime.title}
                className='rounded-xl shadow-2xl'
              />
              <h4 className='font-semibold mt-4'>{anime.anime.title}</h4>
            </SplideSlide>
          </Link>
        ))}
      </Splide>
    ) : (
      <Splide
        options={{
          gap: 25,
          perPage: 5,
          perMove: 1,
          pagination: false,
          rewind: false,
          arrows: false
        }}
      >
        {item.manga.map((anime) => (
          <Link key={anime.manga.mal_id} href={`/manga/${anime.manga.mal_id}`}>
            <SplideSlide>
              <Image
                src={anime.manga.images.jpg.large_image_url}
                width={300}
                height={400}
                alt={anime.manga.title}
                className='rounded-xl shadow-2xl'
              />
              <h4 className='font-semibold mt-4'>{anime.manga.title}</h4>
            </SplideSlide>
          </Link>
        ))}
      </Splide>
    )}
  </div>
);
