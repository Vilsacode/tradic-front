import type output from "./output";
import type Request from "./request";
import type Response from "./response";

export default (request: Request, output: output) => {
  const response: Response = {}

  output.present(response)
}
