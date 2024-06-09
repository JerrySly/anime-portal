import  gql  from "graphql-tag";
import { useLazyQuery } from "@vue/apollo-composable"
import { VariablesParameter } from "@vue/apollo-composable/dist/useQuery";

const GET_LIST_MEDIA: any = gql`
  query Rec($sort: [MediaSort], $type: MediaType!, $status: [MediaStatus], $page: Int!, $perPage: Int!) {
      Page(page: $page, perPage: $perPage) {
        media(sort: $sort, type: $type, status_in: $status ) {
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
`

export const getListMedia = (type = 'ANIME', sort = 'UPDATED_AT_DESC', page = 0, perPage = 15, status?: string[], ) => {
  
  const options: VariablesParameter<Record<string, unknown>> = {
    type,
    page,
    perPage
  };
  if (sort) {
    options.sort = sort
  }
  if (status?.length) {
    options.status = status;
  }
  return useLazyQuery(GET_LIST_MEDIA, options )
}