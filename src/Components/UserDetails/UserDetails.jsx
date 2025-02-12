import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const { name } = user;

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h2>Details of user: {name}</h2>
      <button onClick={handleGoBack}>go back</button>
    </div>
  );
};

export default UserDetails;
