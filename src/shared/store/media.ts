import { _GettersTree, defineStore } from "pinia";
import { Media } from "../__generated__/graphql";
import { getMedia } from "../api/mediaRequests";


interface MediaState {
  media: Media | null,
}

interface MediaGetter  extends _GettersTree<MediaState>  {
  selectedMedia: (state: MediaState) => Media | null,
}

interface MediaAction {
  GET_SELECT_MEDIA: (id: number) => Promise<void>
}

export const useMediaStore = defineStore<'media', MediaState, MediaGetter, MediaAction>('media', {
  state: () => {
    return {
      media: null,
    }
  },
  actions: {
    async GET_SELECT_MEDIA(id: number) {
      const {loading, error, onResult} = await getMedia(id);
      onResult(({data}) => {
        this.media = data?.Page?.media?.[0];
      })
    }
  },
  getters: {
    selectedMedia: (state) => state.media
  }
})