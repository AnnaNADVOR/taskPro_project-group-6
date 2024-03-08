// import axios from "axios";
// axios.defaults.baseURL = "https://project-team-6-backend-onrender.com/api";

export async function addCard(column,title) {
    const response = await axios.post("/tasks", {column, title});
    return response; 
}