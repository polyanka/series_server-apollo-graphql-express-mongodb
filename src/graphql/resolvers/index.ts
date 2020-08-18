import merge from 'lodash.merge';
import { episodeResolvers } from './Episode';
import { seriesResolvers } from './Series';

export const resolvers = merge(episodeResolvers, seriesResolvers);
