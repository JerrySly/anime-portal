import { computed } from "vue";
import { RecommendedSearchMediaProps } from "../model";

const getDescriptionIsHtml = (props: RecommendedSearchMediaProps) => computed((): boolean => {
  return props?.description?.indexOf('<') !== -1;
});

export {getDescriptionIsHtml}