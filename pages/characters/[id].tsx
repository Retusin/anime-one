import { GetServerSideProps } from 'next';
import { FC } from 'react';

import { axiosBase } from '@/api/axios';
import { CharacterIdScreen } from '@/components/share';

interface CharactersIdParams {
  character: CharactersParams;
}

const CharactersIdPage: FC<CharactersIdParams> = ({ character }) => (
  <CharacterIdScreen character={character} />
);

export default CharactersIdPage;

export const getServerSidePaths = async () => {
  const res = await axiosBase.get(`/characters`);
  const data = await res.data;

  const paths = data.data.map((character: CharactersParams) => ({
    params: {
      id: character.mal_id.toString()
    }
  }));
  return {
    paths,
    fallback: false
  };
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const res = await axiosBase.get(`/characters/${params?.id}/full`);
  const data = await res.data;
  return {
    props: {
      character: data.data
    }
  };
};
