import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const UserCard = () => {
  const [userData, setUserData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Set the number of items per page
  const [data, setData] = useState([]);
  const fetchAllUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/users/users");
      const users = response.data;
      setUserData(users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchAllUsers();
    console.log(userData, "fname:");
    const user = JSON.parse(localStorage.getItem("user-info"));
    if (user) {
      setData(user.firstName);
      setIsLoggedin(true);
      console.log(data, "logout ka data ");
    }
  }, []);

  const totalPages = Math.ceil(userData.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    console.log("Previous button clicked");
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
    setCurrentPage(currentPage - 1);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;

  const visibleData = userData.slice(startIndex, endIndex);

  const [isLoggedin, setIsLoggedin] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const logout = () => {
    console.log("logging out ");
    localStorage.removeItem("user-info");
    setIsLoggedin(false);
    navigate("/login");
  };

  return (
    <>
      <Navbar userName={userData.firstName} logout={logout} />
      <div className="bg-white border  border-gray-200 rounded-lg shadow p-4 mb-4">
        {visibleData.map((item) => (
          <div
            key={item.id}
            className="bg-white border  border-gray-200 rounded-lg shadow p-4 mb-4"
          >
            <div>First Name: {item.firstName}</div>
            <div> Last Name: {item.lastName}</div>
            <div>Email:{item.email}</div> <div>State{item.state} </div>
            <div>City {item.city}</div>
            <div>Pin Code{item.p_code}</div> <div>About {item.about}</div>
            <div>Hobbies {item.hobbies}</div>
          </div>
        ))}

        {totalPages > 1 && (
          <div>
            {currentPage === 1 ? (
              ""
            ) : (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                disabled={currentPage === 1}
                onClick={handlePrevPage}
              >
                Previous
              </button>
            )}

            <span className="mx-6">
              Page {currentPage} of {totalPages}
            </span>

            {currentPage === totalPages ? (
              ""
            ) : (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                disabled={currentPage === totalPages}
                onClick={handleNextPage}
              >
                Next
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default UserCard;
