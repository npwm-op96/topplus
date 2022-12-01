import { saveFile } from "~/services/api/files.js"
export const state = () => ({
    file: []

})
export const mutations = {
    async saveFile(state, data) {
        return await saveFile(data)
    }
}
export const actions = {
    async saveFile({ commit, state }, data) {
        // commit("setQuotation", quotation)
        const res = await saveFile(data)
        return res.data;
    }

}