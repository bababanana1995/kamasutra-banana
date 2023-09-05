import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": '2b5765e8-28c5-48fc-8550-7dcfd79b4d1b'
    },

})
export const usersAPI ={
    getUsers (currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(res=>res.data)
    },
    followUsers (id:string){
        return instance.post(`follow/${id}`, {})
    },
    unFollowUsers (id:string){
        return instance.delete(`follow/${id}`)
    }
}
