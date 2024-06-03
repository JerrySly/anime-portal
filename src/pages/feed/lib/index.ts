import { Media } from "@/shared/__generated__/graphql";
import { getPopularMedia } from "../api"

export type LoadPopularReturn = {
  popularAnime: Array<Media>,
  popularManga: Array<Media>,
}

export const loadPopular = async (): Promise<LoadPopularReturn>  => {
  const { load: loadAnime } = getPopularMedia('ANIME');
  const popularAnime: Array<Media> = await loadAnime();
  const { load: loadManga } = getPopularMedia('MANGA');
  const popularManga: Array<Media> = await loadManga();
  return {
    popularAnime,
    popularManga
  }
}