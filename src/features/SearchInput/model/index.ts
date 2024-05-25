import { Media } from "@/shared/__generated__/graphql";
import { ref, Ref } from "vue";

const autocompleteItems: Ref<Media[]> = ref([]);
const loadingState: Ref<boolean> = ref(true);
const searchText: Ref<string> = ref('');

export { autocompleteItems, loadingState, searchText }