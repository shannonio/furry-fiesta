import React from 'react';
import ReactDOM from 'react-dom';
import { render, getByDisplayValue} from '@testing-library/react'

import IssueList from '../IssueList';

describe('IssueList', () => {
  const mockFetch = jest.fn();
  const repos = [];
  const issues = [];

  const createComponent = props => (
    render(
      <IssueList {...props} />
    )
  )

  it('renders without crashing', () => {
    const props = {
      repos,
      issues,
      fetchRepos: mockFetch,
      fetchIssues: mockFetch
    };

    const component = createComponent(props);

    expect(component).toMatchSnapshot();
  });

});
