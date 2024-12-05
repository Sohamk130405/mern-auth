import React, { useContext } from "react";
import { UserDataContext } from "../context/UserContext";
import { Link } from "react-router-dom";
import Logout from "../components/Logout";

const Home = () => {
  const { user, setUser } = useContext(UserDataContext);

  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          {user ? (
            <div className="text-center">
              <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                Welcome back, {user.name}!
              </h1>
              <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl/8">
                Email: {user.email}
              </p>
              <Logout setUser={setUser} />
            </div>
          ) : (
            <div className="text-center">
              <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                Secure and Seamless Authentication
              </h1>
              <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl/8">
                Empower your website with a robust and scalable authentication
                system built by Soham Kolhatkar. Manage users efficiently,
                safeguard sensitive information, and enhance the overall user
                experience with a modern and intuitive login and registration
                process.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  to="/register"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </Link>
                <a href="#" className="text-sm font-semibold text-gray-900">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          )}
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
