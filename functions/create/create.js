const process = require('process')

const {Client, query} = require('faunadb')
const axios = require("axios");

/* configure faunaDB Client with our secret */
const client = new Client({
    secret: process.env.FAUNADB_SERVER_SECRET,
})

/* export our lambda function as named "handler" export */
const handler = async (event) => {
    /* parse the string body into a useable JS object */
    const data = JSON.parse(event.body)
    console.log('Function `create` invoked', data)
    const lolly = {
        data,
    }
    /* construct the fauna query */
    try {
        const response = await client.query(query.Create(query.Collection('lollies'), lolly))
        console.log('success', response)

        //trigger rebuild of netlify site
        axios.post('https://api.netlify.com/build_hooks/630bd1abbb46d509036e271e')
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });

        /* Success! return the response with statusCode 200 */
        return {
            statusCode: 200,
            body: JSON.stringify(response),
        }
    } catch (error) {
        console.log('error', error)
        /* Error! return the error with statusCode 400 */
        return {
            statusCode: 400,
            body: JSON.stringify(error),
        }
    }
}

module.exports = {handler}
