import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './../../actions';

// Получить состояние из глобального состояния
function UsersList (props) {
  const { users, isFetching, error, getUsers, deleteUser } = props;

  useEffect(() => {
    getUsers();
  }, []);

  const mapUser = ({ id, firstName, lastName, email }) => {
    const deleteHandler = () => {
      deleteUser(id);
    };

    return (
      <li key={id}>
        firstName: {firstName} lastName: {lastName} email:{email}
        <button onClick={deleteHandler}>Delete</button>
      </li>
    );
  };

  return (
    <>
      {isFetching && <div>Loading...</div>}
      {error && <div>ERROR</div>}
      <ul>{users.map(mapUser)}</ul>
    </>
  );
}

const mapStateToProps = state => state.user;

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(actionCreators.getUsersAction()),
  deleteUser: id => dispatch(actionCreators.deleteUserAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);

// 1 actionCreators : update(i, value), delete(i)
// 2 mapDispatchToProps
// 3 usersReducer
