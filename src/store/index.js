import { defineStore } from 'pinia'

export const mainstore = defineStore('main',{
    state:()=>({
        isshow:'true',
        n:10
    })
})