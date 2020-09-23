
// order_id
function order_id(_parent, args, context){
    const res = context.prisma.phone({
        id: _parent.id
    }).order_id()
    
    console.log("order_id phone res", res)
    return res
}

module.exports = {
    order_id,
}