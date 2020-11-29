exports.handler = function(event, context, callback) {
    const headers = {
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Headers" : "Content-Type"
    }
    
    if (event.httpMethod !== "POST") {
    return callback(null, {
        statusCode: 200,
        headers,
        body: "This was not a POST request"
    })
    }

    const secretContent = `
        <h3>Welcom To The Secret Area</h3>
        <p>The <strong>sky</strong> is blue</p>
    `;
    
    let body;

    if(event.body){
        body = JSON.parse(event.body);
    } else {
        body = {};
    }

    if(body.password == "rakesh") {
        callback(null, {
            statusCode: 200,
            body: secretContent
        });
    } else {
        callback(null, {
            statusCode: 401
        });
    }
}