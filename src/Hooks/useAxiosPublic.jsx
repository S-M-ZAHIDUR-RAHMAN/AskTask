import axios from "axios";

const axiosPublic = axios.create({
    baseURL: ' https://ask-task-server-9cr8rl0l7-s-m-zahidur-rahmans-projects.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;