import { gql } from 'apollo-server-express';

// Construct a schema, using GraphQL schema language
export const typeDefs = gql`
  enum GenresType {
    DRAMA
    HORROR
    FANTASY
    THRILLER
    COMICS
  }

  enum StatusType {
    ACTIVE
    FINISHED
  }

  enum SeriesListFilter {
    RATING_LOW_TO_HIGH
    RATING_HIGH_TO_LOW
  }

  type Series {
    id: ID!
    name: String!
    date: Int!
    status: StatusType!
    genres: [GenresType!]!
    rating: Float!
    episodes(filter: EpisodesFilter!, limit: Int!, page: Int!): Episodes!
  }

  input CreateSeriesInput {
    name: String!
    date: Int!
    status: StatusType!
    genres: [GenresType!]!
    rating: Float!
  }

  type SeriesList {
    total: Int!
    result: [Series!]!
  }

  enum EpisodesFilter {
    DATE_LOW_TO_HIGH
    DATE_HIGH_TO_LOW
  }

  type Episode {
    id: ID!
    name: String!
    date: String!
    rating: Float!
    episode: Int!
    season: Int!
  }

  type Episodes {
    total: Int!
    result: [Episode!]!
  }

  type Query {
    series(id: ID!): Series!
    seriesList(
      genres: GenresType
      name: String
      filter: SeriesListFilter!
      limit: Int!
      page: Int!
    ): SeriesList!
  }

  type Mutation {
    createSeries(input: CreateSeriesInput!): Series!
  }
`;
