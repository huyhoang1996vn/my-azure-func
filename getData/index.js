module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    var moment = require('moment');
    
    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = `responseMessage ${moment.utc().valueOf()}`
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}