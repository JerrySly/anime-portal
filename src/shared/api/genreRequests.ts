import  gql  from "graphql-tag";
import { useQuery } from "@vue/apollo-composable"
import { CommonUseQueryReturn } from "../types/apiTypes";


export const GET_GENRE = gql`
query GET_GENRE {
  GenreCollection
}`

export const getGenres = async (): Promise<CommonUseQueryReturn> => {
  const { loading, error, result, onResult } =  await useQuery(GET_GENRE);
  return {
    loading,
    error,
    result,
    onResult,
  }
}