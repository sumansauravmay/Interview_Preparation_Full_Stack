import ProductItem from "./ProductItem";
import ProductList from "./ProductList";

export const UserListWithData = ProductList(
  ProductItem,
  "https://fakestoreapi.com/products"
);


