import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import NextNProgress from 'nextjs-progressbar';
import { useEffect, useState } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import '../app/assets/styles/globals.scss';

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }
  return (
    <>
      <NextNProgress
        color='#9370DB'
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />

      <QueryClientProvider client={queryClient}>
        <ThemeProvider enableSystem attribute='class'>
          <Component {...pageProps} />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
};

export default MyApp;
