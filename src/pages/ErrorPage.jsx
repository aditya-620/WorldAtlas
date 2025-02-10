import { NavLink, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();     //useRouteError is used to get the error object
  console.log(error);

  return (
    <div>
      <h1>Oops! An error occurred.</h1>
      {error && <p>{error.data}</p>}    //error.data is used to display the error message
      <NavLink to="/">
        <button> Go Home </button>
      </NavLink>
    </div>
  );
};
