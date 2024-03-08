import axios from "axios";
axios.defaults.baseURL = "https://project-team-6-backend.onrender.com/api";

//--------------------auth-------------------//
export const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = "";
}

export async function registration(credentials) {
    const response = await axios.post("/users/register", credentials);
    setAuthHeader(response.data.token);
    return response.data; 
}

export async function logIn(credentials) {
    const response = await axios.post("/users/login", credentials);
    setAuthHeader(response.data.token);
    return response.data; 
}

export async function logOut() {
    await axios.post("/users/logout");
    clearAuthHeader();
}

export async function refresh() {
    const response = await axios.get("/users/current");
    return response.data; 
}

//--------------------user-------------------//
export async function support(credentials) {
    const response = await axios.post("/help", credentials); 
    return response.data;
}

export async function editUser(data) {
    const response = await axios.patch("/users/update", data, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    return response.data;
}     

//--------------------board-------------------//
export async function addBoard(data) {
    const response = await axios.post('/boards', data);
    return response.data; 
}

export async function getBoardById(boardId) {
    const response = await axios.get(`/boards/${boardId}`);
    return response.data;    
}

export async function deleteBoard(boardId) {
    const response = await axios.delete(`/boards/${boardId}`);
    return response.data;
}

export async function editBoard(boardId, data) {
    const response = await axios.patch(`/tasks/${boardId}`, data);
    return response.data;
}

//--------------------columns-------------------//
export async function addColumn(data) {
    const response = await axios.post('/columns', data);
    return response.data; 
}

export async function editColumn(columnId, data) {
    const response = await axios.patch(`/columns/${columnId}`, data);
    return response.data; 
}

export async function deleteColumnById(columnId) {
    const response = await axios.delete(`/columns/${columnId}`);
    return response.data;
}

//--------------------tasks-------------------//
export async function addTask(column,title) {
    const response = await axios.post("/tasks", {column, title});
    return response; 
}

export async function deleteTask(taskId) {
    const response = await axios.delete(`/tasks/${taskId}`);
    return response.data; 
}

export async function editTask(taskId, data) {
    const response = await axios.patch(`/tasks/${taskId}`, data);
    return response;
}

export async function replaseTask(taskId, columns) {
    
}


