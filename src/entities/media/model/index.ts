import { MediaTitle } from "@/shared/__generated__/graphql";

type RecommendedSearchMediaProps = {
  readonly img: string;
  readonly description: string;
  readonly title?: MediaTitle | undefined;
}

export {RecommendedSearchMediaProps};