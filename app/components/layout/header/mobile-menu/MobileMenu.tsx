import Link from 'next/link';
import React, { FC } from 'react';
import { FiMenu } from 'react-icons/fi';

import { MenuData } from '@/components/layout/header/menu/menu.data';
import { useOutside } from '@/hooks';

export const MobileMenu: FC = () => {
  const { ref, isShow, setIsShow } = useOutside(false);
  return (
    <div className='flex md:hidden'>
      <button type='button' onClick={() => setIsShow(true)}>
        <FiMenu size={25} />
      </button>
      {isShow && (
        <div className='absolute top-0 left-0 w-full' ref={ref}>
          <div className='p-5 bg-green-50 border rounded shadow-sm'>
            <div className='flex items-center justify-between mb-4'>
              <div>
                <a
                  href='/'
                  aria-label='Company'
                  title='Company'
                  className='inline-flex items-center text-black font-semibold'
                >
                  AnimeOne
                </a>
              </div>
              <div>
                <button
                  type='button'
                  aria-label='Close Menu'
                  title='Close Menu'
                  className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                  onClick={() => setIsShow(false)}
                >
                  <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                    <path
                      fill='currentColor'
                      d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                    />
                  </svg>
                </button>
              </div>
            </div>
            <nav>
              <ul className='space-y-4'>
                {MenuData.map((item) => (
                  <li key={item.title}>
                    <button type='button' onClick={() => setIsShow(false)}>
                      <Link href={item.link}>
                        <div className='text-black'>{item.title}</div>
                      </Link>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};
