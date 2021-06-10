import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

async function getPosts() {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return response.data;
}

export { getPosts };
