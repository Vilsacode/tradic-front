import type output from "./output"
import type Request from "./request"
import type Response from "./response"
import services from "@/domain/services"

export default async (request: Request, output: output) => {
  const response: Response = {}

  response.cards = await services.cardRepository.retriveAll()

  output.present(response)
}
