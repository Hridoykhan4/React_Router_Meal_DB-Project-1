import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
  const users = useLoaderData();
  return (
    <div>
      <h2 className="font-bold text-lg md:text-2xl lg:text-4xl my-5 text-center ">
        Users: {users.length}
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <User user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
