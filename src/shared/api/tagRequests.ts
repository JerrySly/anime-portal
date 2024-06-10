import  gql  from "graphql-tag";
import { MediaTag } from "../__generated__/graphql";
import { useLazyQuery, useQuery } from "@vue/apollo-composable"
import { CommonUseQueryReturn } from "../types/apiTypes";


export const GET_TAGS = gql`
query GET_TAGS {
  MediaTagCollection {
    id
    name
    description
    category
  }
}`

export const getTags = async (): Promise<CommonUseQueryReturn> => {
  const { loading, error, result, onResult } =  await useQuery(GET_TAGS);
  return {
    loading,
    error,
    result,
    onResult,
  }
}