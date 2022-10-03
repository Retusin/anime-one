import { GetServerSideProps, NextPage } from 'next';
import React from 'react';

import { axiosBase } from '@/api/axios';
import { AnimeIdScreen } from '@/components/share';

interface AnimeIdPageParams {
  anime: AnimeDataParams;
}

const AnimeIdPage: NextPage<AnimeIdPageParams> = ({ anime }) => (
  <AnimeIdScreen anime={anime} />
);

export default AnimeIdPage;

export const getServerSidePaths = async () => {
  const res = await axiosBase.get(`/anime`);
  const data = await res.data;

  const paths = data.data.map((anim: AnimeDataParams) => ({
    params: {
      id: anim.mal_id.toString()
    }
  }));
  return {
    paths,
    fallback: false
  };
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const res = await axiosBase.get(`/anime/${params?.id}`);
  const data = await res.data;
  return {
    props: {
      anime: data.data
    }
  };
};
