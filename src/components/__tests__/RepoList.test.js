import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import RepoList from '../RepoList';

describe('RepoList', () => {
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
    updateCurentRepo: jest.fn(),
    history: { push: jest.fn() },
    currentRepo: repos[0],
    fetchRepos: jest.fn(),
    fetchIssues: jest.fn()
  };

  const createComponent = (props = initialProps) => (
    mount(
      <RepoList {...props} />
    )
  )

  it('renders without crashing', () => {
    const component = createComponent();

    expect(component).toMatchSnapshot();
  });

  it('has the correct active repo highlighted', () => {
    const component = createComponent();
    expect(component.find('.RepoList__repos-row--active').text()).toBe(initialProps.currentRepo.name);
  });

  it('changes the currentRepo onClick', () => {
    const component = createComponent();
    const lastRepoIdx = repos.length - 1;
    component.find('.RepoList__repos-row').last().simulate('click');

    expect(initialProps.history.push).toHaveBeenCalledWith(`/repo/${repos[lastRepoIdx].owner.login}/${repos[lastRepoIdx].name}`);
  });

  it('calls updateCurentRepo on url change', () => {
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
    };

    component.setProps(props);

    expect(initialProps.updateCurentRepo).toHaveBeenCalledWith(repos[lastRepoIdx]);
  });

});
