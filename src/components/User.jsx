import React from 'react'

const User = ({ user }) => {
    const { id , name , email , role } = user;
  return (
   <tr>
    <td>
        {id}
    </td>
    <td>
        {name}
    </td>
    <td>
        {email}
    </td>
    <td>
        {role}
    </td>
   </tr>
  )
}

export default User