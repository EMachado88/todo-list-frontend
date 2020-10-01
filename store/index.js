export const state = () => ({
  user: false,
  token: ''
})

export const mutations = {
  login (state, { user, token }) {
    state.user = user
    state.token = token
  },

  logout (state) {
    state.user = false
    state.token = ''
  }
}
