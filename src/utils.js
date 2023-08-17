import axios from 'axios';

const getAll = (url) => axios.get(url);

const getItem = (url, id) => axios.get(`${url}/${id}`);

const getUserItems = async (url, userId) => {
  const { data } = await getAll(`${url}?userId=${userId}`);
  return data
};

const deleteItem = (url, user_id) => (
  axios.delete(`${url}/${user_id}`)
  )

const updateItem = (url, id, obj) => (axios.patch(`${url}/${id}`, obj));

const updateTodo = (url, id) => (axios.patch(`${url}/${id}`, {completed: 'True'}));


export { getAll, getItem, getUserItems,deleteItem,updateItem ,updateTodo}