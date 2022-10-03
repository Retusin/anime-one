import Link from 'next/link';
import { FC } from 'react';
import { BiLogIn } from 'react-icons/bi';

import styles from './Login.module.scss';

export const Login: FC = () => (
  <div className={styles.login}>
    <Link href='/login'>
      <button type='button' className={styles.login_button}>
        <span>
          <BiLogIn size={25} />
        </span>
        <span>Login</span>
      </button>
    </Link>
  </div>
);
