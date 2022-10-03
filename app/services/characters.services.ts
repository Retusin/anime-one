import { axiosBase } from '@/api/axios';
import { PageParams, REQUEST_LIMIT } from '@/utils/constants';

export const CharactersServices = {
  async getCharacters({ pageParam }: PageParams) {
    const response = await axiosBase.get(
      `/top/characters?page=${pageParam}&limit=${REQUEST_LIMIT}`
    );
    return response.data;
  }
};
