const { default: axios } = require('axios');

export async function getUsers() {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
  return data;
}
