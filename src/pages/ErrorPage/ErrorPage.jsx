import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex justify-around items-center min-h-screen">
      <div className="text-black/60 flex flex-col gap-4 items-center">
        <h1 className="text-9xl text-primary font-extrabold">404</h1>
        <div>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i>Page {error.statusText || error.message}</i>
          </p>
        </div>
        <div>
          <Link to={"/"} className="tori-btn-secondary">
            Back to Home
          </Link>
        </div>
      </div>
      <div>
        <img
          src="https://envato.ukie.company/404-error/monkey/assets/img/monkey.gif"
          alt=""
        />
      </div>
    </div>
  );
};

export default ErrorPage;
