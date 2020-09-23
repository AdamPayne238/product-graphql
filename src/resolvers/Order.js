
function __resolveReference(order, context){{
    console.log(order)
    return context.prisma.order({ id: order.id })
}}

function customer_phone(_parent, args, context){
    const res = context.prisma.order({
        id: _parent.id
    }).customer_phone()

    console.log("customer_phone res", res)
    return res
}

function shipping_address(_parent, args, context){
    const res = context.prisma.order({
        id: _parent.id
    }).shipping_address()
    
    console.log("shipping_address res", res)
    return res
}

function billing_address(_parent, args, context){
    const res = context.prisma.order({
        id: _parent.id
    }).billing_address()
    
    console.log("billing_address res", res)
    return res
}

function purchase_products(_parent, args, context){
    const res = context.prisma.order({
        id: _parent.id
    }).purchase_products()
    
    console.log("purchase_products res", res)
    return res
}


module.exports = {
    __resolveReference,
    customer_phone,
    shipping_address,
    billing_address,
    purchase_products,
}