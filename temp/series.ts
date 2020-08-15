import { ObjectId } from 'mongodb';
import { Series, GenresType, StatusType } from '../src/lib/types';
import { connectDatabase } from '../src/services';

const seriesList: Series[] = [
  {
    _id: new ObjectId(),
    name: 'V Wars',
    date: 2019,
    genres: [GenresType.Horror],
    rating: 8.2,
    status: StatusType.Active,
  },
  {
    _id: new ObjectId(),
    name: 'See',
    date: 2019,
    genres: [GenresType.Drama, GenresType.Fantasy],
    rating: 8.7,
    status: StatusType.Finished,
  },
  {
    _id: new ObjectId(),
    name: 'Titans',
    date: 2018,
    genres: [GenresType.Comics, GenresType.Drama, GenresType.Fantasy],
    rating: 8.9,
    status: StatusType.Finished,
  },
];

const insertInDB = async () => {
  try {
    console.log('running insert');

    const db = await connectDatabase();

    for (const series of seriesList) {
      await db.series.insertOne(series);
    }

    console.log('success');
  } catch {
    throw new Error('failed');
  }
};

insertInDB();
