import axios from 'axios';

const getAll = (url) => axios.get(url);

const getItem = (url, id) => axios.get(`${url}/${id}`);

const getUserItems = async (url, userId) => {
  const { data } = await getAll(`${url}?userId=${userId}`);
  return data
};

const deleteItem = (url, user_id) => {
  console.log(user_id)
  axios.delete(`${url}?id=${user_id}`)
};

const updateItem = (url, id,obj) => axios.put(`${url}/${id}`,obj);

export { getAll, getItem, getUserItems,deleteItem,updateItem }