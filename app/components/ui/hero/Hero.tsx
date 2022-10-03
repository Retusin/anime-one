import { FC } from 'react';

interface HeroParams {
  title: string;
  description?: string;
  isCenter?: boolean;
}

export const Hero: FC<HeroParams> = ({ title, description, isCenter }) => (
  <div className='mainContainer py-10 border-b-gray-300 border-b text-black px-10'>
    <div>
      <h2 className={`text-[32px] ${isCenter ? 'px-10' : ''}`}>{title}</h2>
      <p className='text-[16px] mt-8'>{description}</p>
    </div>
  </div>
);
