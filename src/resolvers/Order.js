
function __resolveReference(order, context){{
    console.log(order)
    return context.prisma.order({ id: order.id })
}}

function customer_phone(_parent, args, context){
    const res = context.prisma.order({
        id: _parent.id
    }).customer_phone()
    return res
}

function shipping_address(_parent, args, context){
    const res = context.prisma.order({
        id: _parent.id
    }).shipping_address()
    return res
}

function billing_address(_parent, args, context){
    const res = context.prisma.order({
        id: _parent.id
    }).billing_address()
    return res
}

function purchase_products(_parent, args, context){
    const res = context.prisma.order({
        id: _parent.id
    }).purchase_products()
    return res
}

function order_confirmation(_parent, args, context){
    const res = context.prisma.order({
        id: _parent.id
    }).order_confirmation()
    return res
}


module.exports = {
    __resolveReference,
    customer_phone,
    shipping_address,
    billing_address,
    purchase_products,
    order_confirmation,
}