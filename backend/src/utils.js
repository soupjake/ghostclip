const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Headers": "*",
    "Content-Type": "application/json"
}

export const response = (statusCode, data) => ({
    headers,
    statusCode,
    body: JSON.stringify(data)
})
