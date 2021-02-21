import axios from "axios";

function get_api()
{
  const BU;
  if(window.location.host === "https://localhost:3000")
  {
    BU = "http://localhost:5000";
  }
  else
  {
    BU = window.location.hostname;
  }
  console.log();
  let api = axios.create({
    baseURL: BU
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