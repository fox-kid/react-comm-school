async function fetchNames() {
  try {
    const response = await fetch("https://www.swapi.tech/api/people");
    if (response.ok) {
      const data = await response.json();

      return data;
    }

    throw new Error("");
  } catch (error) {
    throw new Error("Something went wrong");
  }
}

async function fetchUser(page) {
  try {
    const response = await fetch(`https://www.swapi.tech/api/people/${page}`);
    if (response.ok) {
      const data = await response.json();
      return data.result.properties;
    }
    throw new Error("");
  } catch (error) {
    throw new Error("Something went wrong");
  }
}

export { fetchNames, fetchUser };
