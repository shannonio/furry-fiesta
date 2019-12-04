import { connect } from 'react-redux';
import fetchUser from '../actions/user';
import { getUser } from '../reducers/user';
import Nav from '../components/Nav';

const mapStateToProps = (state, ownProps) => {
  return {
    user: getUser(state)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => fetchUser()(dispatch)
  }
};

const NavContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);

export default NavContainer
