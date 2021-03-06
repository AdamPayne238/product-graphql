
# Setup

## Step 1
run 'yarn' in project root folder to install dependencies

## Step 2
run 'yarn run server' to start server.
Terminal should display ** No Errors on Port 4000 **

## Step 3 
go to 'http://localhost:4000/' in browser to see GraphQL playground, otherwise, setup is done for the backend

MUTATIONS.md and QUERIES.md have working Quries and Mutations if you want to test out the GraphQL playground


# HEADS UP!

## GraphQL ID's
GraphQL ID's are stored as unique strings
I used this in my favor on the Complete table and renamed id as confirmation_code to create a unique code for each completed order.

## GraphQL Int
When storing Int values in GraphQL, Int cannot represent a non 32-bit signed integer. Since the greatest number that can be stored as Int is 2147483647, I was unable to store my own phone number since it started with 317 or any number greater than 2147483647. Because of this I changed the customer_phone number to a String. I decided it would be better to parse that to an integer when needed than create another field and separate the phone number and area code.

## Callback / Pushed Product
Also, I was not sure what callback and pushed_product was supposed to be so I didnt know what to prefill the data as. However, the fields are still there on the backend and stored correctly.

# Other Info
With GraphQL, mutations are used for Create, Update, and Delete functionality. Queries are used for reading data from the server.

Each Table has a resolver file.
order_id is resolved in these files to properly connect Phone, Shipping, Billing, Purchase, and Complete tables to the Order table.
Queries and Mutations have resolver files as well which specify function names for different sets of data being sent and recieved.

Prisma v1 was used like a traditional ORM for GraphQL to migrate changes made to tables.
Most of the data is being persisted on a prisma cloud server for now since the backend is not deployed or migrated to Postgres.
