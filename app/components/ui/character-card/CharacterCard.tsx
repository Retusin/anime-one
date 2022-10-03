import Image from 'next/image';
import { FC } from 'react';

interface CharacterCardParams {
  item: CharactersParams;
}

export const CharacterCard: FC<CharacterCardParams> = ({ item }) => (
  <div className='pt-10'>
    <div className='mainContainer bg-white py-8 px-14 rounded-t-xl'>
      <div className='flex gap-16'>
        <div className='pt-10'>
          <Image
            src={item.images.jpg.image_url}
            width={250}
            height={350}
            className='rounded-xl shadow-2xl'
          />
        </div>
        <div>
          <h2 className='text-[2.5rem] mt-6 mb-6'>{item.name}</h2>
          <div className='flex items-baseline gap-5'>
            <span className='font-semibold text-[20px]'>Nicknames: </span>
            <ul className='mt-4'>
              {item.nicknames.map((nick) => (
                <li className='mb-4' key={nick}>
                  {nick}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div>
        {item.about.length && (
          <h3 className='my-6 text-[32px] font-semibold'>Description: </h3>
        )}
      </div>
      <div className='my-18'>
        <p>{item?.about}</p>
      </div>
    </div>
  </div>
);
