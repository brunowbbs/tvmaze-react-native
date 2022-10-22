import React from 'react';
import {EpisodeList} from '../EpisodeList';
import {mocks} from './mocks';
import {showService} from '../../../../../services/show/showService';
import {renderWithQuery} from '../../../../../../test/test-utils';

describe('<EpisodeList/>', () => {
  it('should show all season on episodes at first', async () => {
    jest.spyOn(showService, 'getEpisodes').mockResolvedValueOnce({
      seasonNames: ['1', '2'],
      seasons: {
        1: [mocks.episode1, mocks.episode2],
        2: [mocks.episode22, mocks.episode23],
      },
    });

    const {findByText} = renderWithQuery(<EpisodeList show={mocks.show} />);

    /*await waitFor(() => {
      expect(getByText(mocks.episode1.name)).toBeTruthy();
    });*/
    const episode1 = await findByText(mocks.episode1.name);
    const episode2 = await findByText(mocks.episode2.name);

    expect(episode1).toBeTruthy();
    expect(episode2).toBeTruthy();
  });
});
