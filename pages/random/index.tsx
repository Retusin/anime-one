import { GetServerSideProps } from 'next';
import { FC } from 'react';

import { axiosBase } from '@/api/axios';
import { RandomAnimeScreen } from '@/components/share';

interface RandomPageParams {
  random: AnimeDataParams;
}

const RandomPage: FC<RandomPageParams> = ({ random }) => (
  <RandomAnimeScreen random={random} />
);

export default RandomPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axiosBase.get(`/random/anime`);
  const data = await res.data;

  return {
    props: {
      random: data.data
    }
  };
};
