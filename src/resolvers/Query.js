
// INFO
const info = () => {
    return "Server Running"
}

// GET PRODUCTS
function products(_parent, args, context){
    return context.prisma.products()
}

// GET PRODUCT BY ID
function product(_parent, args, context){
    return context.prisma.product({ id: args.id })
}

// GET ORDER by ID
function order(_parent, args, context){
    return context.prisma.order({
        id: args.id
    })
}

module.exports = {
    info,
    products,
    product,
    order,
}