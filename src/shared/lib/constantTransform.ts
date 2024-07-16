import { MediaStatus, Scalars } from "../__generated__/graphql";

export const transformStatusToLang = (status: MediaStatus | undefined | null) => {
  switch(status) {
    case MediaStatus.Cancelled :  return 'Cancelled';
    case MediaStatus.Finished :  return 'Finished';
    case MediaStatus.Hiatus :  return 'Paused';
    case MediaStatus.Releasing :  return 'Releasing';
    case MediaStatus.NotYetReleased :  return 'Not yet released';
    default: return 'No info'
  }
}

export const transformCountryToLang = (country: string) => {
  switch(country) {
    case "JP" :  return 'Japan';
    case MediaStatus.Finished :  return 'Finished';
    case MediaStatus.Hiatus :  return 'Paused';
    case MediaStatus.Releasing :  return 'Releasing';
    case MediaStatus.NotYetReleased :  return 'Not yet released';
    default: return 'No info'
  }
}