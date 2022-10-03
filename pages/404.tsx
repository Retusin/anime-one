import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NotFound: NextPage = () => (
  <>
    <Head>
      <title>OneAnime | 404</title>
    </Head>
    <div>
      <div className='bg-indigo-900 relative overflow-hidden h-screen'>
        <Image
          src='/images/notfound.jpg'
          layout='fill'
          className='absolute h-full w-full object-cover'
        />
        <div className='inset-0 bg-black opacity-60 absolute' />
        <div className='container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40'>
          <div className='w-full font-mono flex flex-col items-center relative z-10'>
            <h1 className='font-extrabold text-shadow-2xl text-5xl text-center text-white leading-tight mt-4'>
              Page Not Found
            </h1>
            <p className='font-extrabold text-shadow-2xl text-8xl my-44 text-white animate-bounce'>
              404
            </p>
            <Link href='/'>
              <a className='w-full text-center'>
                <button
                  type='button'
                  className='py-2 px-4 max-w-[max-content]  bg-violet-600 hover:bg-violet-700 focus:ring-violet-500 focus:ring-offset-violet-200 text-white transition ease-in duration-200 text-text-center text-[24px] font-semibold shadow-md mx-auto rounded-lg '
                >
                  Go Back
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default NotFound;
