import { AnimeServices } from '@/services/anime.services';
import { useQuery } from '@tanstack/react-query';

export const useGetAnimeByQuery = (searchValue: string) =>
  useQuery(['search'], () => AnimeServices.getAnimeByQ({ searchValue }), {
    enabled: Boolean(searchValue)
  });
