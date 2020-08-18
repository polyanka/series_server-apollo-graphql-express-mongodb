import { MongoClient } from 'mongodb';
import { Episode, Series, Database } from '../lib/types';
import '../../dotenv';

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/<dbname>?retryWrites=true&w=majority`;

export const connectDatabase = async (): Promise<Database> => {
  const client = await MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db('main');

  return {
    episodes: db.collection<Episode>('episodes'),
    series: db.collection<Series>('series'),
  };
};
