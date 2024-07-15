import { GenreStats, MediaTag } from '@/shared/__generated__/graphql';
import { _GettersTree, defineStore } from 'pinia';
import { getTags } from '../api/tagRequests';
import { getGenres } from '../api/genreRequests';





interface AppState {
  error: string | undefined,
  loadedTags: Array<MediaTag>,
  loadedGenres: Array<string>,
}

interface MainGetters extends _GettersTree<AppState> {
  tags: (state: AppState) => MediaTag[],
  genres: (state: AppState) => string[],
}


interface AppActions {
  getAllTags: () => Promise<void>;
  getAllGenres: () => Promise<void>;
}


export const useAppStore = defineStore<'app', AppState, MainGetters, AppActions>('app', {
  state: () => {
    return {
      error: '',
      loadedTags: [],
      loadedGenres: [],
    };
  },
  actions: {
    async getAllGenres() {
      const {loading, error, onResult} = await getGenres();
      if (error) {
        this.error = error.value?.message;
      }
      onResult(({data}) => {
        this.loadedGenres = data?.GenreCollection;
      })
    },
    async getAllTags() {
      const {loading, error, onResult} = await getTags();
      if (error) {
        this.error = error.value?.message;
      }
      onResult(({data}) => {
        this.loadedTags = data?.MediaTagCollection;
      })
    }
  },
  getters: {
    tags: (state) => state.loadedTags,
    genres: (state) => state.loadedGenres,
  }
});
