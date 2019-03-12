export function success(body) {
  return buildResponse(200, body);
}

export function failure(body, e) {
  console.log(e);
  return buildResponse(500, body);
}

export function buildResponse(statusCode, body) {
  return {
    statusCode: statusCode,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  };
}
