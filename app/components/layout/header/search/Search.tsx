import Image from 'next/image';
import Link from 'next/link';
import React, { ChangeEvent, FC } from 'react';

import { useDebounce, useOutside } from '@/hooks/index';
import { useGetAnimeByQuery } from '@/services/hooks/get-anime-search-by-q/getAnimeByQ';

import styles from './Search.module.scss';

export const Search: FC = () => {
  const { ref, isShow, setIsShow } = useOutside(false);
  const [searchValue, setSearchValue] = React.useState('');
  const debounced = useDebounce(searchValue, 1000);
  const { data } = useGetAnimeByQuery(debounced);
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className='relative hidden xl:block dark:text-white'>
      <div className='mr-10 text-white'>
        <form onClick={() => setIsShow(true)}>
          <input
            className={styles.input}
            type='text'
            value={searchValue}
            onChange={handleSearch}
            placeholder='Search...'
          />
        </form>
      </div>
      {isShow && (
        <div>
          {searchValue.length > 0 ? (
            <div className={styles.results} ref={ref}>
              {data?.data
                ?.filter((anime: AnimeDataParams) =>
                  anime.title.toLowerCase().includes(searchValue.toLowerCase())
                )
                .map((item: AnimeDataParams) => (
                  <Link href={`anime/${item.mal_id}`} key={item.mal_id}>
                    <div className='p-4'>
                      <Image
                        src={item.images.jpg.large_image_url}
                        width={150}
                        height={200}
                        className='rounded-xl'
                      />
                      <h3 className='max-w-[150px] mt-2'>{item.title}</h3>
                    </div>
                  </Link>
                ))}
            </div>
          ) : (
            ''
          )}
        </div>
      )}
    </div>
  );
};
