import axios from "axios";

function get_api()
{
  let BU;
  let f;
  if(window.location.host === "localhost:3000")
  {
    f = true;
    BU = "http://localhost:5000";
  }
  else
  {
    f = false;
    BU = window.location.origin;
  }
  console.log(BU);
  console.log(f);
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