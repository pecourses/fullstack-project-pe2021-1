import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './../../actions';

// Получить состояние из глобального состояния
function UsersList (props) {
  const { users, isFetching, error, getUsers, deleteUser } = props;

  useEffect(() => {
    getUsers();
  }, []);

  const mapUser = ({ id, name, telNumber, isBanned }) => {
    const deleteHandler = () => {
      deleteUser(id);
    };

    return (
      <li key={id}>
        ID: {id} name: {name} tel.: {telNumber}
        <input type='checkbox' checked={isBanned} />
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
