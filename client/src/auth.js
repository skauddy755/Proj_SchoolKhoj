import axios from "axios";

function get_api()
{
  let api = axios.create({
    baseURL: "http://localhost:5000"
  });
  return api;
}

function getAllUsers()
{
  let api = get_api();
  api.get("/api/users/getallusers")
    .then((res) => {console.log(res.data)})
    .catch((e) => {console.log(e)});
}

export default getAllUsers;