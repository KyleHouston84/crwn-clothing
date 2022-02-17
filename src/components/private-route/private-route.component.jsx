import { Navigate, Outlet } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ currentUser }) => {
  return currentUser ?  <Navigate to='/' />: <Outlet />
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(PrivateRoute);