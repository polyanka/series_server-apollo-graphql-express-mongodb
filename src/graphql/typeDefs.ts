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
    rating: Int!
  }

  input CreateSeriesInput {
    name: String!
    date: Int!
    status: StatusType!
    genres: [GenresType!]!
    rating: Int!
  }

  type SeriesList {
    total: Int!
    result: [Series!]!
  }

  type Query {
    series(id: ID!): Series!
    seriesList(
      genres: GenresType
      filter: SeriesListFilter!
      limit: Int!
      page: Int!
    ): SeriesList!
  }

  type Mutation {
    createSeries(input: CreateSeriesInput!): Series!
  }
`;
