import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux";
function UserContainer({ userData, fetchUsers }) {
  useEffect(() => {
    console.log("prajwal");
    fetchUsers();
  }, []);
  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>User List</h2>
      <div>
        {userData &&
          userData.users &&
          userData.users.map((user) => <p key={user.id}> {user.name} </p>)}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  //it gets initial state of usercontainer that we define.
  return { userData: state.user };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => {
      //basically dispatch fetch user action creator
      dispatch(fetchUsers());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
