import React from 'react';
import ReactDOM from 'react-dom';
import { render, getByDisplayValue} from '@testing-library/react'

import SelectRepo from '../SelectRepo';

describe('SelectRepo', () => {
  const mockFetch = jest.fn();
  const repos = [
    {
      id: 123,
      name: 'foo'
    }
  ];

  const createComponent = props => (
    render(
      <SelectRepo {...props} />
    )
  )


  it('renders without crashing', () => {
    const props = {
      repos,
      fetchRepos: mockFetch
    };

    const component = createComponent(props);

    expect(component).toMatchSnapshot();
  });

  it('has a selected option on init', () => {
    const props = {
      repos,
      fetchRepos: mockFetch
    };

    const { container } = createComponent(props);

    const selectedRepo = getByDisplayValue(container, "123");
    expect(selectedRepo.checked).toBe(true);
  });
});
