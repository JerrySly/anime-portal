import { Media } from '@/shared/__generated__/graphql';
import { _GettersTree, defineStore, StateTree } from 'pinia';

interface MainState extends StateTree {
  listPage: number,
  listItems: Media[]
}

interface MainActions {
  SET_PAGE: (value: number) => void,
  SET_LIST_ITEMS: (items: Media[]) => void,
}

interface MainGetters extends _GettersTree<MainState> {
  items: (state: MainState) => Media[],
  page: (state: MainState) => number, 
}


export const useMainStore = defineStore<'main', MainState, MainGetters, MainActions>('main', {
  state: () => {
    return {
      listPage: 0,
      listItems: []
    };
  },
  actions: {
    SET_PAGE(value: number) {
      this.listPage = value;
    },
    SET_LIST_ITEMS(items: Media[]) {
      this.listItems = items;
    }
  },
  getters: {
    page: (state) => state.listPage,
    items: (state) => state.listItems,
  }
});
