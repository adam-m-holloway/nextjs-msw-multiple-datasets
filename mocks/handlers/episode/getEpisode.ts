import { graphql } from 'msw';
import { isEmptyObject } from '@/utils';

interface Variables {
  id: number;
}

interface Episode {
  id: string
  name: string
  episode: string
  air_date: string
}

// Intercept `episode` GraphQL query
export const getEpisodeHandler = graphql.query<Episode, Variables>('episode', async (req, res, ctx) => {
  const { id } = req.variables; // grab episode ID

  // based on episode ID, import dataset for a particular set of data
  const dataSet = await import(`../data/episode-${id}.mock.json`);

  // if no data
  if (isEmptyObject(dataSet)) {
    return res(
      ctx.errors([
        {
          message: 'No data',
          errorType: 'No data found',
        },
      ])
    ); 
  }

  // return data
  return res(
    ctx.data(dataSet)
  )
});
