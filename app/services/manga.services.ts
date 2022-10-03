import { axiosBase } from '@/api/axios';
import { PageParams, REQUEST_LIMIT } from '@/utils/constants';

export const MangaServices = {
  async getMangas({ pageParam }: PageParams) {
    const response = await axiosBase.get(
      `top/manga?page=${pageParam}&limit=${REQUEST_LIMIT}`
    );
    return response.data;
  }
};
