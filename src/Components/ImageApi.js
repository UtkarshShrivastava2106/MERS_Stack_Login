// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const ImageApi = () => {
//   const [data, setData] = useState([]);
//   async function fetchingApi() {
//     async function fetchingApi() {
//       try {
//         const response = await axios.get(
//           "https://api.slingacademy.com/v1/sample-data/photos"
//         );
//         setData(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     }
//   }

//   useEffect(() => {
//     console.log(data, "imageData");
//     fetchingApi();
//   }, []);
// };

// export default ImageApi;
import axios from "axios";
import React, { useEffect, useState } from "react";

const ImageApi = () => {
  const [data, setData] = useState([]);

  async function fetchingApi() {
    try {
      const response = await axios.get(
        "https://api.slingacademy.com/v1/sample-data/photos"
      );
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    console.log(data.photos, "imageData");
    fetchingApi();
  }, []);
};

export default ImageApi;
