import { UserRestApi } from "./rest/UserRestApi";
import { ProductRestApi } from "./rest/ProductRestApi";
import { OrderRestApi } from "./rest/OrderRestApi";

// user
const userApiResponse = new UserRestApi().processRequest({
  id: 111,
  name: "user name",
  email: "user@mail.com",
});
console.log(userApiResponse.toString());
// user: validate
// user: remove email
// user: update db
// {"code":200,"status":"success"}

// valid product
const validProductResponse = new ProductRestApi().processRequest({
  id: 123,
  name: "product name",
  price: 5,
});
console.log(validProductResponse.toString());
// product: validate
// product: update db
// {"code":200,"status":"success"}

// invalid product
const invalidProductResponse = new ProductRestApi().processRequest({
  id: 123,
  name: "product name",
});
console.log(invalidProductResponse.toString());
// product: validate
// product: send message to admin
// {"code":400,"status":"failed","message":"Invalid entity"}

// order
const orderResponse = new OrderRestApi().processRequest({
  userId: 111,
  products: [{ id: 123, name: "product name", price: 5 }],
});
console.log(orderResponse.toString());
// order: validate
// order: update db
// {"code":200,"status":"success","entity":{"userId":111,"products":[{"id":123,"name":"product name","price":5}]}}
