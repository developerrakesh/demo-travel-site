exports.handler = function(event, context, callback) {
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