import  gql  from "graphql-tag";
import { apolloClient } from "@/shared/api/apolloClient";
import { provideApolloClient, useLazyQuery, useQuery } from '@vue/apollo-composable'
import { UseLazyQueryReturn } from "@vue/apollo-composable/dist/useLazyQuery";

provideApolloClient(apolloClient)

const GET_RECOMMENDATION: any = gql`
  query Rec($searchText: String!) {
      Page {
        media(search: $searchText) {
          title {
            romaji
            english
            native
            userPreferred
          }
          coverImage {
            medium
          }
          description
        } 
      }
    }
`

export const searchMedia = (searchText: string) => {
  return useLazyQuery(GET_RECOMMENDATION, {    
    searchText,
  })
} 