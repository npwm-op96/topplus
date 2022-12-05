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
    },
    async downloadfile({ commit, state }, url, title) {
        console.log(title, 'downloadfile', url)
        const res = await this.$filesRepository.downloadfile(url)
        return res
    }

}