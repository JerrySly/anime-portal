import { Media } from '@/shared/__generated__/graphql';
import { defineStore, StateTree } from 'pinia';

interface MainState extends StateTree {
  listPage: number,
  listItems: Media[]
}

export const store = defineStore<'main', MainState>('main', {
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
  }
});
