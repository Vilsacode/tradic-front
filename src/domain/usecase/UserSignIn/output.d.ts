import type Response from "./response";

export default interface output {
  present: (response: Response) => void
}
