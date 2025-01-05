// Write a function that makes a GET request to the JSONPlaceholder API and
// returns posts that are longer than 100 characters.

import axios from "axios";

// API URL: https://jsonplaceholder.typicode.com/posts
// Use axios library
type APIResponseType = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

async function fetchLongPosts(): Promise<APIResponseType[]> {
  // Your code goes here
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const { data } = await axios.get<APIResponseType[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const filteredArr = data.filter((item) => item.body.length > 100);
  return await filteredArr;
}

module.exports = { fetchLongPosts };
