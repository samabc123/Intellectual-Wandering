import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
    state: () => {
        return {
            user: "查无此人", //被聊天的对象
            master: "查无此人", //本人
        }
    },
    getters: {},
    actions: {
        Chatgpt(u: string) {
            this.user = u
            localStorage.setItem('user', this.user)
        },
        getGpt() {
            return localStorage.getItem('user')
        },
        Chatmaster(u: string) {
            this.master = u
            localStorage.setItem('master', this.master)
        },
        getMaster() {
            return localStorage.getItem('master')
        },
    }
})
