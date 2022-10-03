import { axiosBase } from '@/api/axios';
import { PageParams, REQUEST_LIMIT } from '@/utils/constants';

interface getAnimeByQ {
  searchValue: string;
}

export const AnimeServices = {
  async getAnimes({ pageParam }: PageParams) {
    const response = await axiosBase.get(
      `/top/anime?page=${pageParam}&limit=${REQUEST_LIMIT}`
    );
    return response.data;
  },
  async getAnimeByQ({ searchValue }: getAnimeByQ) {
    const response = await axiosBase.get(`/anime?limit=4&q=${searchValue}`);
    return response.data;
  }
};
