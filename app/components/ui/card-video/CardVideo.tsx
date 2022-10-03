import { FC } from 'react';
import ReactPlayer from 'react-player';

interface CardVideoParams {
  item: AnimeDataParams;
}

export const CardVideo: FC<CardVideoParams> = ({ item }) => (
  <div>
    {item.trailer.url?.length && (
      <div className='bg-[rgba(14,56,57,0.95)] shadow-2xl rounded-lg'>
        <div className='mainContainer py-8'>
          <div className='text-white text-[24px] sm:text-[36px]  mb-14'>
            <h2>Watch trailer «{item.title}»</h2>
          </div>
          <div className='rounded-xl'>
            <ReactPlayer
              url={item.trailer.url}
              width='100%'
              height='500px'
              controls
            />
          </div>
        </div>
      </div>
    )}
  </div>
);
