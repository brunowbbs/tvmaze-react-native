jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

import React, {createRef} from 'react';
import {render, act, fireEvent} from '@testing-library/react-native';
import {SeasonModal} from '../SeasonModal';
import {Modalize} from 'react-native-modalize';

describe('<SeasonModal/>', () => {
  it('should show all season options', () => {
    const modalizeRef = createRef<Modalize>();

    const {getAllByText} = render(
      <SeasonModal
        ref={modalizeRef}
        seasons={['1', '2', '3']}
        selectedSeason="1"
        onSelectSeason={season => console.log(season)}
      />,
    );

    act(() => {
      modalizeRef.current?.open();
    });

    expect(getAllByText(/season/i)).toHaveLength(3);
  });

  it('should call onSelectSeason with correct season when season option was pressed', () => {
    const modalizeRef = createRef<Modalize>();

    const onSelectSeasonMock = jest.fn();

    const {getByText} = render(
      <SeasonModal
        ref={modalizeRef}
        seasons={['1', '2', '3']}
        selectedSeason="1"
        onSelectSeason={onSelectSeasonMock}
      />,
    );

    act(() => {
      modalizeRef.current?.open();
    });

    fireEvent.press(getByText(/season 2/i));

    expect(onSelectSeasonMock).toBeCalledWith('2');
  });
});
