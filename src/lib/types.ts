import { Collection, ObjectId } from 'mongodb';

export enum GenresType {
  Drama = 'DRAMA',
  Horror = 'HORROR',
  Fantasy = 'FANTASY',
  Thriller = 'THRILLER',
  Comics = 'COMICS',
}

export enum StatusType {
  Active = 'ACTIVE',
  Finished = 'FINISHED',
}

export enum SeriesListFilter {
  RATING_LOW_TO_HIGH = 'RATING_LOW_TO_HIGH',
  RATING_HIGH_TO_LOW = 'RATING_HIGH_TO_LOW',
}

export interface Series {
  _id: ObjectId;
  name: string;
  date: number;
  status: StatusType;
  genres: GenresType[];
  rating: number;
}

export interface SeriesArgs {
  id: string;
}

export interface SeriesListQuery {
  genres?: GenresType;
  name?: string;
}

export interface SeriesListArgs {
  genres: GenresType | null;
  name: string | null;
  filter: SeriesListFilter;
  limit: number;
  page: number;
}

export interface SeriesListData {
  total: number;
  result: Series[];
}

export interface CreateSeriesInput {
  id: string;
  name: string;
  date: number;
  status: StatusType;
  genres: GenresType[];
  rating: number;
}

export interface CreateSeriesArgs {
  input: CreateSeriesInput;
}

export interface Database {
  series: Collection<Series>;
}
