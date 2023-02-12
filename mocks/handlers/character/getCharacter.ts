import { graphql } from 'msw';
import { isEmptyObject } from '@/utils';

interface Variables {
  id: number;
}

// Response data shape
interface Character {
  name: string
  image: string
}

// Intercept `getCharacter` GraphQL query
export default graphql.query<Character, Variables>('getCharacter', async (req, res, ctx) => {

  const { id } = req.variables; // grab character ID from query variable

  // based on character ID, import dataset for a particular set of data
  // TODO: need to check if file exists, otherwise causes error using the below
  const dataSet = await import(`./data/character-${id}.mock.json`);

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
    // ctx.delay(1000), // delay data by 1 second
    ctx.data(dataSet)
  )
});
