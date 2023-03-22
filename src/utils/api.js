import axios from './request'

export const getlist = ()=>axios.get(`home`,{
    params:{
        ID:1
    }
})

export const getDetail = obj=>axios.get(`detail`,{params:obj})

