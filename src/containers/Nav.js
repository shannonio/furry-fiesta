import { connect } from 'react-redux';
import { setUser } from '../actions';
import Nav from '../components/Nav'

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (userName) => {
      dispatch(setUser({ name: userName }))
    }
  }
};

const NavContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);

export default NavContainer
