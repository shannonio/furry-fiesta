import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import IssueList from '../IssueList';

describe('IssueList', () => {
  const repos = [
    { name: 'Snarf', owner: { login: 'Blaster' }, id: '1' },
    { name: 'Mermaid', owner: { login: 'Little' }, id: '2' }
  ];
  const issues = [];

  const initialProps = {
    repos,
    issues,
    match: { params: {
      name: repos[0].name,
      owner: {
        id: repos[0].owner.login
      }
    } },
    updatePrioritizedIssues: jest.fn(),
    history: { push: jest.fn() },
    currentRepo: repos[0],
    fetchRepos: jest.fn(),
    fetchIssues: jest.fn()
  };

  const createComponent = (props = initialProps) => (
    mount(
      <IssueList {...props} />
    )
  )

  it('renders without crashing', () => {
    const component = createComponent();

    expect(component).toMatchSnapshot();
  });

  it('fetches issues when url changes', () => {
    const component = createComponent();
    const lastRepoIdx = repos.length - 1;

    const props = { ...initialProps };
    props.match = {
      params: {
        name: repos[lastRepoIdx].name,
        owner: {
          id: repos[lastRepoIdx].owner.login
        }
      }
    }

    initialProps.fetchIssues.mockClear();

    component.setProps(props);

    expect(initialProps.fetchIssues).toHaveBeenCalled();
  });

});
