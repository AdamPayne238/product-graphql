

function createProduct(_parent, args, context){

    const res = context.prisma.createProduct({
        name: args.name,
        code: args.code,
        cost: args.cost,
        description: args.description,
        inventory_on_hand: args.inventory_on_hand,
        product_type: args.product_type,
        category: args.category,
        pushed_product: args.pushed_product,
        callback: args.callback,
    })
    return res
}


// Mutation Create Order
function createOrder(_parent, args, context){

    const res = context.prisma.createOrder({
        customer_name: args.customer_name,
        customer_email: args.customer_name
    })
    return res
}


// Mutation Create Phone
function createPhone(_parent, args, context){

    const res = context.prisma.createPhone({
        number: args.number,
        type: args.type,
        contact: args.contact,
        order_id: {
            connect: {id: args.order_id}
        },
    })
    return res
}


// Mutation Create Shipping
function createShipping(_parent, args, context){

    const res = context.prisma.createShipping({
        street: args.street,
        city: args.city,
        state: args.state,
        zipcode: args.zipcode,
        order_id: {
            connect: {id: args.order_id}
        },
    })
    return res
}


// Mutation Create Billing 
function createBilling(_parent, args, context){

    const res = context.prisma.createBilling({
        street: args.street,
        city: args.city,
        state: args.state,
        zipcode: args.zipcode,
        order_id: {
            connect: {id: args.order_id}
        },
    })
    return res
}


// Mutation Create Purchase
function createPurchase(_parent, args, context){

    const res = context.prisma.createPurchase({
        code: args.code,
        quantity: args.quantity,
        order_id: {
            connect: {id: args.order_id}
        },
    })
    return res
}



module.exports = {
    createProduct,
    createOrder,
    createPhone,
    createShipping,
    createBilling,
    createPurchase,
}