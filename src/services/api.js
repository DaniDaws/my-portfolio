const BASE_URL = "https://api.github.com";

export const fetchRepos = async (username) => {
  try {
    const response = await fetch(`${BASE_URL}/users/${username}/repos`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching repositories:", error);
    return [];
  }
};
