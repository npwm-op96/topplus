import quotation from "~/api/quotation"
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
  }
}
export const actions = {
  getQuotation({ commit, state }, data) {
    console.log('store getQuotation')
    // commit("setQuotation",data)
    commit("setQuotation", quotation)
  }
}
