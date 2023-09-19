// import React, { useEffect, useState } from "react";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import axios from "axios";
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// import Sidebar from "./Sidebar";

// const UserCard = () => {
//   const [userData, setUserData] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10; // Set the number of items per page
//   const [data, setData] = useState([]);
//   const fetchAllUsers = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/api/users/users");
//       const users = response.data;
//       setUserData(users);
//     } catch (error) {
//       console.error("Error fetching users:", error);
//     }
//   };

//   useEffect(() => {
//     fetchAllUsers();
//     console.log(userData, "fname:");
//     const user = JSON.parse(localStorage.getItem("user-info"));
//     if (user) {
//       setData(user.firstName);
//       setIsLoggedin(true);
//       console.log(data, "logout ka data ");
//     }
//   }, []);

//   const totalPages = Math.ceil(userData.length / itemsPerPage);

//   const handleNextPage = () => {
//     setCurrentPage(currentPage + 1);
//   };

//   const handlePrevPage = () => {
//     console.log("Previous button clicked");
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//     setCurrentPage(currentPage - 1);
//   };

//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = currentPage * itemsPerPage;

//   const visibleData = userData.slice(startIndex, endIndex);

//   const [isLoggedin, setIsLoggedin] = useState(false);
//   const navigate = useNavigate(); // Initialize useNavigate

//   const logout = () => {
//     console.log("logging out ");
//     localStorage.removeItem("user-info");
//     setIsLoggedin(false);
//     navigate("/login");
//   };

//   return (
//     <>
//       <Navbar userName={userData.firstName} logout={logout} />
//       <div className="bg-white border  border-gray-200 rounded-lg shadow p-4 mb-4">
//         {/* <Sidebar /> */}
//         {visibleData.map((item) => (
//           <div
//             key={item.id}
//             className="bg-white border  border-gray-200 rounded-lg shadow p-4 mb-4"
//           >
//             <div>First Name: {item.firstName}</div>
//             <div> Last Name: {item.lastName}</div>
//             <div>Email:{item.email}</div> <div>State{item.state} </div>
//             <div>City {item.city}</div>
//             <div>Pin Code{item.p_code}</div> <div>About {item.about}</div>
//             <div>Hobbies {item.hobbies}</div>
//           </div>
//         ))}

//         {totalPages > 1 && (
//           <div>
//             {currentPage === 1 ? (
//               ""
//             ) : (
//               <button
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                 disabled={currentPage === 1}
//                 onClick={handlePrevPage}
//               >
//                 Previous
//               </button>
//             )}

//             <span className="mx-6">
//               Page {currentPage} of {totalPages}
//             </span>

//             {currentPage === totalPages ? (
//               ""
//             ) : (
//               <button
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                 disabled={currentPage === totalPages}
//                 onClick={handleNextPage}
//               >
//                 Next
//               </button>
//             )}
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default UserCard;

import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

