import { saveCustomer } from "~/services/api/customer.js"
export const state = () => ({
    customer: []

})
export const mutations = {
    async saveCustomer(state, data) {
        return await saveCustomer(data)
    }
}
export const actions = {
    async saveCustomer({ commit, state }, data) {
        // commit("setQuotation", quotation)
        const res = await saveCustomer(data)
        return res.data;
    }

}