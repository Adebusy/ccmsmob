import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.157.87:3001/api",
});
// apiClient.get("user/login").then((response) => {
//   if (!response.ok) {
//     response.problem;
//   }
// });
export default apiClient;
