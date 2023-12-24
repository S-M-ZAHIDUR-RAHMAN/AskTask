import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useTask = () => {
    //tan stack query
    const axiosPublic = useAxiosPublic();
 
    const { refetch, data: tasks = [] } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/tasks`)
            return res.data;
            
        }
        
    })
    return [tasks, refetch]
};

export default useTask;