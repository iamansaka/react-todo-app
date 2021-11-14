import axios from 'axios';

const axiosFirebase = axios.create({
    baseURL: "https://react-todo-app-c46d8-default-rtdb.europe-west1.firebasedatabase.app"
})

export default axiosFirebase;