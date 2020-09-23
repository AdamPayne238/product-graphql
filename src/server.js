const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('../prisma/generated/prisma-client')


const typeDefs = require('./schema')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const Order = require('./resolvers/Order')
const Phone = require('./resolvers/Phone')
const Shipping = require('./resolvers/Shipping')
const Billing = require('./resolvers/Billing')
const Purchase = require('./resolvers/Purchase')

const resolvers = {
    Query,
    Mutation,
    Order,
    Phone,
    Shipping,
    Billing,
    Purchase,
}

const server = new GraphQLServer({
    typeDefs,
    resolvers,
    context: request => {
        return {
            ...request,
            prisma,
        }
    },
})

module.exports = server