import { useLoaderData } from "react-router-dom";

const UserDetail = () => {
  const userDetail = useLoaderData();
  return (
    <div className="grow flex flex-col">
      <div className="card bg-primary text-primary-content ">
        <div className="card-body">
          <h2 className="card-title">{userDetail.name}</h2>
          <address>
            {userDetail?.address.city}, {userDetail?.address?.street}
          </address>
          <p>Website Visit: {userDetail?.website}</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
