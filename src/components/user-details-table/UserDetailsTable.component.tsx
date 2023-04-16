import React from 'react'
import './UserDetailsTable.component.css';
import User from './../../interfaces/user.interface';
import { Link } from 'react-router-dom';
export default function UserDetailsTableComponent(props: any) {
  return (
    <>
    <div>UserDetailsTable.component</div>
    <table className="table_users">
      <thead>
        <tr>
          <th>Name</th>
          <th>User name</th>
        </tr>
      </thead>
      <tbody>
      {
          props.users.map((user: User)=>(
            <tr key={user.username}>
              <td><Link to={"/user-details/"+user.id}>{user.name}</Link></td>
              <td>{user.username}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
    </>
  )
}
