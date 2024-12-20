import React, { useContext, useEffect } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  BarElement,
  Title,
  ArcElement,
  Tooltip,
  LinearScale,
  Legend,
} from "chart.js";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ArcElement,
  Tooltip,
  Legend
);

import { UserDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import Logout from "../components/Logout";

const AdminDashboard = () => {
  const { user, setUser } = useContext(UserDataContext);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(user);
    if (!user || user?.role === "user") {
      navigate("/");
    }
  }, [user, navigate]);

  const userData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "New Users",
        data: [30, 45, 60, 50, 70, 90],
        backgroundColor: "#6366f1",
      },
    ],
  };

  const activityData = {
    labels: ["Active", "Inactive", "Suspended"],
    datasets: [
      {
        label: "Users",
        data: [80, 15, 5],
        backgroundColor: ["#4ade80", "#facc15", "#f87171"],
      },
    ],
  };

  // Initialize Driver.js
  const startTour = () => {
    const driverInstance = new driver({
      showProgress: true,
      steps: [
        {
          element: "#total-users",
          popover: {
            title: "Total Users",
            description:
              "This shows the total number of users on the platform.",
            side: "bottom",
          },
        },
        {
          element: "#active-sessions",
          popover: {
            title: "Active Sessions",
            description: "This section displays the number of active sessions.",
            side: "bottom",
          },
        },
        {
          element: "#monthly-users-chart",
          popover: {
            title: "Monthly New Users",
            description:
              "A bar chart representing the new users added monthly.",
            side: "top",
          },
        },
        {
          element: "#user-activity-chart",
          popover: {
            title: "User Activity",
            description:
              "A doughnut chart showing the distribution of user activity.",
            side: "top",
          },
        },
      ],
    });

    driverInstance.drive();
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold text-white ">Admin Dashboard</h1>
          <Logout setUser={setUser} />
        </div>

        {/* Start Tour Button */}
        <div className="mb-6">
          <button
            onClick={startTour}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            Start Tour
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div id="total-users" className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800">Total Users</h2>
            <p className="mt-2 text-3xl font-bold text-indigo-600">124</p>
          </div>
          <div id="active-sessions" className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Active Sessions
            </h2>
            <p className="mt-2 text-3xl font-bold text-green-600">36</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Pending Issues
            </h2>
            <p className="mt-2 text-3xl font-bold text-red-600">7</p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div
            id="monthly-users-chart"
            className="bg-white rounded-lg shadow p-6"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Monthly New Users
            </h2>
            <Bar data={userData} />
            <div className="mt-10 bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Recent Activities
              </h2>
              <ul className="mt-4 space-y-2">
                <li className="text-gray-600">
                  User John Doe registered at 10:00 AM.
                </li>
                <li className="text-gray-600">
                  Admin resolved a pending issue at 2:00 PM.
                </li>
                <li className="text-gray-600">
                  Database backup completed at 5:30 PM.
                </li>
              </ul>
            </div>
          </div>

          <div
            id="user-activity-chart"
            className="bg-white rounded-lg shadow p-6"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              User Activity
            </h2>
            <Doughnut data={activityData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
