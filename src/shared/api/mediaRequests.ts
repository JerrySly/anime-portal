import gql from 'graphql-tag';
import { useLazyQuery } from '@vue/apollo-composable';
import { VariablesParameter } from '@vue/apollo-composable/dist/useQuery';

const GET_LIST_MEDIA: any = gql`
  query Rec(
    $sort: [MediaSort]
    $type: MediaType!
    $status: [MediaStatus]
    $page: Int!
    $perPage: Int!
    $averageScore_greater: Int
    $averageScore_less: Int
    $genre_in: [String]
    $tag_in: [String]
    $isAdult: Boolean
  ) {
    Page(page: $page, perPage: $perPage) {
      media(sort: $sort, type: $type, status_in: $status, averageScore_greater: $averageScore_greater, averageScore_lesser: $averageScore_less, genre_in: $genre_in, tagCategory_in: $tag_in, isAdult: $isAdult) {
        status
        coverImage {
          large
        }
        description
        title {
          romaji
          english
          native
          userPreferred
        }
      }
    }
  }
`;

export const getListMedia = (
  type = 'ANIME',
  sort = 'UPDATED_AT_DESC',
  page = 0,
  perPage = 15,
  status?: string[],
  scoreGreater?: number,
  scoreLess?: number,
  genres?: Array<string>,
  tags?: Array<string>,
  isAdult?: boolean,
) => {
  console.log(tags, 'getListMedia');
  const options: VariablesParameter<Record<string, unknown>> = {
    type,
    page,
    perPage,
    averageScore_greater: scoreGreater,
    averageScore_lesser: scoreLess,
    isAdult,
  };
  if (sort) {
    options.sort = sort;
  }
  if (status?.length) {
    options.status = status;
  }
  if (genres?.length) {
    options.genre_in = genres;
  }
  if (tags?.length) {
    options.tag_in = tags;
  }
  return useLazyQuery(GET_LIST_MEDIA, options);
};
