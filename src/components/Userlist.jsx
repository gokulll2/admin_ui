import React from 'react'

const Userlist = () => {
    const[users,setUsers] = React.useState([]);

    React.useEffect(() => {
        fetch('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json')
        .then((response) => response.json())
        .then((data) => setUsers(data))
    },[])

    const handleCheckBox=(userID) => {
        console.log('Checkbox for user with ID ${userId} changed')
    }
    const handleEditUser= (userID) => {
        console.log('Checkbox for user with ID ${userId} changed')
    }
    const handleDeleteUser = (userID) => {

    }
  return (
    <div className='container'>
        <table>

            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user) => (
                        <tr key={user.id}>
                            <td>
                                {user.id}
                            </td>
                            <td>
                                {user.name}
                            </td>
                            <td>
                                {user.email}
                            </td>
                            <td>
                                {user.role}
                            </td>
                            <td>

                            </td>
                        </tr>
                        ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default Userlist