import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="space-y-2">
        <h3 className="text-4xl">Error!!!</h3>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
      {/*   <p>
          <i>{err.statusText || err.message}</i>
        </p> */}
        <p>
          {err.status === 404 && (
            <div className="mt-4">
              <h3>Page Not Found</h3>
              <Link to={`/`}>
                <button className="btn my-2 text-white btn-error">Go Back To Home</button>
              </Link>
            </div>
          )}
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
