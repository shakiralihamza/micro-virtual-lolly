const process = require('process')
const {ApolloServer, gql} = require('apollo-server-lambda')
const fauna = require('faunadb');
const q = fauna.query;
const client = new fauna.Client({secret: process.env.FAUNADB_SERVER_SECRET});
const getHandler = (event, context) => {

    const typeDefs = gql`
        type Lolly {
            id: ID!
            lollyID: String!
            colorTop: String!
            colorMiddle: String!
            colorBottom: String!
            to: String!
            from: String!
            message: String!
        }
        type Query {
            lollies: [Lolly!]
        }
    `;

    const resolvers = {
        Query: {
            lollies: async () => {
                const response = await client.query(q.Paginate(q.Match(q.Index('all_lollies'))))
                return response.data.map(([ref, lollyID, colorTop, colorMiddle, colorBottom, to, from, message]) => ({
                    id: ref.id,
                    lollyID,
                    colorTop,
                    colorMiddle,
                    colorBottom,
                    to,
                    from,
                    message,
                }))
            }
        },
    };
    const server = new ApolloServer({
        typeDefs,
        resolvers
    });
    const graphqlHandler = server.createHandler();
    if (!event.requestContext) {
        event.requestContext = context;
    }
    return graphqlHandler(event, context);
}

exports.handler = getHandler;
