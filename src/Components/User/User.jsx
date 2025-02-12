import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

const User = ({ user }) => {
  const { id, name, email, phone } = user;
  const navigate = useNavigate();
  const handleShowDetail = () => {
    navigate(`/user/${id}`);
  };
  return (
    <div>
      <div className="card w-full bg-sky-50 card-md shadow-sm">
        <div className="card-body">
          <h2 className="text-center text-lg font-semibold">{id}</h2>
          <h2 className="text-center text-lg font-semibold">{name}</h2>
          <p className="text-gray-500">{email}</p>
          <p className="text-gray-500">{phone}</p>
          <Link to={`/user/${id}`}>
            <button className="btn btn-outline">Show details</button>
          </Link>
          <button onClick={handleShowDetail}>Click</button>
        </div>
      </div>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object,
  id: PropTypes.number,
  name: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.number,
};

export default User;
