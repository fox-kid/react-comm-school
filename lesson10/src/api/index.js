import axios from "axios";

const API_URL = "https://www.swapi.tech/api";

async function getNames(id) {
  const response = await axios.get(`${API_URL}/people/${id}`);

  if (id === "") {
    return response.data.results;
  }
  return response.data.result.properties;
}

export { getNames };
