
// Test Server
const info = () => {
    return "Server Running"
}

// GET PRODUCTS


// GET PRODUCT BY ID

// GET ORDER by ID
function order(_parent, args, context){
    return context.prisma.order({
        id: args.id
    })
}

module.exports = {
    info,
    order,
}