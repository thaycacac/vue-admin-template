const users = {
  admin: {
    role: 'admin',
    firstName: 'Phạm Ngọc',
    lastName: 'Hòa',
    email: 'thaycacac@gmail.com',
    phoneNumber: '0968038714',
    token: 'token-admin',
    avatar:
      'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
  },
  editor: {
    role: 'editor',
    firstName: 'Phạm Quang',
    lastName: 'Hiệp',
    email: 'thaycacac@gmail.com',
    phoneNumber: '0968038714',
    token: 'token-editor',
    avatar:
      'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
  },
}

module.exports = [
  // user login
  {
    url: '/user/login',
    type: 'post',
    response: (config) => {
      const { username } = config.body
      const user = users[username]

      // mock error
      if (!user) {
        return {
          code: 403,
          message: 'Account and password are incorrect.',
        }
      }

      return {
        code: 200,
        data: user,
      }
    },
  },

  // get user info
  {
    url: '/user/info',
    type: 'get',
    response: () => {
      const user = users.admin

      // mock error
      if (!user) {
        return {
          code: 403,
          message: 'Login failed, unable to get user details.',
        }
      }

      return {
        code: 200,
        data: user,
      }
    },
  },

  // user logout
  {
    url: '/user/logout',
    type: 'post',
    response: (_) => {
      return {
        code: 200,
        data: 'success',
      }
    },
  },
]
