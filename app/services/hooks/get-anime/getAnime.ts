import { AnimeServices } from '@/services/anime.services';
import { useInfiniteQuery } from '@tanstack/react-query';

export const getRequestAnime = () =>
  useInfiniteQuery(
    ['anime'],
    ({ pageParam = 1 }) => AnimeServices.getAnimes({ pageParam }),
    {
      getNextPageParam: (lastPage, allPages) => allPages.length + 1
    }
  );
