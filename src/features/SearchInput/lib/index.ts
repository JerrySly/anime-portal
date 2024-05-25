import { debounce, result } from "lodash";
import { autocompleteItems, loadingState } from "../model";
import { searchMedia } from "../api";

export const debouncedSearch = debounce(async (searchText) => {
  console.log('Search');
  const { load } = searchMedia(searchText);
  const result = await load();
  autocompleteItems.value = result.Page.media;  
}, 400)