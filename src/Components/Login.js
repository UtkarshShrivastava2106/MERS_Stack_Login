// import React, { useState } from "react";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import { useForm } from "react-hook-form";
// import axios from "axios";

// const Login = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const [dataName, setData] = useState([]);
//   const [isLoggedin, setIsLoggedin] = useState(false);
//   // const logout = () => {
//   //   localStorage.removeItem("token-info");
//   //   setIsLoggedin(false);
//   // };

//   const logout = () => {
//     localStorage.removeItem("token-info");
//     setIsLoggedin(false);
//   };

//   const RegisteredUsers = () => {
//     const userData = JSON.parse(localStorage.getItem("formData")) || []; // Retrieve the list of registered users

//     return (
//       <div>
//         <h2>List of Registered Users:</h2>
//         {userData.map((user, index) => (
//           <li key={index}>
//             {user.fname} ,{user.lname} ,{user.email}, {user.city}, {user.select}
//             ,{user.p_code}, {user.about}
//           </li>
//         ))}
//         <ul>
//           <li></li>
//         </ul>
//       </div>
//     );
//   };

//   const onSubmit = async (data) => {
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/users/login",
//         data
//       );
//       const user = response.data; // Assuming your backend sends back user information upon successful login
//       setData(user.fname);
//       setIsLoggedin(true);
//     } catch (error) {
//       console.error("Error logging in:", error);
//       // Handle login error (e.g., show an error message to the user)
//     }
//   };

//   // const onSubmit = (data) => {
//   //   // Retrieve user data from local storage
//   //   const userData = JSON.parse(localStorage.getItem("formData")) || [];

//   //   const user = userData.find((user) => user.email === data.email);

//   //   if (user && user.password === data.password) {
//   //     setData(user.fname);
//   //     console.log(user.fname + " You Are Successfully Logged In");
//   //     console.log(data);
//   //     setIsLoggedin(true);
//   //   } else {
//   //     console.log("Email or Password is not matching with our record");
//   //   }
//   // };

//   return (
//     <>
//       <Navbar userName={dataName} logout={logout} />
//       <div className="w-3/4 p-6 justify-center mx-14 my-14 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
//         <div className="border-s-violet-600  justify-center">
//           <div className="text-xl text-center bottom-16 border-solid mb-10">
//             <h1 className="">Login Form</h1>
//           </div>
//           {!isLoggedin ? (
//             <form className=" items-center" onSubmit={handleSubmit(onSubmit)}>
//               <div className="md:flex md:items-center mb-6">
//                 <div className="md:w-1/3">
//                   <label
//                     className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
//                     for="inline-full-name"
//                   >
//                     Email{" "}
//                   </label>
//                 </div>
//                 <div className="md:w-2/3">
//                   <input
//                     className="bg-gray-200 w-2/3 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
//                     id="inline-full-name"
//                     type="email"
//                     {...register("email", { required: true })}
//                   />
//                 </div>
//               </div>
//               <div className="md:flex md:items-center mb-6">
//                 <div className="md:w-1/3">
//                   <label
//                     className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
//                     for="inline-full-name"
//                   >
//                     Password{" "}
//                   </label>
//                 </div>
//                 <div className="md:w-2/3">
//                   <input
//                     className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-2/3 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
//                     id="inline-full-name"
//                     type="password"
//                     {...register("password")}
//                   />
//                 </div>
//               </div>

//               <div className="md:flex md:items-center">
//                 <div className="md:w-1/3"></div>
//                 <div className="md:w-2/3">
//                   <button
//                     className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
//                     type="submit"
//                   >
//                     Login{" "}
//                   </button>
//                 </div>
//               </div>
//             </form>
//           ) : (
//             <>
//               <h1>{dataName} is logged in</h1>
//               {RegisteredUsers()}
//               <button onClickCapture={logout}>logout user</button>
//             </>
//           )}
//         </div>{" "}
//       </div>
//     </>
//   );
// };

// export default Login;
import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useForm } from "react-hook-form";
import axios from "axios";
import UserCard from "./UserCard";
import { Redirect } from "react-router-dom"; // Import Redirect
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [dataName, setData] = useState("");
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  const logout = () => {
    localStorage.removeItem("token-info");
    setIsLoggedin(false);
  };

  // const RegisteredUsers = () => {
  //   const userData = JSON.parse(localStorage.getItem("formData")) || [];

  //   return (
  //     <div>
  //       <h2>List of Registered Users:</h2>
  //       {userData.map((user, index) => (
  //         <li key={index}>
  //           {user.fname}, {user.lname}, {user.email}, {user.city}, {user.select}
  //           ,{user.p_code}, {user.about}
  //         </li>
  //       ))}
  //     </div>
  //   );
  // };

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        data
      );
      const user = response.data;
      setData(user.firstName);
      setIsLoggedin(true);
      localStorage.setItem("user-info", JSON.stringify(user));
      console.log(localStorage.getItem("user-info"));
      navigate("/userlist");
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };
  // const fetchAllUsers = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:5000/api/users/users");
  //     const users = response.data;
  //     console.log(userData, users, "userData");
  //     navigate("/userlist");

  //     setUserData(users);
  //   } catch (error) {
  //     console.error("Error fetching users:", error);
  //   }
  // };
  return (
    <>
      {/* <Navbar userName={dataName} logout={logout} /> */}
      <div className="w-3/4 p-6 justify-center mx-14 my-14 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div className="border-s-violet-600  justify-center">
          <div className="text-xl text-center bottom-16 border-solid mb-10">
            <h1 className="">Login Form</h1>
          </div>
          {!isLoggedin ? (
            <form className=" items-center" onSubmit={handleSubmit(onSubmit)}>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="email"
                  >
                    Email
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 w-2/3 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="email"
                    type="email"
                    {...register("email", { required: true })}
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="password"
                  >
                    Password
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-2/3 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="password"
                    type="password"
                    {...register("password")}
                  />
                </div>
              </div>
              <div className="md:flex md:items-center">
                <div className="md:w-1/3"></div>
                <div className="md:w-2/3">
                  <button
                    className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="submit"
                  >
                    Login
                  </button>
                  {/* <button
                    type="submit"
                    className="shadow bg-purple-500 mx-5 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    onClick={fetchAllUsers}
                  >
                    Fetch All Users
                  </button> */}
                </div>
              </div>
            </form>
          ) : (
            <>
              {/* <div>
                <h1>Hii there </h1>
                {userData.map((item) => (
                  <UserCard key={item.id} user={item} />
                ))}
              </div> */}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
