export function success(body){
    return buildResponse(200, body);
}

export function failure(body){
    return buildResponse(failure, body);
}

export function buildResponse(statusCode, body){
    return {
        statusCode: statusCode,
        headers: {
            "Access-Control-Allow-Origins": "*",
            "Access-Control-Allow-Credentials": true
        },
        body: JSON.stringify(body)
    };
}