const UserCard = () => {
  const [userData, setUserData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [data, setData] = useState([]);
  const [hobbyUser, setHobbyUser] = useState([]);
  const [isSubmit, setIsSubmit] = useState(false);
  const [onClickFilter, setonClickFilter] = useState(false);
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
    const user = JSON.parse(localStorage.getItem("user-info"));
    if (user) {
      setData(user.firstName);
      setIsLoggedin(true);
    }
  }, []);

  useEffect(() => {
    console.log("hobbyUser updated:", hobbyUser);
  }, [hobbyUser]);

  const totalPages = Math.ceil(userData.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;

  const visibleData = userData.slice(startIndex, endIndex);

  const [isLoggedin, setIsLoggedin] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user-info");
    setIsLoggedin(false);
    navigate("/login");
  };
  var apiData;
  const handleUserByHobby = async (data) => {
    apiData = await data;
    setHobbyUser(apiData);
    setIsSubmit(true);
    setonClickFilter(true);
    console.log(hobbyUser, data, apiData, "ooo");
  };
  return (
    <>
      {/* <Navbar userName={data} logout={logout} /> */}
      <div style={{ display: "flex" }}>
        <div style={{ flex: "0 0 20%" }}>
          <Sidebar
            userByHobby={(data) => handleUserByHobby(data)}
            isSubmitted={isSubmit}
          />
        </div>
        <div style={{ flex: "1" }}>
          <div className="bg-white border border-gray-200 rounded-lg shadow p-4 mb-4">
            {onClickFilter
              ? hobbyUser.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white border border-gray-200 rounded-lg shadow p-4 mb-4"
                  >
                    <div>First Name: {item.firstName}</div>
                    <div>Last Name: {item.lastName}</div>
                    <div>Email: {item.email}</div>
                    <div>State: {item.state}</div>
                    <div>City: {item.city}</div>
                    <div>Pin Code: {item.p_code}</div>
                    <div>About: {item.about}</div>
                    <div>Hobbies: {item.hobbies}</div>
                  </div>
                ))
              : visibleData.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white border border-gray-200 rounded-lg shadow p-4 mb-4"
                  >
                    <div>First Name: {item.firstName}</div>
                    <div>Last Name: {item.lastName}</div>
                    <div>Email: {item.email}</div>
                    <div>State: {item.state}</div>
                    <div>City: {item.city}</div>
                    <div>Pin Code: {item.p_code}</div>
                    <div>About: {item.about}</div>
                    <div>Hobbies: {item.hobbies}</div>
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
                {hobbyUser.length <= 10 ? (
                  ""
                ) : (
                  <span className="mx-6">
                    Page {currentPage} of {totalPages}
                  </span>
                )}
                {currentPage === totalPages || hobbyUser.length <= 10 ? (
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
        </div>
      </div>
      <Footer />
    </>
  );

  // return (
  //   <>

  //     {onClickFilter
  //       ? hobbyUser.map((item) => (
  //           <div className="mx-96" key={item.id}>
  //             {item.firstName}
  //           </div>
  //         ))
  //       : visibleData.map((item) => (
  //           <div
  //             key={item.id}
  //             className="bg-white border border-gray-200 rounded-lg shadow p-4 mb-4"
  //           >
  //             <div>First Name: {item.firstName}</div>
  //             <div>Last Name: {item.lastName}</div>
  //             <div>Email: {item.email}</div>
  //             <div>State: {item.state}</div>
  //             <div>City: {item.city}</div>
  //             <div>Pin Code: {item.p_code}</div>
  //             <div>About: {item.about}</div>
  //             <div>Hobbies: {item.hobbies}</div>
  //           </div>
  //         ))}

  //     {/* <div style={{ flex: "1" }}>
  //         <Navbar userName={data} logout={logout} />
  //         <div className="bg-white border border-gray-200 rounded-lg shadow p-4 mb-4">
  //     {onClickFilter?       {hobbyUser.map((item) => {
  //       return <div className="mx-96">{item.firstName}</div>;
  //     })}
  //     <div className="flex">
  //       <div style={{ flex: "0 0 20%" }}>
  //         <Sidebar
  //           userByHobby={(data) => handleUserByHobby(data)}
  //           isSubmitted={isSubmit}
  //         />
  //       </div>
  //     :

  //           {visibleData.map((item) => (
  //             <div
  //               key={item.id}
  //               className="bg-white border border-gray-200 rounded-lg shadow p-4 mb-4"
  //             >
  //               <div>First Name: {item.firstName}</div>
  //               <div>Last Name: {item.lastName}</div>
  //               <div>Email: {item.email}</div>
  //               <div>State: {item.state}</div>
  //               <div>City: {item.city}</div>
  //               <div>Pin Code: {item.p_code}</div>
  //               <div>About: {item.about}</div>
  //               <div>Hobbies: {item.hobbies}</div>
  //             </div>
  //           ))}
  //     }

  //           {totalPages > 1 && (
  //             <div>
  //               {currentPage === 1 ? (
  //                 ""
  //               ) : (
  //                 <button
  //                   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  //                   disabled={currentPage === 1}
  //                   onClick={handlePrevPage}
  //                 >
  //                   Previous
  //                 </button>
  //               )}

  //               <span className="mx-6">
  //                 Page {currentPage} of {totalPages}
  //               </span>

  //               {currentPage === totalPages ? (
  //                 ""
  //               ) : (
  //                 <button
  //                   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  //                   disabled={currentPage === totalPages}
  //                   onClick={handleNextPage}
  //                 >
  //                   Next
  //                 </button>
  //               )}
  //             </div>
  //           )}
  //         </div>
  //       </div>
  //     </div> */}
  //   </>
  // );
};

export default UserCard;
