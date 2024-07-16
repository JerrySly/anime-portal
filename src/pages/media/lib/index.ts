import { Media } from "@/shared/__generated__/graphql";
import { getMedia } from "../api";

export const loadMedia = async (id: number) => {
  const { load } = getMedia(id);
  const media: Media = await load();
  return {
    media,
  };
}