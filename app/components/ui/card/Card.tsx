import Image from 'next/image';
import { FC } from 'react';
import { AiFillStar } from 'react-icons/ai';

interface CardParams {
  item: AnimeDataParams;
  isAnime?: boolean;
}

export const Card: FC<CardParams> = ({ item, isAnime }) => {
  const animeGenres = item.genres?.map((anime) => <div>{anime.name}</div>);
  const animeGenre = animeGenres?.slice(0, 1);
  const animeStudios = item?.studios?.map((anime) => <div>{anime.name}</div>);
  const animeStudio = animeStudios?.slice(0, 1);
  return (
    <div className='pt-10'>
      <div className='mainContainer bg-white py-8 px-14 rounded-t-xl'>
        <div className='flex gap-16'>
          <div className='pt-10'>
            <Image
              src={item.images.jpg.large_image_url}
              width={250}
              height={350}
              className='rounded-xl shadow-2xl border border-gray-900'
            />
          </div>
          <div>
            <div className='flex items-center gap-2'>
              <AiFillStar size={32} fill='#e4bb24' />
              <span className='text-[24px]'>
                {item.score > 0 ? `${item.score.toFixed(0)}` : '0'}/10
              </span>
            </div>
            <h2 className='text-[2.5rem] mt-6 mb-6'>{item.title}</h2>

            {isAnime ? (
              <div className='flex items-center gap-20'>
                {' '}
                <ul className='flex flex-col gap-y-5 text-gray-600 font-regular'>
                  <li>Type: </li>
                  <li>Episodes: </li>
                  <li>Status: </li>
                  <li>Genre: </li>
                  <li>Seasons: </li>
                  <li>Release: </li>
                  <li>Studio: </li>
                  <li>Age restrictions: </li>
                </ul>
                <ul className='flex flex-col gap-y-5 '>
                  <li>{item?.type ? item?.type : '-'}</li>
                  <li>{item?.episodes ? item?.episodes : '-'}</li>
                  <li>{item?.status ? item?.status : '-'}</li>
                  <li>{animeGenre.length ? animeGenre : '-'}</li>
                  <li>{item?.season ? item?.season : '-'}</li>
                  <li>{item?.year ? item?.year : '-'}</li>
                  <li>{animeStudio.length ? animeGenre : '-'}</li>
                  <li>{item?.rating ? item?.rating : '-'}</li>
                </ul>
              </div>
            ) : (
              <div className='flex items-center gap-20'>
                {' '}
                <ul className='flex flex-col gap-y-5 text-gray-600 font-regular'>
                  <li>Type: </li>
                  <li>Status: </li>
                  <li>Genre: </li>
                </ul>
                <ul className='flex flex-col gap-y-5 '>
                  <li>{item?.type ? item?.type : '-'}</li>
                  <li>{item?.status ? item?.status : '-'}</li>
                  <li>{animeGenre || '-'}</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {item.synopsis.length && (
          <h3 className='mt-24 text-[32px] font-semibold'>Description</h3>
        )}

        <div className='my-12'>
          <p>{item?.synopsis}</p>
        </div>
      </div>
    </div>
  );
};
