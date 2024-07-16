import  gql  from "graphql-tag";
import { useLazyQuery } from "@vue/apollo-composable"

const GET_POPULAR_ANIME: any = gql`
  query Rec($id: Int!) {
      Page {
        media(id: $id) {
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

export const getMedia = (id: number) => {
  return useLazyQuery(GET_POPULAR_ANIME, {
    id,
  })
}