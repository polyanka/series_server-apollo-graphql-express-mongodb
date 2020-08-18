import { connectDatabase } from '../src/services';

const clear = async () => {
  try {
    console.log('[clear] : running...');

    const db = await connectDatabase();

    const series = await db.series.find({}).toArray();
    const episodes = await db.episodes.find({}).toArray();

    if (series.length > 0) {
      await db.series.drop();
    }

    if (episodes.length > 0) {
      await db.episodes.drop();
    }

    console.log('[clear] : success');
  } catch {
    throw new Error('failed to clear database');
  }
};

clear();
