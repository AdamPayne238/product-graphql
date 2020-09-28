
# mutation{
#   createOrder(
#     customer_name: "test name",
#     customer_email: "test email"
#   ){
# 	id
# 	customer_name
#   customer_email
#   }
# }

# mutation{
#   createPhone(
#     number: 333334444,
#     type: "mobile",
#     contact: true,
#     order_id: "ckfg1knm3yfci09992o68jw4y"
#   ){
#     id
#     number
#     type
#     contact
#     order_id{
# 				id
#       customer_name
#       customer_email
#     }
#   }
# }

# mutation{
#   createShipping(
#     street: "3000 South Rd",
#     city: "Orange",
#     state: "Texas",
#     zipcode: 46033,
#     order_id: "ckfg2nxewpwud0a26kk2eyhdc",
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

# mutation{
#   createComplete(
#     order_total: 4000,
#     order_id: "ckfh8ypjv35ul0999rqnpgw2m",
#   ){
#   	confirmation_code
#     order_total
#   }
# }

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

