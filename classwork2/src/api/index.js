import axios from "axios";

async function getPosts() {
  const response = await axios.get("https://reqres.in/api/users");
  return response.data;
}

export { getPosts };
