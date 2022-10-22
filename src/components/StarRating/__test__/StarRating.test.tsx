import React from 'react';
import {render} from '@testing-library/react-native';
import {StarRating} from '../StarRating';

describe('<StarRating/>', () => {
  /*it('the component rendered', () => {
    const {debug} = render(<StarRating rating={{average: 7}} />);
    debug();
  });*/

  it('if passed rating show the average and star icon', () => {
    const {getByText, getByTestId} = render(
      <StarRating rating={{average: 7}} />,
    );

    expect(getByText('7')).toBeTruthy();
    expect(getByTestId('starIcon')).toBeTruthy();
  });

  it('if not passed rating not show the average and start icon', () => {
    const {container} = render(<StarRating />);

    expect(container.children.length).toEqual(0);
  });
});
