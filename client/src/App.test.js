import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import fetchMock from 'fetch-mock';

import App from './App';
import { resolveAfter2Seconds, mockFetchCalls } from './helpers/test_helper';

describe('App Test', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  });

  afterEach(() => {
    if (fetchMock.calls().unmatched.length) {
      console.warn(fetchMock.calls().unmatched);
    }
    fetchMock.restore();
  });

  it('App renders without crashing', () => {
    expect(wrapper.find('.App-wrapper').length).toBe(1);
  });

  it('renders with the CogAccel lat/long as default', () => {
    expect(wrapper.state().location).toEqual([40.016457, -105.285884])
  });

  it('sets the current conditions in state', async () => {
    mockFetchCalls();

    await resolveAfter2Seconds();

    expect(wrapper.state().summary).toEqual("clear-day");
    expect(wrapper.state().temp).toEqual(83.29);
  });
});
