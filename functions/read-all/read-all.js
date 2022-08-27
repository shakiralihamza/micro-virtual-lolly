const faunadb = require('faunadb');
const q = faunadb.query;
const client = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_SECRET
});

module.exports = () => {
    return new Promise((resolve, reject) => {
        client.query(
            q.Paginate(q.Match(q.Ref("indexes/all_lollies")),{size:100000})
        ).then((response) => {
            const lollies = response.data;
            const getAllDataQuery = lollies.map((ref) => {
                return q.Get(ref);
            });
            return client.query(getAllDataQuery).then((ret) => {
                resolve(ret);
            });
        }).catch((error) => {
            console.log("error", error);
            reject(error);
        });
    })
}
