
function order_id(_parent, args, context){
    const res = context.prisma.phone({
        id: _parent.id
    }).order_id()
    return res
}

module.exports = {
    order_id,
}