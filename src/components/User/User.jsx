import { Link } from "react-router-dom";

const User = ({ user }) => {
  return (
    <div className="card bg-base-100 card-sm shadow-sm">
      <div className="card-body">
        <h2 className="card-title text-2xl">{user.name}</h2>
        <p className="text-md font-medium">{user.website}</p>

        <p className="text-md font-medium">{user?.email}</p>
        <div className="card-actions">
          <Link to={`/user/${user.id}`}>
            <button className="btn btn-primary">Show User Detail</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default User;
