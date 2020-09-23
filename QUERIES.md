#WORKING
# query{
#   info
# }

#WORKING
# query{
#   order(
#     id: "ckfen45eqlhyv0a26hwsw1ayb"
#   ){
#     customer_name
#     customer_email
#     customer_phone{
#       number
#       type
#       contact
#     }
#     shipping_address{
#       street
#       city
#       state
#       zipcode
#     }
#     billing_address{
#       street
#       city
#       state
#       zipcode
#     }
#     purchase_products{
#       code
#       quantity
#     }
#   }
# }

#WORKING
# query{
#   products{
#     id
#     name
#     code
#     cost
#     description
#     inventory_on_hand
#     product_type
#     category
#     pushed_product
#     callback
#   }
# }