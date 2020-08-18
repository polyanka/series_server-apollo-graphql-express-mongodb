import { IResolvers } from 'apollo-server-express';
import { Episode } from '../../lib/types';

export const episodeResolvers: IResolvers = {
  Episode: {
    id: (episode: Episode): string => {
      return episode._id.toString();
    },
  },
};
