import { ApolloError } from "@apollo/client";
import { Media } from "../__generated__/graphql";
import { Ref } from "vue";
import { ApolloQueryResult } from "@apollo/client";
import { OnResultContext } from "@vue/apollo-composable/dist/useQuery";


export type MediaListReturn = {
  Page: {
    media: Media[]
  }
}

export type CommonUseQueryReturn = {
  loading: Ref<boolean>,
  error: Ref<ApolloError | null>,
  result: Ref<any>,
  onResult: (fn: (param: ApolloQueryResult<any>, context: OnResultContext) => void) => {
    off: any
  }
}