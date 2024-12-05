import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Logout = ({ setUser }) => {
  const token = localStorage.getItem("token");
  const handleLogout = () => {
    axios
      .get(`${import.meta.env.VITE_SERVER_BASE_URL}/auth/logout`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          localStorage.removeItem("token");
          setUser(null);
        }
      });
  };

  return (
    <button
      onClick={handleLogout}
      className="mt-5 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      Logout
    </button>
  );
};

export default Logout;
