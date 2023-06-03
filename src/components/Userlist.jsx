import React from "react";

const Userlist = () => {
  const [users, setUsers] = React.useState([]);
  const [edit, setEdit] = React.useState(false);
  const [edituserID, seteditUser] = React.useState(null);

  React.useEffect(() => {
    fetch(
      "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
    )
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const handleCheckBox = (userID) => {
    console.log("Checkbox for user with ID ${userId} changed");
  };
  const handleEditUser = (userID) => {
    setEdit(true);
    seteditUser(userID);
  };
  const handleDeleteUser = (userID) => {
    const updatedUsers = users.filter((user) => user.id !== userID);
    setUsers(updatedUsers);
  };
  const handleChange = (e, userID, field) => {
    const updatedUsers = users.map((user) => {
      if (user.id === userID) {
        return { ...user, [field]: e.target.value };
      }
      return user;
    });
    setUsers(updatedUsers);
  };
  const handleSaveUser=() => {
    console.log('Save')
  }
  return (
    <div className="container">
      <table>
        <tr>
          <th colspan="6">
            <input className="p" type="text" placeholder="Search" />
          </th>
        </tr>
        <tr>
          <th></th>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
        {users.map((user) => (
          <tr key={user.id}>
            <td>
              <input onChange={() => handleCheckBox(user.id)} type="checkbox" />
            </td>
            <td>{user.id}</td>
            <td>
              {edit && edituserID === user.id ? (
                <input
                  type="text"
                  value={user.name}
                  onChange={(event) => handleChange(event, user.id, "name")}
                />
              ) : (
                user.name
              )}
            </td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>
                {
                    edit && edituserID === user.id ?(
                    <> 
                     <button onClick={() => handleSaveUser(user.id)}> Save </button>
                     <button onClick={() =>seteditUser(user.id)}> Cancel </button>
                    </>
                    ):
                    <button onClick={() => handleEditUser(user.id)}> EDIT </button>
                }


              <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Userlist;
