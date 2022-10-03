import { MangaServices } from '@/services/manga.services';
import { useInfiniteQuery } from '@tanstack/react-query';

export const getRequestManga = () =>
  useInfiniteQuery(
    ['manga'],
    ({ pageParam = 1 }) => MangaServices.getMangas({ pageParam }),
    {
      getNextPageParam: (lastPage, allPages) => allPages.length + 1
    }
  );
