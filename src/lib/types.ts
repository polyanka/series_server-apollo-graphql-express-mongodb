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
  episodes: ObjectId[];
}

export interface SeriesArgs {
  id: string;
}

export interface SeriesListQuery {
  genres?: GenresType;
  name?: RegExp;
}

export interface EpisodesQuery {
  genres?: GenresType;
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

export enum EpisodesFilter {
  DATE_LOW_TO_HIGH = 'DATE_LOW_TO_HIGH',
  DATE_HIGH_TO_LOW = 'DATE_HIGH_TO_LOW',
}

export interface Episode {
  _id: ObjectId;
  episode: number;
  season: number;
  name: string;
  date: string;
  rating: number;
}

export interface SeriesEpisodesArgs {
  filter: EpisodesFilter;
  limit: number;
  page: number;
}

export interface SeriesEpisodesData {
  total: number;
  result: Episode[];
}

export interface Database {
  episodes: Collection<Episode>;
  series: Collection<Series>;
}
