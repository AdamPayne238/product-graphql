# ORDER ID "ckfen45eqlhyv0a26hwsw1ayb"

#WORKING
# mutation{
#   createOrder(
#     customer_name: "first dude",
#     customer_email: "first email"
#   ){
# 	id
# 	customer_name
#   customer_email
#   }
# }

#WORKING
# mutation{
#   createPhone(
#     number: 333334444,
#     type: "mobile",
#     contact: true,
#     order_id: "ckfen45eqlhyv0a26hwsw1ayb"
#   ){
#     id
#     number
#     type
#     contact
#     order_id{
#				id
#       customer_name
#       customer_email
#     }
#   }
# }

#WORKING
# mutation{
#   createShipping(
#     street: "3000 clarcona Rd",
#     city: "Apopka",
#     state: "Florida",
#     zipcode: 46033,
#     order_id: "ckfen45eqlhyv0a26hwsw1ayb",
#   ){
#     id
#     street
#     city
#     state
#     zipcode
#     order_id{
#       id
#       customer_name
#       customer_email
#     }
#   }
# }

#WORKING
# mutation{
#   createBilling(
#     street: "1516 Cool Creek Drive",
#     city: "Carmel",
#     state: "Indiana",
#     zipcode: 46033,
#     order_id: "ckfen45eqlhyv0a26hwsw1ayb",
#   ){
#     id
#     street
#     city
#     state
#     zipcode
#     order_id{
#       id
#       customer_name
#       customer_email
#     }
#   }
# }

#WORKING
# mutation{
#   createPurchase(
#     code: 1212,
#     quantity: 400,
#     order_id: "ckfen45eqlhyv0a26hwsw1ayb",
#   ){
#     id
#     code
#     quantity
#     order_id{
#       id
#       customer_name
#       customer_email
#     }
#   }
# }

#WORKING
# mutation{
#   createProduct(
#     name: "Apple",
#     code: 1000,
#     cost: 0.55,
#     description: "Delicious red apple",
#     inventory_on_hand: 88,
#     product_type: "fruit",
#     category: "food",
#     pushed_product: false,
#     callback: "???"
#   ){
#     id
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