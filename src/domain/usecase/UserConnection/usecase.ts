import type output from "./output";
import type Request from "./request";
import type Response from "./response";
import services from '@/domain/services'

export default (request: Request, output: output) => {
  const response: Response = {}

  if (request.login == '' || request.password == '') {
    response.error = 'Veuillez entrer le login et le mot de passe'
    output.present(response)
    return
  }

  const user = services.userRepository.login(request.login, request.password)
  console.log(user)

  if (!user) {
    response.error = 'Login ou mot de passe incorrect'
    output.present(response)
    return
  }

  response.user = user
  output.present(response)
}
