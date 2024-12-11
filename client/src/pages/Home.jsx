import React, { useContext, useEffect, useState } from "react";
import { driver } from "driver.js";

import { UserDataContext } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import Logout from "../components/Logout";

const Home = () => {
  const { user, setUser } = useContext(UserDataContext);
  const navigate = useNavigate();
  const [driverObj, setDriverObj] = useState(null);

  useEffect(() => {
    // Redirect admin users to the admin page
    if (user?.role === "admin") {
      navigate("/admin");
    }
  }, [user, navigate]);

  useEffect(() => {
    // Initialize driver.js instance
    if (user) {
      const driverInstance = new driver({
        showProgress: true,
        steps: [
          {
            element: "#welcome-message",
            popover: {
              title: "Here is quick tour",
              description: "Thank you for joining our platform.",
              side: "top",
            },
          },
          {
            element: "#user-details",
            popover: {
              title: "Your Details",
              description: "Here you can see your details and can logout.",
              side: "left",
            },
          },
        ],
      });
      setDriverObj(driverInstance);
    } else {
      const driverInstance = new driver({
        showProgress: true,
        steps: [
          {
            element: "#auth-links",
            popover: {
              title: "Authentication Links",
              description:
                "Click here to log in or register if you're not logged in.",
              side: "top",
            },
          },
        ],
      });
      setDriverObj(driverInstance);
    }
    startTour();
  }, [user]);

  const startTour = () => {
    if (driverObj) {
      driverObj.drive();
    }
  };

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
            <div id="user-details" className="text-center">
              <h1
                id="welcome-message"
                className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl"
              >
                Welcome back, {user.name}!
              </h1>
              <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl/8">
                Email: {user.email}
              </p>
              <Logout id="logout-btn" setUser={setUser} />
            </div>
          ) : (
            <div className="text-center">
              <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                Secure and Seamless Authentication
              </h1>
              <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl/8">
                Empower your website with a robust and scalable authentication
                system built by Soham Kolhatkar.
              </p>
              <div
                id="auth-links"
                className="mt-10 flex items-center justify-center gap-x-2"
              >
                <Link
                  to="/register"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                >
                  Get started
                </Link>
                <Link
                  to="/login"
                  className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black"
                >
                  Login
                </Link>
              </div>
              <div className="mt-10 flex justify-center">
                <button
                  onClick={startTour}
                  className="rounded-md bg-blue-500 px-4 py-2 text-white font-semibold hover:bg-blue-400"
                >
                  Demo Tour
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
