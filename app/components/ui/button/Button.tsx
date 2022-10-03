import React, { FC } from 'react';

interface ButtonParams {
  title: string;
  onClick?: () => void;
}

export const Button: FC<ButtonParams> = ({ title, onClick }) => (
  <button
    type='button'
    onClick={onClick}
    className='py-2 px-4 max-w-[max-content]  bg-violet-600 hover:bg-violet-700 focus:ring-violet-500 focus:ring-offset-violet-200 text-white transition ease-in duration-200 text-text-center text-[24px] font-semibold shadow-md mx-auto rounded-lg '
  >
    {title}
  </button>
);
