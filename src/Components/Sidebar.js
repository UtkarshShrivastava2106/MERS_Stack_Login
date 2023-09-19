import axios from "axios";
import React, { useEffect, useState } from "react";

const Sidebar = ({ userByHobby, isSubmitted, onClickFilter }) => {
  const [selectedHobbies, setSelectedHobbies] = useState([]);
  const [hobbyUser, setHobbyUser] = useState([]);
  const [selectedState, setSelectedState] = useState(""); // Add selected state
  const [selectedCity, setSelectedCity] = useState("");
  const [pinCode, setPinCode] = useState("");
  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    setSelectedHobbies((prevHobbies) =>
      prevHobbies.includes(value)
        ? prevHobbies.filter((hobby) => hobby !== value)
        : [...prevHobbies, value]
    );
  };

  // const handleFilter = async (e) => {
  //   e.preventDefault();
  //   try {
  //     if (isSubmitted === true) {
  //       console.log("response submitted");
  //     } else {
  //       const formData = {}; // Create an empty object to hold form data

  //       // Add selected hobbies to the form data
  //       if (selectedHobbies.length > 0) {
  //         formData.hobbies = selectedHobbies;
  //       }

  //       // Add selected state to the form data
  //       if (selectedState) {
  //         formData.state = selectedState;
  //       }

  //       if (selectedCity) {
  //         formData.city = selectedCity;
  //       }

  //       if (pinCode) {
  //         formData.pinCode = pinCode;
  //       }

  //       const jsonData = JSON.stringify(formData);
  //       console.log(jsonData, "jsonData");

  //       const response = await axios.post(
  //         "http://localhost:5000/api/users/getUserByHabbit",
  //         jsonData,
  //         {
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );

  //       setSelectedState(response.data);
  //       setHobbyUser(response.data);
  //       userByHobby(response.data);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching users:", error);
  //   }
  // };

  const handleFilter = async (e) => {
    e.preventDefault();
    try {
      if (isSubmitted === true) {
        console.log("response submitted");
      } else {
        const params = {};

        // Add selected hobbies to the query params
        if (selectedHobbies.length > 0) {
          params.hobbies = selectedHobbies.join(",");
        }

        // Add selected state to the query params
        if (selectedState) {
          params.state = selectedState;
        }
        if (selectedCity) {
          console.log("selectedCity", selectedCity);
          params.city = selectedCity;
        }
        if (pinCode) {
          params.pinCode = pinCode;
        }
        // Make the GET request with the constructed query params
        const response = await axios.get(
          "http://localhost:5000/api/users/getUserByHabbit",
          {
            params: params,
          }
        );
        setSelectedState(response.data);
        setHobbyUser(response.data);
        userByHobby(response.data);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleSelectChange = (event) => {
    setSelectedState(event.target.value);
  };
  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const handlePinCode = (e) => {
    setPinCode(e.target.value);
  };
  const handleSidebarToggle = () => {
    const sidebar = document.getElementById("default-sidebar");
    sidebar.classList.toggle("-translate-x-full");
  };
  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={handleSidebarToggle}
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      {/* <label className="md:w-2/3 block text-gray-500 font-bold">
        <input
          className="mr-2 leading-tight"
          type="checkbox"
          name="hobbies"
          value="Coding"
          checked={selectedHobbies.includes("Coding")} // Check if "Coding" is in selectedHobbies
          onChange={handleCheckboxChange} // Call the handleCheckboxChange function
        />
        <span className="text-sm">Coding</span>
      </label> */}
      <aside
        id="default-sidebar"
        className=" top-0 left-0  lg:h-screen  transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="lg:min-h-screen w-full px-3 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <h1 className=" dark:text-white text-2xl hover:bg-gray-100 dark:hover:bg-gray-700">
            Filters
          </h1>
          <form onSubmit={handleFilter}>
            <ul className="space-y-2 font-medium">
              <li>
                <span className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  Hobbies
                </span>
                <div className="flex flex-col md:flex md:items-center mb-6">
                  <label className="md:w-2/3 block text-gray-500 font-bold">
                    <input
                      className="mr-2 leading-tight"
                      type="checkbox"
                      name="hobbies"
                      value="Coding"
                      checked={selectedHobbies.includes("Coding")} // Check if "Coding" is in selectedHobbies
                      onChange={handleCheckboxChange}
                      //   {...register("hobbies", { value: "Coding" })}
                    />
                    <span className="text-sm">Coding</span>
                  </label>
                  <label className="md:w-2/3 block text-gray-500 font-bold">
                    <input
                      className="mr-2 leading-tight"
                      type="checkbox"
                      name="hobbies"
                      value="Reading"
                      checked={selectedHobbies.includes("Reading")} // Check if "Coding" is in selectedHobbies
                      onChange={handleCheckboxChange}
                      //   {...register("hobbies", { value: "Reading" })}
                    />
                    <span className="text-sm">Reading</span>
                  </label>
                  <label className="md:w-2/3 block text-gray-500 font-bold">
                    <input
                      className="mr-2 leading-tight"
                      type="checkbox"
                      name="hobbies"
                      value="OSC"
                      checked={selectedHobbies.includes("OSC")} // Check if "Coding" is in selectedHobbies
                      onChange={handleCheckboxChange}
                      //   {...register("hobbies", { value: "OSC" })}
                    />
                    <span className="text-sm">OSC</span>
                  </label>
                  <label className="md:w-2/3 block text-gray-500 font-bold">
                    <input
                      className="mr-2 leading-tight"
                      type="checkbox"
                      name="hobbies"
                      value="Debugging"
                      checked={selectedHobbies.includes("Debugging")} // Check if "Coding" is in selectedHobbies
                      onChange={handleCheckboxChange}
                      //   {...register("hobbies", { value: "Debugging" })}
                    />
                    <span className="text-sm">Debugging</span>
                  </label>
                  <label className="md:w-2/3 block text-gray-500 font-bold">
                    <input
                      className="mr-2 leading-tight"
                      type="checkbox"
                      name="hobbies"
                      value="Writting"
                      checked={selectedHobbies.includes("Writting")} // Check if "Coding" is in selectedHobbies
                      onChange={handleCheckboxChange}
                      //   {...register("hobbies", { value: "Writting" })}
                    />
                    <span className="text-sm">Writting</span>
                  </label>
                  <label className="md:w-2/3 block text-gray-500 font-bold">
                    <input
                      className="mr-2 leading-tight"
                      type="checkbox"
                      name="hobbies"
                      value="Sports"
                      checked={selectedHobbies.includes("Sports")} // Check if "Coding" is in selectedHobbies
                      onChange={handleCheckboxChange}
                      //   {...register("hobbies", { value: "Writting" })}
                    />
                    <span className="text-sm">Sports</span>
                  </label>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span className="flex-1 ml-3 whitespace-nowrap">State</span>

                  <div>
                    <div className="w-2/3">
                      <select
                        id="countries"
                        placeholder="Choose a State "
                        value={selectedState}
                        onChange={handleSelectChange}
                        className="bg-gray-200 appearance-none border-2 w-36 h-7 border-gray-200 rounded  text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        // {...register("state", { required: true })}
                      >
                        <option value="">
                          Choose a State
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-caret-down-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8.354 11.354a.5.5 0 0 1-.708 0L1.354 5.646a.5.5 0 0 1 .353-.854h12.586a.5.5 0 0 1 .353.854l-6.293 6.293z" />
                          </svg>
                        </option>

                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="UttarPradesh">UttarPradesh</option>
                        <option value="Gujrat">Gujrat</option>
                        <option value="AndraPradesh">AndraPradesh</option>
                        <option value="Bengal">Bengal</option>
                      </select>{" "}
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span className="flex-1 ml-3 whitespace-nowrap">City</span>
                  <div className="w-2/3">
                    <input
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full mx-2 text-gray-700  focus:outline-none focus:bg-white focus:border-purple-500"
                      id="inline-full-name"
                      type="text"
                      value={selectedCity}
                      onChange={handleCityChange}
                    />
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span className="flex-1 ml-3 whitespace-nowrap">PinCode</span>
                  <div className="w-2/3">
                    <input
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full mx-2 text-gray-700  focus:outline-none focus:bg-white focus:border-purple-500"
                      id="inline-full-name"
                      type="text"
                      value={pinCode}
                      onChange={handlePinCode}
                    />
                  </div>
                </a>
              </li>
            </ul>
            <div className="md:w-2/3">
              <button
                className="shadow items-center my-10 mx-10 bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
                // onClick={handleFilter}
              >
                Apply
              </button>
            </div>
          </form>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
