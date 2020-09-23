
// order_id
function order_id(_parent, args, context){
    const res = context.prisma.shipping({
        id: _parent.id
    }).order_id()
    
    return res
}

module.exports = {
    order_id,
}