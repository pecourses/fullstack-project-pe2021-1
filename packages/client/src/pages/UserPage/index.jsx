import React from 'react';
import UserForm from '../../components/UserForm';
import UsersList from '../../components/UserList';

function UserPage () {
  return (
    <>
      <UserForm />
      <hr />
      <UsersList />
    </>
  );
}

export default UserPage;
