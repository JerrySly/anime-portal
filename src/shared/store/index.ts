import { MediaTag } from '@/shared/__generated__/graphql';
import { _GettersTree, defineStore } from 'pinia';
import { getTags } from '../api/tagRequests';





interface AppState {
  error: string | undefined,
  loadedTags: Array<MediaTag>
}

interface MainGetters extends _GettersTree<AppState> {
  tags: (state: AppState) => MediaTag[],
}


interface AppActions {
  getAllTags: () => Promise<void>;
}


export const useAppStore = defineStore<'app', AppState, MainGetters, AppActions>('app', {
  state: () => {
    return {
      error: '',
      loadedTags: []
    };
  },
  actions: {
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
  }
});
