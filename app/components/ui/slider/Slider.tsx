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
  <div>
    <div className=' bg-white px-8 py-4 sm:py-8'>
      <h2 className='font-semibold line-clamp-1 sm:line-clamp-none text-[32px] mb-12'>
        {title}
      </h2>
      {isAnime ? (
        <Splide
          options={{
            gap: 25,
            perMove: 1,
            perPage: 5,
            pagination: false,
            rewind: false,
            arrows: false,
            breakpoints: {
              476: {
                perPage: 1
              },
              640: {
                perPage: 2
              },
              800: {
                perPage: 3
              },
              1085: {
                perPage: 4
              }
            }
          }}
        >
          {item.anime.map((anime) => (
            <Link
              key={anime.anime.mal_id}
              href={`/anime/${anime.anime.mal_id}`}
            >
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
            arrows: false,
            breakpoints: {
              476: {
                perPage: 1,
                gap: 0
              },
              640: {
                perPage: 2
              },
              768: {
                perPage: 3
              },
              950: {
                perPage: 4
              }
            }
          }}
        >
          {item.manga.map((anime) => (
            <Link
              key={anime.manga.mal_id}
              href={`/manga/${anime.manga.mal_id}`}
            >
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
  </div>
);
