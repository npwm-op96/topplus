export const state = () => ({
    file: []

})
export const mutations = {
    async saveFile(state, data) {
        return await this.$filesRepository.saveFile(data)
    }
}
export const actions = {
    async saveFile({ commit, state }, data) {
        // commit("setQuotation", quotation)
        const res = await this.$filesRepository.saveFile(data)
        return res.data;
    }

}