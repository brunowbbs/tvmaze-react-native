import {api} from '../../api';
import {showService} from '../showService';
import {episode1, episode2, episode22, episode23, episodeList} from '../mocks';

describe('showService', () => {
  describe('getEpisodes', () => {
    beforeAll(() => {
      //jest.spyOn(api, 'get').mockResolvedValue({data: episodeList});
    });

    it('should when API return episode list return a list of episodes grouped by season', async () => {
      const spyFn = jest
        .spyOn(api, 'get')
        //.mockImplementation(() => Promise.resolve({data: episodeList}));
        .mockResolvedValue({data: episodeList});

      const groupedEpisodes = await showService.getEpisodes('300');

      expect(groupedEpisodes.seasonNames).toEqual(['1', '2']);

      expect(spyFn).toHaveBeenCalledTimes(1);
    });

    it('should API return episode list return the episodes grouped by season', async () => {
      //jest.spyOn(api, 'get').mockResolvedValue({data: episodeList});

      const groupedEpisodes = await showService.getEpisodes('250');

      const temp1 = groupedEpisodes.seasons[1];
      const temp2 = groupedEpisodes.seasons[2];

      expect(temp1.includes(episode1)).toBeTruthy();
      expect(temp1.includes(episode2)).toBeTruthy();

      expect(temp2.includes(episode22)).toBeTruthy();
      expect(temp2.includes(episode23)).toBeTruthy();
    });
  });
});
