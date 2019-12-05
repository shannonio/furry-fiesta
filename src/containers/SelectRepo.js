import { connect } from 'react-redux';
import fetchRepos from '../actions/repos';
import { getRepos } from '../reducers/repos';
import SelectRepo from '../components/SelectRepo';
import { updateCurentRepo } from '../actions/currentRepo';


const mapStateToProps = (state, ownProps) => {
  return {
    repos: getRepos(state)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRepos: () => fetchRepos()(dispatch),
    updateCurentRepo: repo => dispatch(updateCurentRepo(repo))
  }
};

const SelectRepoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectRepo);

export default SelectRepoContainer
