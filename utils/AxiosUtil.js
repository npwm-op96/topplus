// import axios from "axios";

// export default async function AXIOS_SERVICE( method, url, data ) {
//   const jsonData = JSON.stringify(data);
//   const config = {
//     method,
//     url,
//     headers: {
//       "Content-Type": "application/json",
//     },
//     data: jsonData,
//   };


//   try {
//     const res = await axios(config);
//     return {
//       status: "success",
//       data:res.data,
//     };
//   } catch (e) {
//     return {
//       status: "fail",
//       message: e.message,
//     };
//   }
// }