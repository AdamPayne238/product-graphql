
# Setup

## Step 1
run 'yarn' in project root folder to install dependencies

## Step 2
run 'yarn run server' to start server.
Terminal should display ** No Errors on Port 4000 **

## Step 3 
go to 'http://localhost:4000/' in browser to see GraphQL playground, otherwise, setup is done for the backend

MUTATIONS.md and QUERIES.md have working Quries and Mutations if you want to test out the GraphQL playground

## Info
With GraphQL, mutations are used for Create, Update, and Delete functionality. Queries are used for reading data from the server.

Each Table has a resolver file.
order_id is resolved in these files to properly connect Phone, Shipping, Billing, Purchase, and Complete tables to the Order table.
Queries and Mutations have resolver files as well which specify function names for different sets of data being sent and recieved.

Prisma v1 was used like a traditional ORM for GraphQL to migrate changes made to tables.
Most of the data is being persisted on a prisma cloud server for now since the backend is not deployed or migrated to Postgres.

