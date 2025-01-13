import type UserRepository from "@/domain/repository/userRepository"

const repository: UserRepository = {
  login(login) {
    if (login === 'azerty') {
      return {
        username: 'azerty',
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
      }
    }
    return false
  },
}

export default repository
