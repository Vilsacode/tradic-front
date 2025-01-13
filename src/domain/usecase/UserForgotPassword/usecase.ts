import type output from "./output";
import type Request from "./request";
import type Response from "./response";

export default (request: Request, output: output) => {
  const response: Response = {}

  if (request.login == '') {
    response.error = 'Veuillez entrer le login et le mot de passe'
    output.present(response)
    return
  }

  output.present(response)
}
