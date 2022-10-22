import {rest} from 'msw';

import {episodeList} from '../mocks/showMocks';

export const handlers = [
  rest.get('https://api.tvmaze.com/shows/:showId/episodes', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(episodeList));
  }),
];
