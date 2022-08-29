const process = require('process')

const {Client, query} = require('faunadb')

/* configure faunaDB Client with our secret */
const client = new Client({
    secret: process.env.FAUNADB_SERVER_SECRET,
})

/* export our lambda function as named "handler" export */
const handler = async (event, context, callback) => {
    console.log('Function `showLolly` invoked')
    console.log(event)
    const lollyID = event.queryStringParameters.lollyID

    return client.query(
        query.Get(query.Match(query.Index("lolly_by_id"), lollyID))
    ).then((response) => {
        return callback(null, {
            statusCode: 200,
            body: JSON.stringify(response.data)
        });
    }).catch((error) => {
        // not found or an error
        console.log('Error:', error);
        return callback(null, {
            body: JSON.stringify(error),
            statusCode: 301,
        });
    });

}

module.exports = {handler}
