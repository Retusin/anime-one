import type { GetStaticProps, NextPage } from 'next';

import { axiosBase } from '@/api/axios';
import { Layout } from '@/components/layout';
import { Home } from '@/components/share/home';

interface HomePageParams {
  animeData: TopAnimeParams;
}

const HomePage: NextPage<HomePageParams> = ({ animeData }) => (
  <Layout title='Home'>
    <Home anime={animeData} />
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const anime = await axiosBase.get(`/top/anime`);
  const animeData: TopAnimeParams = await anime.data;

  return {
    props: {
      animeData
    }
  };
};

export default HomePage;
