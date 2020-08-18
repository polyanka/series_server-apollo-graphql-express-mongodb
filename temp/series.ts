import { Episode } from './../src/lib/types';
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
    episodes: [
      new ObjectId('5f3ae15f1672725f1c89ee26'),
      new ObjectId('5f3ae15f1672725f1c89ee27'),
    ],
  },
  {
    _id: new ObjectId(),
    name: 'See',
    date: 2019,
    genres: [GenresType.Drama, GenresType.Fantasy],
    rating: 8.7,
    status: StatusType.Finished,
    episodes: [
      new ObjectId('5f3ae15f1672725f1c89ee28'),
      new ObjectId('5f3ae15f1672725f1c89ee29'),
      new ObjectId('5f3ae15f1672725f1c89ee2a'),
    ],
  },
  {
    _id: new ObjectId(),
    name: 'Titans',
    date: 2018,
    genres: [GenresType.Comics, GenresType.Drama, GenresType.Fantasy],
    rating: 8.9,
    status: StatusType.Finished,
    episodes: [
      new ObjectId('5f3ae15f1672725f1c89ee2b'),
      new ObjectId('5f3ae15f1672725f1c89ee2c'),
      new ObjectId('5f3ae15f1672725f1c89ee2d'),
      new ObjectId('5f3ae15f1672725f1c89ee2e'),
    ],
  },
];

const episodes: Episode[] = [
  {
    _id: new ObjectId('5f3ae15f1672725f1c89ee26'),
    name: 'Down with the Sickness',
    date: '05.12.2019',
    rating: 7.9,
    episode: 1,
    season: 1,
  },
  {
    _id: new ObjectId('5f3ae15f1672725f1c89ee27'),
    name: 'Blood Brothers',
    date: '05.12.2019',
    rating: 8.1,
    episode: 2,
    season: 1,
  },
  {
    _id: new ObjectId('5f3ae15f1672725f1c89ee28'),
    name: 'Godflame',
    date: '01.11.2019',
    rating: 8.2,
    episode: 1,
    season: 1,
  },
  {
    _id: new ObjectId('5f3ae15f1672725f1c89ee29'),
    name: 'Message in a Bottle',
    date: '01.11.2019',
    rating: 8.5,
    episode: 2,
    season: 1,
  },
  {
    _id: new ObjectId('5f3ae15f1672725f1c89ee2a'),
    name: 'Fresh Blood',
    date: '01.11.2019',
    rating: 9,
    episode: 3,
    season: 1,
  },
  {
    _id: new ObjectId('5f3ae15f1672725f1c89ee2b'),
    name: 'Titans',
    date: '12.10.2018',
    rating: 8.6,
    episode: 1,
    season: 1,
  },
  {
    _id: new ObjectId('5f3ae15f1672725f1c89ee2c'),
    name: 'Hawk and Dove',
    date: '19.10.2018',
    rating: 9.1,
    episode: 2,
    season: 1,
  },
  {
    _id: new ObjectId('5f3ae15f1672725f1c89ee2d'),
    name: 'Trigon',
    date: '06.09.2019',
    rating: 8.4,
    episode: 1,
    season: 2,
  },
  {
    _id: new ObjectId('5f3ae15f1672725f1c89ee2e'),
    name: 'Rose',
    date: '13.09.2019',
    rating: 9,
    episode: 1,
    season: 2,
  },
];

const insertInDB = async () => {
  try {
    console.log('running insert');

    const db = await connectDatabase();

    for (const series of seriesList) {
      await db.series.insertOne(series);
    }

    for (const episode of episodes) {
      await db.episodes.insertOne(episode);
    }

    console.log('success');
  } catch {
    throw new Error('failed');
  }
};

insertInDB();
