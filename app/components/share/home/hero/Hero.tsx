import Link from 'next/link';
import React, { FC } from 'react';

export const Hero: FC = () => (
  <div className='bg-violet-200 shadow-lg dark:bg-violet-900'>
    <div className='text-center container mx-auto py-10'>
      <div className='max-w-[1000px] mx-auto'>
        <h1 className='text-5xl font-bold'>AnimeOne</h1>
        <p className='py-6'>
          For many years, Japanese animation has been a huge success around the
          world. These ribbons love for the bright plot, the original design and
          constant intensity of emotions.
        </p>
        <p className='py-6'>
          Many fans like to watch anime online, but to do this often have to use
          several sources, as none of them can be called universal. But we have
          great news for anime fans! We have launched a new project AnimeOne
          dedicated to online watching anime. Now you do not have to navigate
          the Internet in search of your favorite title - all the best anime in
          good quality already on our portal. We ourselves love this genre and
          therefore tried to make our site as convenient and exciting as
          possible.
        </p>
        <div className='py-4'>
          <Link href='/anime'>
            <button
              type='button'
              className='py-2 px-4 max-w-[max-content]  bg-violet-600 hover:bg-violet-700 focus:ring-violet-500 focus:ring-offset-violet-200 text-white transition ease-in duration-200 text-text-center text-[24px] font-semibold shadow-md mx-auto rounded-lg '
            >
              Show All
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);
