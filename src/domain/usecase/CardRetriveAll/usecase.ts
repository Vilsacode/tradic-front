import type output from "./output"
import type Request from "./request"
import type Response from "./response"
import services from "@/domain/services"
import { activeFilter } from "@/domain/store/filters"

export default async (request: Request, output: output) => {
  const response: Response = {}

  const responseRepository = await services.cardRepository.retriveAll(activeFilter)

  if (!responseRepository.error) {
    response.cards = responseRepository.cards
    response.pagination = responseRepository.pagination
  } else {
    response.error = responseRepository.error
  }

  output.present(response)
}
