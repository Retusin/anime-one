import { useTheme } from 'next-themes';
import { FC, useEffect, useState } from 'react';
import { BsFillMoonFill, BsSunFill } from 'react-icons/bs';

import { Login, Logo, Menu, Search } from '@/components/layout';

import styles from './Header.module.scss';

export const Header: FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <BsSunFill
          className='w-6 h-6 '
          role='button'
          onClick={() => setTheme('light')}
        />
      );
    }
    return (
      <BsFillMoonFill
        className='w-6 h-6'
        role='button'
        onClick={() => setTheme('dark')}
      />
    );
  };
  return (
    <header className={styles.header}>
      <div className={styles.header_wrapper}>
        <Logo />
        <div className={styles.header_menu}>
          <Menu />
        </div>
        <div className='mr-6'>{renderThemeChanger()}</div>
        <div>
          <Search />
        </div>
        <div>
          <Login />
        </div>
      </div>
    </header>
  );
};
