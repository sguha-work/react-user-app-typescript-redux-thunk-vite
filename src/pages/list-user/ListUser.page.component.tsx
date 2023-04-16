import React, { useEffect, useState } from 'react'
import UserListTableComponent from '../../components/user-list-table/UserListTable.component'
import USERS_STORE from '../../store/user/User.store';
import USER_ACTIONS from '../../store/user/User.actions';

export default function ListUserPageComponent() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    USERS_STORE.dispatch((dispatch) => {
      if (USERS_STORE.getState()['users'].length) {
        setUsers(USERS_STORE.getState()['users']);
      } else {
        // dispatching the event to fetch data from server
        dispatch(USER_ACTIONS.FETCH_USERS);
      }
    });

    USERS_STORE.subscribe(() => {console.log('subscription called');
      setUsers(USERS_STORE.getState()['users']);
    });
  }, []);
  return (
    <div>
      <h2>List User page component</h2>
      <UserListTableComponent users={users}></UserListTableComponent>
    </div>
  )
}
