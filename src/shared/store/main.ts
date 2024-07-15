import { Media } from '@/shared/__generated__/graphql';
import { _GettersTree, defineStore, StateTree } from 'pinia';
import { ListFilter } from '../types/common';

interface MainState extends StateTree {
  listPage: number,
  listItems: Media[],
  filter: ListFilter,
}

type ListFilterKeys = keyof ListFilter;

interface MainActions {
  SET_PAGE: (value: number) => void,
  SET_LIST_ITEMS: (items: Media[]) => void,
  SET_FILTER_PROP:<TProp extends keyof ListFilter, TValue extends ListFilter[TProp]>(prop: TProp, value: TValue) => void,
}

interface MainGetters extends _GettersTree<MainState> {
  items: (state: MainState) => Media[],
  page: (state: MainState) => number, 
  infiniteFilter: (state: MainState) => ListFilter
}


export const useMainStore = defineStore<'main', MainState, MainGetters, MainActions>('main', {
  state: () => {
    return {
      listPage: 0,
      listItems: [],
      filter: {
        tags: [],
        averageScoreMax: 5,
        averageScoreMin: 0,
        genres: [],
        isAdult: false,
      }
    };
  },
  actions: {
    SET_PAGE(value: number) {
      this.listPage = value;
    },
    SET_LIST_ITEMS(items: Media[]) {
      this.listItems = items;
    },
    SET_FILTER_PROP<TProp extends keyof ListFilter, TValue extends ListFilter[TProp]>(prop: TProp, value: TValue) {
      console.log(prop, value);
      if ((typeof this.filter[prop]) === typeof value) {
        this.filter[prop] = value;
      }
    }
  },
  getters: {
    page: (state) => state.listPage,
    items: (state) => state.listItems,
    infiniteFilter: (state) => state.filter,
  }
});