import axios from "axios";

axios.defaults.baseURL = 'https://dog-rescue-dd90e2b7e4a8.herokuapp.com/'
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;
