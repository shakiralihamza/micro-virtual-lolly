const process = require('process')
const {ApolloServer, gql} = require('apollo-server-lambda')
const fauna = require('faunadb');
const q = fauna.query;
const client = new fauna.Client({secret: process.env.FAUNADB_SERVER_SECRET});
const getHandler = (event, context) => {

    const typeDefs = gql`
        type Lolly {
            lollyID: ID!
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
                return response.data.map(([ref, message, from, to, lollyID, colorTop, colorMiddle, colorBottom]) => ({
                    id: ref.id,
                    message,
                    from,
                    to,
                    lollyID,
                    colorTop,
                    colorMiddle,
                    colorBottom,
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
