import PropTypes from "prop-types";

const User = ({ user }) => {
  const { id, name, email, phone } = user;

  return (
    <div>
      <div className="card w-96 bg-base-100 card-md shadow-sm">
        <div className="card-body">
          <h2 className="card-title">{id}</h2>
          <h2 className="card-title">{name}</h2>
          <p>{email}</p>
          <p>{phone}</p>
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
