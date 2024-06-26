import { getAllProduct, getProductByID } from "../src/database.js";
import { ProductService } from "../src/product-service.js";

jest.mock("../src/database.js");

test("mock modules getProductById", () => {
  getProductByID.mockImplementation((id) => {
    return {
      id: id,
      name: "Product Mock",
    };
  });

  const product = ProductService.findById(1);

  expect(product).toEqual({
    id: 1,
    name: "Product Mock",
  });
});

test("mock modules getAllProduct", () => {
  const products = [
    {
      id: 1,
      name: "Product Mock",
    },
    {
      id: 2,
      name: "Product Mock",
    },
  ];

  getAllProduct.mockImplementation(() => {
    return products;
  });

  expect(ProductService.findAll()).toEqual(products);
});
