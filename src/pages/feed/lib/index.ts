import { MediaTag } from '@/shared/__generated__/graphql';
import { getPopularMedia } from '../api';
import { getListMedia } from '@/shared/api/mediaRequests';
import { MediaListReturn } from '@/shared/types/apiTypes';

export type LoadPopularReturn = {
  popularAnime: MediaListReturn,
  popularManga: MediaListReturn,
};

export const loadPopular = async (): Promise<LoadPopularReturn> => {
  const { load: loadAnime } = getPopularMedia('ANIME');
  const popularAnime: MediaListReturn = await loadAnime();
  const { load: loadManga } = getPopularMedia('MANGA');
  const popularManga: MediaListReturn = await loadManga();
  return {
    popularAnime,
    popularManga,
  };
};

export const loadListMedia = async (
  page: number,
  perPage = 15,
  type: string,
  status: string[],
  sort: string,
  scoreGreater = 0,
  scoreLess = 0,
  genres: string[] = [],
  tags: MediaTag[] = [],
  isAdult = false,
): Promise<{
  listItems: MediaListReturn,
}> => {
  const { load } = getListMedia(type, sort, page, perPage, status, scoreGreater, scoreLess, genres, tags.map(x => x.name), isAdult);
  const listItems: MediaListReturn = await load();
  return {
    listItems,
  };
};
