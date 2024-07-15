import { MediaTag } from "../__generated__/graphql"

export type ListFilter = {
  tags: MediaTag[],
  genres: string[],
  isAdult: boolean,
  averageScoreMin: number,
  averageScoreMax: number,
}