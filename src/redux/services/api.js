import axios from 'axios';
axios.defaults.baseURL = 'https://project-team-6-backend.onrender.com';

//--------------------auth-------------------//
export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export async function registration(credentials) {
  const response = await axios.post('api/users/register', credentials);
  setAuthHeader(response.data.token);
  return response.data;
}

export async function logIn(credentials) {
  const response = await axios.post('api/users/login', credentials);
  setAuthHeader(response.data.user.token);
  return response.data;
}

export async function logOut() {
  await axios.post('api/users/logout');
  clearAuthHeader();
}

export async function refresh() {
  const response = await axios.get('api/users/current');
  return response.data;
}

//--------------------user-------------------//
export async function support(credentials) {
  const response = await axios.post('api/help', credentials);
  return response.data;
}

export async function editUser(data) {
  const response = await axios.patch('api/users/update', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
}

//--------------------board-------------------//
export async function addBoard(data) {
  const response = await axios.post('api/boards', data);
  return response.data;
}

export async function getBoardById(boardId) {
  const response = await axios.get(`api/boards/${boardId}`);
  return response.data;
}

export async function deleteBoard(boardId) {
  const response = await axios.delete(`api/boards/${boardId}`);
  return response.data;
}

export async function editBoard(boardId, data) {
  const response = await axios.patch(`api/boards/${boardId}`, data);
  return response.data;
}

//--------------------columns-------------------//
export async function addColumn(data) {
  const response = await axios.post('api/columns', data);
  return response.data;
}

export async function editColumn(columnId, data) {
  const response = await axios.patch(`api/columns/${columnId}`, data);
  return response.data;
}

export async function deleteColumnById(columnId) {
  const response = await axios.delete(`api/columns/${columnId}`);
  return response.data;
}

//--------------------tasks-------------------//
export async function addTask(data) {
  const response = await axios.post('api/tasks', data);
  return response.data;
}

export async function editTaskById(taskId, data) {
  const response = await axios.patch(`api/tasks/${taskId}`, data);
  return response.data;
}

export async function deleteTaskById(taskId) {
  const response = await axios.delete(`api/tasks/${taskId}`);
  return response.data;
}

export async function replaceTask(taskId, column) {
  const response = await axios.post(`api/tasks/${taskId}/replace`, { column });
  return response.data;
}
