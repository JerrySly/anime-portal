import { Media } from "@/shared/__generated__/graphql";
import { ref, Ref } from "vue";

export const popularAnime:Ref<Array<Media>> = ref([]); 
export const popularManga:Ref<Array<Media>> = ref([]); 
export const loaded:Ref<boolean> = ref(false);
export const listMedia: Ref<Array<Media>> = ref([]);