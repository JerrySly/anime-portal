import  gql  from "graphql-tag";
import { useLazyQuery } from "@vue/apollo-composable"

const GET_POPULAR_ANIME: any = gql`
  query Rec($sort: [MediaSort]!, $statusNotIn: [MediaStatus]!, $type: MediaType) {
      Page {
        media(sort: $sort, status_not_in: $statusNotIn, type: $type) {
        status
        coverImage {
          medium
          large
        }
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

export const getPopularMedia = (type = 'ANIME', statusNotIn = ['RELEASING', 'FINISHED'], sort = 'POPULARITY_DESC') => {
  return useLazyQuery(GET_POPULAR_ANIME, {
    type,
    statusNotIn,
    sort,
  })
}