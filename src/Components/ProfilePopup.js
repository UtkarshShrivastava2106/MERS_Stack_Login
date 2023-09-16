import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addImage } from "../State/Action/action";

const ProfilePopup = ({ closePopup }) => {
  const [data, setData] = useState([]);

  const dispatch = useDispatch();
  //   const select = useSelector((state = state.image));

  async function fetchingApi() {
    try {
      const response = await axios.get(
        "https://api.slingacademy.com/v1/sample-data/photos"
      );

      if (Array.isArray(response.data)) {
        setData(response.data.photos);
        console.log(data, "function");
      } else if (response.data && Array.isArray(response.data.photos)) {
        setData(response.data.photos);
      } else {
        console.error("Invalid data structure received from API");
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    console.log(data, "imageData");
    fetchingApi();
  }, []);
  const handleImageClick = (image) => {
    dispatch(addImage(image));
  };
  return (
    <div className="profile-popup">
      <div className="max-w-64 bg-white shadow-lg rounded-lg overflow-hidden m-4">
        <div className="py-4 px-6 flex flex-wrap">
          {data &&
            data.map((item, index) => {
              return (
                <img
                  className="w-16 h-16 object-cover m-2"
                  key={index}
                  src={item.url}
                  alt={`Image ${index}`}
                  onClick={() => handleImageClick(item)}
                />
              );
            })}
        </div>
      </div>
      <button onClick={closePopup}>Close</button>
    </div>
  );
};

export default ProfilePopup;
