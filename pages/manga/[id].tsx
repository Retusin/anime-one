import { GetServerSideProps } from 'next';
import { FC } from 'react';

import { axiosBase } from '@/api/axios';
import { MangaIdScreen } from '@/components/share';

interface MangaIdPageParams {
  manga: AnimeDataParams;
}

const MangaIdPage: FC<MangaIdPageParams> = ({ manga }) => (
  <MangaIdScreen manga={manga} />
);

export default MangaIdPage;

export const getServerSidePath = async () => {
  const res = await axiosBase.get(`/manga`);
  const data = await res.data;

  const paths = data.data.map((manga: AnimeDataParams) => ({
    params: {
      id: manga.mal_id.toString()
    }
  }));
  return {
    paths,
    fallback: true
  };
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const res = await axiosBase.get(`/manga/${params?.id}/full`);
  const data = await res.data;
  return {
    props: {
      manga: data.data
    }
  };
};
