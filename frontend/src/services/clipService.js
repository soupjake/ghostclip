const baseUrl = import.meta.env.VITE_API_URL
const headers = {
  "Content-Type": "application/json",
  "x-api-key": import.meta.env.VITE_API_KEY,
}

export async function getClipById(id) {
  try {
    const url = `${baseUrl}/${id}`
    console.log(url, headers)

    await new Promise((resolve) => setTimeout(() => resolve(), 1000))

    return "clip 1"
    // const response = await fetch(url, headers)
    // return await response.json()
  } catch (e) {
    console.error(e)
    return ""
  }
}

export async function createClipById(id) {
  try {
    const url = `${baseUrl}/${id}`
    console.log(url, headers)

    await new Promise((resolve) => setTimeout(() => resolve(), 1000))

    return true
    // const response = await fetch(url, headers)
    // return await response.json()
  } catch (e) {
    console.error(e)
    return false
  }
}

export async function deleteClipById(id) {
  try {
    const url = `${baseUrl}/${id}`
    console.log(url, headers)

    await new Promise((resolve) => setTimeout(() => resolve(), 1000))

    return true
    // const response = await fetch(url, headers)
    // return await response.json()
  } catch (e) {
    console.error(e)
    return false
  }
}
