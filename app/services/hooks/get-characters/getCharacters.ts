import { CharactersServices } from '@/services/characters.services';
import { useInfiniteQuery } from '@tanstack/react-query';

export const getRequestCharacters = () =>
  useInfiniteQuery(
    ['character'],
    ({ pageParam = 1 }) => CharactersServices.getCharacters({ pageParam }),
    {
      getNextPageParam: (lastPage, allPages) => allPages.length + 1
    }
  );
