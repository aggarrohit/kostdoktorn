import {PanResponder} from 'react-native';
import React from 'react';
import BackOptionsCard from '../../../src/components/BackOptionsCard';
import {render} from '@testing-library/react-native';

describe('BackOptionsCard Component', () => {
  it('should render Back Options Card', async () => {
    const panResponder = PanResponder.create({});

    const component = render(
      <BackOptionsCard
        backgroundColor={'black'}
        icon={null}
        index={0}
        panResponder={panResponder}
        title={'Done'}
        translateX={0}
        key={0}
      />,
    );
    const animatedView = component.getByTestId('BackOptionsCard-0-Done');
    const title = component.getByText('Done');

    expect(animatedView).toBeTruthy();
    expect(title).toBeTruthy();
  });
});
