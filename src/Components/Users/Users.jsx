import { useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();

  console.log(users);

  return (
    <div>
      <h2>Users: {users.length}</h2>
    </div>
  );
};

export default Users;
