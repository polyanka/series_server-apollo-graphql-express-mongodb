import { IResolvers } from 'apollo-server-express';
import { ObjectId } from 'mongodb';
import {
  Database,
  Series,
  SeriesArgs,
  SeriesListQuery,
  SeriesListArgs,
  SeriesListData,
  SeriesListFilter,
  CreateSeriesArgs,
} from '../../lib/types';

// Provide resolver functions for your schema fields
export const seriesResolvers: IResolvers = {
  Query: {
    series: async (
      _root: undefined,
      { id }: SeriesArgs,
      { db }: { db: Database }
    ): Promise<Series> => {
      try {
        const series = await db.series.findOne({ _id: new ObjectId(id) });
        if (!series) {
          throw new Error("Series can't be find");
        }

        return series;
      } catch (error) {
        throw new Error(`Failed to query Series: ${error}`);
      }
    },
    seriesList: async (
      _root: undefined,
      { genres, name, filter, limit, page }: SeriesListArgs,
      { db }: { db: Database }
    ): Promise<SeriesListData> => {
      try {
        const query: SeriesListQuery = {};

        if (genres) {
          query.genres = genres;
        }

        if (name) {
          query.name = name;
        }

        const data: SeriesListData = {
          total: 0,
          result: [],
        };

        let cursor = db.series.find(query);

        if (filter && filter == SeriesListFilter.RATING_HIGH_TO_LOW) {
          cursor = cursor.sort({ rating: 1 });
        }

        if (filter && filter == SeriesListFilter.RATING_LOW_TO_HIGH) {
          cursor = cursor.sort({ rating: -1 });
        }

        cursor = cursor.skip(page > 0 ? (page - 1) * limit : 0);
        cursor = cursor.limit(limit);
        data.total = await cursor.count();
        data.result = await cursor.toArray();

        return data;
      } catch (error) {
        throw new Error(`failed to query series: ${error}`);
      }
    },
  },
  Mutation: {
    createSeries: async (
      _root: undefined,
      { input }: CreateSeriesArgs,
      { db }: { db: Database }
    ): Promise<Series> => {
      try {
        const id = new ObjectId();
        const insertRedult = await db.series.insertOne({
          _id: id,
          ...input,
        });
        const insertedSeries = insertRedult.ops[0];

        return insertedSeries;
      } catch (error) {
        throw new Error(`Failed to log in: ${error}`);
      }
    },
  },
  Series: {
    id: (series: Series): string => {
      return series._id.toString();
    },
  },
};
