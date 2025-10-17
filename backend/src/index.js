import { response } from "./utils"
import { getClip, createClip, deleteClip } from "./db.js"

export const handler = async (event) => {
  try {
    console.log(event)

    const { body, httpMethod, pathParameters } = event

    if (!pathParameters || httpMethod) {
      throw Error("Invalid event received")
    }

    const { id } = pathParameters

    switch (httpMethod) {
      case "GET": {
        const results = await getClip(id)

        return response(200, results)
      }
      case "PUT": {
        const content = JSON.parse(body)
        const results = await createClip(id, content)

        return response(200, results)
      }
      case "DELETE": {
        const results = await deleteClip(id)

        return response(200, results)
      }
      default:
        break
    }
  } catch (e) {
    return response(500, { message: e })
  }
}
