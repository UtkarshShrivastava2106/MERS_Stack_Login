// import React, { useState } from "react";
// import Navbar from "./Navbar";
// import { useForm } from "react-hook-form";
// import Footer from "./Footer";
// import ProfilePopup from "./ProfilePopup";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const Signup = () => {
//   const D = useSelector((state) => state);
//   console.log(D.image.image, "lll");
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const {
//     register,
//     formState: { errors },
//     setValue,
//     getValues,
//   } = useForm();

//   const openPopup = () => {
//     setIsPopupOpen(true);
//   };
//   const initialFormData = {
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     c_password: "",
//     state: "",
//     city: "",
//     p_code: "",
//     about: "",
//     hobbies: [],
//   };
//   const [formData, setFormData] = useState(initialFormData);

//   // Define a function to handle input changes
//   const handleInputChange = (e) => {
//     const { name, value, checked } = e.target;
//     console.log(formData, "formData");
//     setFormData((prevState) => ({
//       ...formData,
//       ...prevState,

//       hobbies: checked
//         ? [...prevState.hobbies, name, value]
//         : prevState.hobbies.filter((hobby) => hobby !== name),
//       [name]: value,
//     }));
//   };
//   const [hobbies, setHobbies] = useState([]);

//   const handleCheckboxChange = (e) => {
//     const { name, checked } = e.target;

//     if (checked) {
//       setHobbies((prevHobbies) => [...prevHobbies, name]);
//     } else {
//       setHobbies((prevHobbies) =>
//         prevHobbies.filter((hobby) => hobby !== name)
//       );
//     }
//   };
//   // const handleInputChange = (e) => {
//   //   const { name, value, checked } = e.target;
//   //   setFormData((prevState) => ({
//   //     ...prevState,
//   //     hobbies: checked
//   //       ? [...prevState.hobbies, name, value]
//   //       : prevState.hobbies.filter((hobby) => hobby !== name),
//   //   }));

//   //   console.log(formData); // Add this line
//   // };

//   const closePopup = () => {
//     setIsPopupOpen(false);
//   };
//   const { handleSubmit } = useForm();

//   const onSubmit = async (data) => {
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/users/createUser"
//       );
//       console.log("Response:", response);

//       console.log("User created:", response.data);
//     } catch (error) {
//       console.error("Error creating user:", error);
//     }
//   };

//   // const onSubmit = (data) => {
//   //   // Retrieve existing data from local storage
//   //   const existingData = JSON.parse(localStorage.getItem("formData")) || [];

//   //   // Check if the user already exists
//   //   const isUserExist = existingData.some((user) => user.email === data.email);

//   //   if (isUserExist) {
//   //     alert("User already exists!");
//   //     return;
//   //   }

//   //   if (data.password !== data.c_password) {
//   //     alert("Passwords do not match!");
//   //     return;
//   //   }

//   //   // Append the new user data to the existing data
//   //   const updatedData = [...existingData, data];

//   //   // Store the updated data back in local storage
//   //   localStorage.setItem("formData", JSON.stringify(updatedData));

//   //   console.log(data);
//   // };

//   // const onSubmit = (data) => {
//   //   // Retrieve existing data from local storage
//   //   const existingData = JSON.parse(localStorage.getItem("formData")) || [];

//   //   if (data.password !== data.c_password) {
//   //     alert("Passwords do not match!");
//   //     return;
//   //   }

//   //   // Append the new user data to the existing data
//   //   const updatedData = [...existingData, data];

//   //   // Store the updated data back in local storage
//   //   localStorage.setItem("formData", JSON.stringify(updatedData));

//   //   console.log(data);
//   // };
//   return (
//     <>
//       <Navbar />

//       <div className="flex justify-center items-center h-screen">
//         <div className="w-3/4 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
//           <div className="border-s-violet-600 justify-center">
//             {isPopupOpen && <ProfilePopup closePopup={closePopup} />}

//             <div className="relative items-center w-20 h-20 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
//               <button
//                 className="relative  w-20 h-20 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600"
//                 onClick={openPopup}
//               >
//                 <img
//                   className="w-20 h-20"
//                   src={D.image.image.url ? D.image.image.url : ""}
//                 />
//                 <svg
//                   className="absolute w-12 h-12 text-gray-400 -left-1 justify-between items-center"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
//                     clipRule="evenodd"
//                   ></path>
//                 </svg>
//               </button>
//               {errors.image && (
//                 <span style={{ color: "red" }}>*First Name* is mandatory </span>
//               )}
//             </div>

//             <div className="text-xl text-center bottom-16 border-solid mb-10">
//               <h1 className="">SignUp Form</h1>
//             </div>

//             <form className=" items-center" onSubmit={handleSubmit(onSubmit)}>
//               <div className="md:flex md:items-center mb-6">
//                 <div className="md:w-1/3">
//                   <label className=" m-3 block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
//                     First Name
//                   </label>
//                 </div>
//                 <div className="md:w-2/3">
//                   <input
//                     className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
//                     id="inline-full-name"
//                     type="text"
//                     name="firstName"
//                     // value={formData.firstName} // Set the value to the state value
//                     onChange={handleInputChange}
//                     {...register("firstName", { required: true })}
//                   />
//                   {errors.fname && (
//                     <span style={{ color: "red" }}>
//                       *First Name* is mandatory{" "}
//                     </span>
//                   )}
//                 </div>
//                 <div className="md:w-1/3">
//                   <label
//                     className="block m-3 text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
//                     for="inline-full-name"
//                   >
//                     Last Name
//                   </label>
//                 </div>
//                 <div className="md:w-2/3">
//                   <input
//                     className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
//                     id="inline-full-name"
//                     type="text"
//                     name="lastName"
//                     // value={formData.lastName} // Set the value to the state value
//                     onChange={handleInputChange}
//                     {...register("lastName", { required: true })}
//                   />
//                   {errors.lname && (
//                     <span style={{ color: "red" }}>
//                       *Last Name* is mandatory{" "}
//                     </span>
//                   )}
//                 </div>
//               </div>
//               <div className="md:flex md:items-center mb-6">
//                 <div className="md:w-1/3">
//                   <label
//                     className="block m-3 text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
//                     for="inline-full-name"
//                   >
//                     Email
//                   </label>
//                 </div>
//                 <div className="md:w-2/3">
//                   <input
//                     className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
//                     id="inline-full-name"
//                     type="email"
//                     name="email"
//                     // value={formData.email} // Set the value to the state value
//                     onChange={handleInputChange}
//                     {...register("email", { required: true })}
//                   />{" "}
//                   {errors.email && (
//                     <span style={{ color: "red" }}>*Email* is mandatory </span>
//                   )}
//                 </div>
//                 <div className="md:w-1/3">
//                   <label
//                     className="block m-3 text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
//                     for="inline-password"
//                   >
//                     Password
//                   </label>
//                 </div>
//                 <div className="md:w-2/3">
//                   <input
//                     className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
//                     id="inline-password"
//                     type="password"
//                     name="password"
//                     // value={formData.password} // Set the value to the state value
//                     onChange={handleInputChange}
//                     {...register("password", { required: true })}
//                   />
//                   {errors.password && (
//                     <span style={{ color: "red" }}>
//                       *Password* is mandatory{" "}
//                     </span>
//                   )}
//                 </div>
//                 <div className="md:w-1/3">
//                   <label
//                     className="block m-3 text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
//                     for="inline-password"
//                   >
//                     Confirm Password
//                   </label>
//                 </div>
//                 <div className="md:w-2/3">
//                   <input
//                     className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
//                     id="inline-password"
//                     type="password"
//                     name="c_password"
//                     // {...register("c_password", { required: true })}
//                   />
//                 </div>
//                 {errors.c_password && (
//                   <span style={{ color: "red" }}>
//                     *Confirm Password* is mandatory{" "}
//                   </span>
//                 )}
//               </div>
//               <div className="md:flex md:items-center mb-6">
//                 <div className="w-1/3">
//                   <label
//                     className="m-3 block text-gray-500 font-bold md:text-right mb-1 md:mb-0 mr-4 "
//                     for="inline-full-name"
//                   >
//                     State
//                   </label>
//                 </div>
//                 <div className="w-2/3">
//                   <select
//                     id="countries"
//                     className="bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
//                     name="state"
//                     // value={formData.state} // Set the value to the state value
//                     onChange={handleInputChange}
//                     {...register("select", { required: true })}
//                   >
//                     <option selected>Choose a State</option>
//                     <option value="Madhya Pradesh">Madhya Pradesh</option>
//                     <option value="Maharashtra">Maharashtra</option>
//                     <option value="UttarPradesh">UttarPradesh</option>
//                     <option value="Gujrat">Gujrat</option>
//                     <option value="DE">AndraPradesh</option>
//                     <option value="DE">Bengal</option>
//                   </select>
//                 </div>
//                 <div className="md:w-1/3">
//                   <label
//                     className="m-3 text-gray-500 font-bold md:text-right mb-1 md:mb-0 mr-4 "
//                     for="inline-full-name"
//                   >
//                     City
//                   </label>
//                 </div>
//                 <div className="w-2/3">
//                   <input
//                     className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700  focus:outline-none focus:bg-white focus:border-purple-500"
//                     id="inline-full-name"
//                     type="text"
//                     name="city"
//                     // value={formData.city} // Set the value to the state value
//                     onChange={handleInputChange}
//                     {...register("city", { required: true })}
//                   />
//                 </div>
//                 <div className="md:flex md:items-center w-full mb-6">
//                   <div className="md:w-1/3">
//                     <label
//                       className="m-3 text-gray-500 font-bold md:text-right mb-1 md:mb-0 mr-4 "
//                       for="inline-full-name"
//                     >
//                       PinCode{" "}
//                     </label>
//                   </div>
//                   <div className="md:w-2/3">
//                     <input
//                       className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
//                       id="inline-full-name"
//                       type="number"
//                       name="p_code"
//                       // value={formData.p_code} // Set the value to the state value
//                       onChange={handleInputChange}
//                       {...register("p_code")}
//                     />
//                     {errors.pincode && (
//                       <span style={{ color: "red" }}>
//                         *Pincode* is mandatory{" "}
//                       </span>
//                     )}
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <label
//                   for="message"
//                   className="m-3 py-5 text-gray-500 font-bold md:text-right mb-1 md:mb-0  "
//                 >
//                   About
//                 </label>
//                 <textarea
//                   id="message"
//                   rows="4"
//                   class="block p-2.5 text-sm my-5 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
//                   placeholder=" Please tell us something about yourself !!"
//                   name="about"
//                   // value={formData.about} // Set the value to the state value
//                   onChange={handleInputChange}
//                   {...register("about")}
//                 ></textarea>
//               </div>
//               <div className="md:flex md:items-center mb-6">
//                 <label className="md:w-2/3 block text-gray-500 font-bold">
//                   <input
//                     className="mr-2 leading-tight"
//                     type="checkbox"
//                     name="Coding"
//                     // value={formData.hobbies} // Set the value to the state value
//                     {...register("Coding")}
//                     checked={hobbies.includes("Coding")}
//                     onChange={handleCheckboxChange}
//                   />
//                   <span className="text-sm">Coding</span>
//                 </label>
//                 <label className="md:w-2/3 block text-gray-500 font-bold">
//                   <input
//                     className="mr-2 leading-tight"
//                     type="checkbox"
//                     name="Reading"
//                     // value={formData.hobbies} // Set the value to the state value
//                     {...register("Reading")}
//                     checked={hobbies.includes("Reading")}
//                     onChange={handleCheckboxChange}
//                   />
//                   <span className="text-sm">Reading</span>
//                 </label>
//                 <label className="md:w-2/3 block text-gray-500 font-bold">
//                   <input
//                     className="mr-2 leading-tight"
//                     type="checkbox"
//                     name="OSC"
//                     // value={formData.hobbies} // Set the value to the state value
//                     {...register("OSC")}
//                     checked={hobbies.includes("OSC")}
//                     onChange={handleCheckboxChange}
//                   />
//                   <span className="text-sm">OSC</span>
//                 </label>
//                 <label className="md:w-2/3 block text-gray-500 font-bold">
//                   <input
//                     className="mr-2 leading-tight"
//                     type="checkbox"
//                     name="Debugging"
//                     // value={formData.hobbies} // Set the value to the state value
//                     checked={hobbies.includes("Debugging")}
//                     onChange={handleCheckboxChange}
//                     {...register("Debugging")}
//                   />
//                   <span className="text-sm">Debugging</span>
//                 </label>
//                 <label className="md:w-2/3 block text-gray-500 font-bold">
//                   <input
//                     className="mr-2 leading-tight"
//                     type="checkbox"
//                     name="Writting"
//                     // value={formData.hobbies} // Set the value to the state value
//                     checked={hobbies.includes("Writting")}
//                     onChange={handleCheckboxChange}
//                     {...register("Writting")}
//                   />
//                   <span className="text-sm">Writting</span>
//                 </label>
//                 <label className="md:w-2/3 block text-gray-500 font-bold">
//                   <input
//                     className="mr-2 leading-tight"
//                     type="checkbox"
//                     name="Sports"
//                     // value={formData.hobbies} // Set the value to the state value
//                     checked={hobbies.includes("Sports")}
//                     onChange={handleCheckboxChange}
//                     {...register("Sports")}
//                   />
//                   <span className="text-sm">Sports</span>
//                 </label>
//               </div>
//               <div className="md:flex md:items-center">
//                 <div className="md:w-1/3"></div>
//                 <div className="md:w-2/3">
//                   <button
//                     className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
//                     type="submit"
//                   >
//                     Sign Up
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>{" "}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Signup;
import React, { useState } from "react";
import Navbar from "./Navbar";
import { useForm } from "react-hook-form";
import Footer from "./Footer";
import ProfilePopup from "./ProfilePopup";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const D = useSelector((state) => state);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  const navigate = useNavigate();
  const password = watch("password"); // Get the value of the password field
  const c_password = watch("c_password"); // Get the value of the confirm password field

  const onSubmit = async (data) => {
    if (data.password !== data.c_password) {
      alert("Passwords do not match!");
      return;
    }

    data.image = D.image.image.url;
    data.hobbies = data.hobbies.join(",");

    console.log(data.hobbies, "lll");
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/createUser",
        data
      );
      navigate("/login");
      console.log(response, "response");
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("Request data:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error message:", error.message);
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <div className="w-3/4 p-6 bg-white border border-gray-200 rounded-lg shadow">
          <div className="border-s-violet-600 justify-center">
            {isPopupOpen && <ProfilePopup closePopup={closePopup} />}

            <div className="relative items-center w-20 h-20 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
              <button
                className="relative  w-20 h-20 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600"
                onClick={openPopup}
              >
                <img
                  className="w-20 h-20"
                  src={D.image.image.url ? D.image.image.url : ""}
                />
                <svg
                  className="absolute w-12 h-12 text-gray-400 -left-1 justify-between items-center"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              {errors.image && (
                <span style={{ color: "red" }}>*First Name* is mandatory </span>
              )}
            </div>

            <div className="text-xl text-center bottom-16 border-solid mb-10">
              <h1 className="">SignUp Form</h1>
            </div>

            <form className=" items-center" onSubmit={handleSubmit(onSubmit)}>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label className=" m-3 block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                    First Name
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-full-name"
                    type="text"
                    {...register("firstName", { required: true })}
                  />
                  {errors.firstName && (
                    <span style={{ color: "red" }}>
                      *First Name* is mandatory{" "}
                    </span>
                  )}
                </div>
                <div className="md:w-1/3">
                  <label
                    className="block m-3 text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    for="inline-full-name"
                  >
                    Last Name
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-full-name"
                    type="text"
                    {...register("lastName", { required: true })}
                  />
                  {errors.lastName && (
                    <span style={{ color: "red" }}>
                      *Last Name* is mandatory{" "}
                    </span>
                  )}
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block m-3 text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    for="inline-full-name"
                  >
                    Email
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-full-name"
                    type="email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span style={{ color: "red" }}>*Email* is mandatory </span>
                  )}
                </div>
                <div className="md:w-1/3">
                  <label
                    className="block m-3 text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    for="inline-password"
                  >
                    Password
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-password"
                    type="password"
                    {...register("password", { required: true })}
                  />
                  {errors.password && (
                    <span style={{ color: "red" }}>
                      *Password* is mandatory{" "}
                    </span>
                  )}
                </div>
                <div className="md:w-1/3">
                  <label
                    className="block m-3 text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    for="inline-password"
                  >
                    Confirm Password
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-password"
                    type="password"
                    {...register("c_password")}
                  />
                </div>
                {errors.c_password && (
                  <span style={{ color: "red" }}>
                    *Confirm Password* is mandatory{" "}
                  </span>
                )}
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="w-1/3">
                  <label
                    className="m-3 block text-gray-500 font-bold md:text-right mb-1 md:mb-0 mr-4 "
                    for="inline-full-name"
                  >
                    State
                  </label>
                </div>
                <div className="w-2/3">
                  <select
                    id="countries"
                    placeholder="Choose a State "
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    {...register("state", { required: true })}
                  >
                    <option value="">Choose a State</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="UttarPradesh">UttarPradesh</option>
                    <option value="Gujrat">Gujrat</option>
                    <option value="AndraPradesh">AndraPradesh</option>
                    <option value="Bengal">Bengal</option>
                  </select>{" "}
                  {errors.state && errors.state.value === "" && (
                    <span style={{ color: "red" }}>*State* is mandatory</span>
                  )}
                </div>
                <div className="md:w-1/3">
                  <label
                    className="m-3 text-gray-500 font-bold md:text-right mb-1 md:mb-0 mr-4 "
                    for="inline-full-name"
                  >
                    City
                  </label>
                </div>
                <div className="w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700  focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-full-name"
                    type="text"
                    {...register("city", { required: true })}
                  />
                  {errors.city && (
                    <span style={{ color: "red" }}>*City* is mandatory </span>
                  )}
                </div>
                <div className="md:flex md:items-center w-full mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="m-3 text-gray-500 font-bold md:text-right mb-1 md:mb-0 mr-4 "
                      for="inline-full-name"
                    >
                      PinCode{" "}
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      id="inline-full-name"
                      type="number"
                      {...register("p_code", { required: true })}
                    />
                    {errors.p_code && (
                      <span style={{ color: "red" }}>
                        *Pincode* is mandatory{" "}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div>
                <label
                  for="message"
                  className="m-3 py-5 text-gray-500 font-bold md:text-right mb-1 md:mb-0  "
                >
                  About
                </label>
                <textarea
                  className="block p-2.5 text-sm my-5 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  {...register("about")}
                ></textarea>
              </div>
              <div className="md:flex md:items-center mb-6">
                <label className="md:w-2/3 block text-gray-500 font-bold">
                  <input
                    className="mr-2 leading-tight"
                    type="checkbox"
                    name="hobbies"
                    value="Coding"
                    {...register("hobbies", { value: "Coding" })}
                  />
                  <span className="text-sm">Coding</span>
                </label>
                <label className="md:w-2/3 block text-gray-500 font-bold">
                  <input
                    className="mr-2 leading-tight"
                    type="checkbox"
                    name="hobbies"
                    value="Reading"
                    {...register("hobbies", { value: "Reading" })}
                  />
                  <span className="text-sm">Reading</span>
                </label>
                <label className="md:w-2/3 block text-gray-500 font-bold">
                  <input
                    className="mr-2 leading-tight"
                    type="checkbox"
                    name="hobbies"
                    value="OSC"
                    {...register("hobbies", { value: "OSC" })}
                  />
                  <span className="text-sm">OSC</span>
                </label>
                <label className="md:w-2/3 block text-gray-500 font-bold">
                  <input
                    className="mr-2 leading-tight"
                    type="checkbox"
                    name="hobbies"
                    value="Debugging"
                    {...register("hobbies", { value: "Debugging" })}
                  />
                  <span className="text-sm">Debugging</span>
                </label>
                <label className="md:w-2/3 block text-gray-500 font-bold">
                  <input
                    className="mr-2 leading-tight"
                    type="checkbox"
                    name="hobbies"
                    value="Writting"
                    {...register("hobbies", { value: "Writting" })}
                  />
                  <span className="text-sm">Writting</span>
                </label>
                <label className="md:w-2/3 block text-gray-500 font-bold">
                  <input
                    className="mr-2 leading-tight"
                    type="checkbox"
                    name="hobbies"
                    value="Sport"
                    {...register("hobbies", { value: "Writting" })}
                  />
                  <span className="text-sm">Sports</span>
                </label>
              </div>
              <div className="md:flex md:items-center">
                <div className="md:w-1/3"></div>
                <div className="md:w-2/3">
                  <button
                    className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="submit"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
          </div>{" "}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
