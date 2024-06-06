import { debounce, result } from "lodash";
import { autocompleteItems, loadingState } from "../model";

export const debouncedSearch = debounce(async (searchText: string, searchMedia) => {
  console.log('Search');
  const { load } = searchMedia(searchText);
  const result = await load();
  autocompleteItems.value = result.Page.media;  
}, 400)