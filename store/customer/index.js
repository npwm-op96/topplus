export const state = () => ({
    customer: []

})
export const mutations = {
    async saveCustomer(state, data) {
        return await this.$customersRepository(data)
    }
}
export const actions = {
    async saveCustomer({ commit, state }, data) {
        commit("saveCustomer", data)
        const res = await this.$customersRepository.saveCustomer(data)
        return res.data;
    }

}