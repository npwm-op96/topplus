export const state = () => ({
  header:
    'mixed' /* available: mixed, basic, droplist, mega, hamburger, navscroll, search */,
  footer: 'sitemap' /* basic, blog, contact, sitemap */,
  corner: 'chat' /* chat, nav */
})

export const mutations = {
  setheader(state, val) {
    state.header = val;
  },
}