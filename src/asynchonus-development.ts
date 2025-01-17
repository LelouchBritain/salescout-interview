// Write a function that accepts an array of URLs,
// makes parallel queries for each of them, and returns an
// an array of results in the order in which the queries are completed.

import axios from "axios";

// Example input data:
// const urls = ['https://jsonplaceholder.typicode.com/posts/1',
// 'https://jsonplaceholder.typicode.com/posts/2'];

// Expected result:
// [
// { data: { ... }, status: 200 },
// { data: { ... }, status: 200 }
// ]
type RequestsResult = {
  data: any;
  status: number;
};

async function fetchAll(urls: string[]): Promise<RequestsResult[]> {
  //Your code goes here
  const promises = urls.map(async (url) => {
    const response = await axios.get(url);
    return { data: response.data, status: response.status };
  });

  const results = await Promise.all(promises);
  return results;
}

module.exports = { fetchAll };
