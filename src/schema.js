const { gql } = require('apollo-server')

const typeDefs = gql`

scalar DateTime

type Product {
    id: ID!
    name: String!
    code: Int!
    cost: Float!
    description: String!
    inventory_on_hand: Int!
    proeduct_type: String!
    category: String!
    pushed_product: Boolean!
    callback: String!
}

type Order {
    id: ID!
    customer_name: String!
    customer_email: String!
    customer_phone: [Phone!]
    shipping_address: [Shipping!]
    billing_address: [Billing!]
    purchase_products: [Purchase!]
}

type Phone {
    id: ID!
    number: Int!
    type: String!
    contact: Boolean!
    order_id: Order!
}

type Shipping {
    id: ID!
    street: String!
    city: String!
    state: String!
    zipcode: Int!
    order_id: Order!
}

type Billing {
    id: ID!
    street: String!
    city: String!
    state: String!
    zipcode: Int!
    order_id: Order!
}

type Purchase {
    id: ID!
    code: Int!
    quantity: Int!
    order_id: Order!
}

type Query {
    info: String

    products: [Product!]
    product(id: String!): Product!

    order(id: String!): Order!
}

type Mutation {

    createProduct(
        name: String!
        code: Int!
        cost: Float!
        description: String!
        inventory_on_hand: Int!
        proeduct_type: String!
        category: String!
        pushed_product: Boolean!
        callback: String!
    ): Product!

    createOrder(
        customer_name: String
        customer_email: String
    ): Order!

    createPhone(
        number: Int!
        type: String!
        contact: Boolean!
        order_id: String!
    ): Phone!

    createShipping(
        street: String!
        city: String!
        state: String!
        zipcode: Int!
        order_id: String!
    ): Shipping!

    createBilling(
        street: String!
        city: String!
        state: String!
        zipcode: Int!
        order_id: String!
    ): Billing!

    createPurchase(
        code: Int!
        quantity: Int!
        order_id: String!
    ): Purchase!

}

`


module.exports = typeDefs