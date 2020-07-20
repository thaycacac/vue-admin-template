import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import router, { resetRouter } from '@/router'

const state = {
  token: getToken(),
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  role: '',
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_FIRSTNAME: (state, firstName) => {
    state.firstName = firstName
  },
  SET_LASTNAME: (state, lastName) => {
    state.lastName = lastName
  },
  SET_PHONENUMBER: (state, phoneNUmber) => {
    state.phoneNUmber = phoneNUmber
  },
  SET_EMAIL: (state, email) => {
    state.email = email
  },
  SET_ROLE: (state, role) => {
    state.role = role
  },
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password })
        .then((response) => {
          const { token } = response
          commit('SET_TOKEN', token)
          setToken(token)
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  // get user info
  getInfo({ commit }) {
    return new Promise((resolve, reject) => {
      getInfo()
        .then((data) => {
          console.log('get info', data)
          if (!data) {
            reject('Verification failed, please Login again.')
          }

          const { role, firstName, lastName, email, phoneNumber } = data

          commit('SET_ROLE', role)
          commit('SET_FIRSTNAME', firstName)
          commit('SET_LASTNAME', lastName)
          commit('SET_EMAIL', email)
          commit('SET_PHONENUMBER', phoneNumber)
          resolve(data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  // user logout
  logout({ commit, state, dispatch }) {
    return new Promise((resolve, reject) => {
      logout(state.token)
        .then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLE', [])
          removeToken()
          resetRouter()

          // reset visited views and cached views
          dispatch('tagsView/delAllViews', null, { root: true })

          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise((resolve) => {
      commit('SET_TOKEN', '')
      commit('SET_ROLE', [])
      removeToken()
      resolve()
    })
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
