import axios from "axios";

function testFetch()
{
    console.log("Fetching request to API...");
    axios.get("/api/tests")
    .then(res => {console.log(res)});
}

export default testFetch;