import { setMessageLineNoti } from "~/services/api/message"
export const state = () => ({
    message: []
})

export const actions = {
    setMessageLine() {

    },
    SEND_LINE_MESSAGE_NOTI({ commit, state }, data) {
       const res =  setMessageLineNoti(data)
       console.log('SEND_LINE_MESSAGE_NOTI',res)

    },
    SEND_MESSAGE_EMAIL() {

    }

}
export const mutations = {


}
export const getters = {


}