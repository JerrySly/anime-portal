import { MediaCoverImage, MediaTitle } from "@/shared/__generated__/graphql";
import { PropType } from "vue";

type MediaListItemProps = {
  readonly img?: MediaCoverImage,
  readonly title?: MediaTitle
};

type RecommendedSearchMediaProps = {
  readonly img: string;
  readonly description: string;
  readonly title?: MediaTitle | undefined;
}

export {RecommendedSearchMediaProps, MediaListItemProps};