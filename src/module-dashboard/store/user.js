import { login } from '@/api/base/frame'
import { getToken, setToken, removeToken, setMsg } from '@/utils/auth'

import { Message } from 'element-ui'

const user = {
  state: {
    user: '',
    status: '',
    code: '',
    token: getToken(),
    name: '',
    avatar: '',
    introduction: '',
    roles: [],
    setting: {
      articlePlatform: []
    },
    regionId: '',
    repair: '',
    roleCode: '',
    userId: ''
  },

  mutations: {
    SET_CODE: (state, code) => {
      state.code = code
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction
    },
    SET_SETTING: (state, setting) => {
      state.setting = setting
    },
    SET_STATUS: (state, status) => {
      state.status = status
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar || ''
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },

  actions: {
    // 用户名登录
    LoginByUsername ({ commit }, userInfo) {
      // const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        login({
          loginName: 'demo',
          password: '888itcast.CN764%...',
          loginType: 0,
          clientToken: userInfo.clientToken,
          code: userInfo.code
        }).then(response => {
          const data = response.data
          if (response.data.success) {
            console.log(data)
            commit('SET_TOKEN', data.token)
            setToken(response.data.token)
            setMsg(response.data.userName)
            commit('SET_NAME', data.userName)
            commit('SET_CODE', userInfo.code)
            commit('SET_AVATAR', data.avatar)
            commit('SET_INTRODUCTION', data.introduction)
            Message.success('登陆成功')
          } else {
            Message.error('验证码错误')
          }
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息

    GetUserInfo ({ commit, state }) {
      return commit('SET_ROLES', [1, 2, 3]) // 权限数组 roles
    },

    // GetUserInfo ({ commit, state }) {
    //   return new Promise((resolve, reject) => {
    //     profile().then(response => {
    //       const data = response.data
    //       commit('SET_ROLES', [1, 2, 3]) // 权限数组 roles
    //       commit('SET_NAME', data.userName)
    //       commit('SET_AVATAR', data.avatar)
    //       commit('SET_INTRODUCTION', data.introduction)
    //       resolve()

    //       resolve(response)
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },

    // 第三方验证登录
    // LoginByThirdparty({ commit, state }, code) {
    //   return new Promise((resolve, reject) => {
    //     commit('SET_CODE', code)
    //     loginByThirdparty(state.status, state.email, state.code).then(response => {
    //       commit('SET_TOKEN', response.data.token)
    //       setToken(response.data.token)
    //       resolve()
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },

    // 登出
    LogOut ({ commit, state }) {
      return new Promise((resolve, reject) => {
        // logout().then(() => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        removeToken()
        resolve()
        // }).catch(error => {
        //   reject(error)
        // })
      })
    },

    // 前端 登出
    FedLogOut ({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    }

  }
}

export default user
