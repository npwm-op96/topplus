import quotation from "~/api/quotation"
// import { saveQuotation, GetQuotation } from "~/services/api/quotation.js"
// import { GetQuotation } from "../../services/api/quotation"

export const state = () => ({
    quotation: []

})
export const getters = {

}
export const mutations = {
    setQuotation(state, val) {

        state.quotation = val
    },
    addQuotation(state, val) {
        state.quotation.push(val)
    },
    async saveQuotation(state, data) {
        return await this.$quotationRepository.saveQuotation(data)
    },
    async getQuotation(state, req) {
        // return await GetQuotation(req)
        return await this.$quotationRepository.GetQuotation()
    }
}
export const actions = {
    async saveQuotation({ commit, state }, data) {
        commit("setQuotation", quotation)
        const res = await this.$quotationRepository.saveQuotation(data)
        return res.data

    },
    async getQuotation({ commit, state }, data) {
        // commit("getQuotation", data)
        const res = await this.$quotationRepository.GetQuotation(data)
        return res.data
    }

}