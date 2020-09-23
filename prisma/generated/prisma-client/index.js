"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Product",
    embedded: false
  },
  {
    name: "Order",
    embedded: false
  },
  {
    name: "Phone",
    embedded: false
  },
  {
    name: "Shipping",
    embedded: false
  },
  {
    name: "Billing",
    embedded: false
  },
  {
    name: "Purchase",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://us1.prisma.sh/adam-payne/product-graphql/dev`
});
exports.prisma = new exports.Prisma();
