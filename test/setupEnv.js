import {server} from './server/server';

beforeAll(() => server.listen());

afterEach(() => server.restoreHandlers());

afterAll(() => server.close());
