import axios from "axios";

const instance = axios.create({
    baseURL: "https://js-react-node-default-rtdb.firebaseio.com/exam_9"
})
export default instance;