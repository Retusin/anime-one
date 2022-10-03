import { FC } from 'react';

interface CardFooterParams {
  item: AnimeDataParams;
}

export const CardFooter: FC<CardFooterParams> = ({ item }) => (
  <div className='container mx-auto px-8'>
    <div className=' bg-white py-10 rounded-b-xl mb-10'>
      <p className='py-8 text-center border-t-gray-400 border-b-gray-400 border-t border-b'>
        {`There are no reviews and reviews for the anime «${item.title}»`}
      </p>
    </div>
  </div>
);
