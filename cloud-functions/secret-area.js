exports.handler = function(event, context, callback) {
    const secretContent = ``;
    
    let body;

    if(event.body){
        body = JSON.parse(event.body);
    } else {
        body = {};
    }

    if(body.password == "rakesh") {
        callback(null, {
            statusCode: 200,
            body: "Welcome to the super secret area"
        });
    } else {
        callback(null, {
            statusCode: 401
        });
    }
}