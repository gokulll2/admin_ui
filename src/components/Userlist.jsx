import React from 'react'

const Userlist = () => {
    const[users,setUsers] = React.useState([]);
    const[edit,setEdit]=React.useState(false);
    const[edituserID,seteditUser]=React.useState(null)

    React.useEffect(() => {
        fetch('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json')
        .then((response) => response.json())
        .then((data) => setUsers(data))
    },[])

    const handleCheckBox=(userID) => {
        console.log('Checkbox for user with ID ${userId} changed')
    }
    const handleEditUser= (userID) => {
        setEdit(true)
        seteditUser(userID)
    }
    const handleDeleteUser = (userID) => {
       const updatedUsers=users.filter((user) => user.id!==userID)
       setUsers(updatedUsers)
    }
    
  return (
    <div className='container'>
        <table>

            <thead>
                <tr>
                    <th colspan='5'> <input className='p' type='text' placeholder='Search'/></th>
                </tr>
                <tr>
                    <th></th>
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
                            <td><input onChange={() => handleCheckBox(user.id)} type='checkbox'/></td>
                            <td>
                                {user.id}
                            </td>
                            <td>
                                {edit && edituserID==user.id?
                                <input type='text'/>
                                :
                                user.name
                                }
                            </td>
                            <td>
                                {user.email}
                            </td>
                            <td>
                                {user.role}
                            </td>
                            <td>
                                <button onClick={() => handleEditUser(user.id)}> EDIT </button>
                                <button onClick={() => handleDeleteUser(user.id)}>
                                Delete
                                </button>
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