import { getAllProduct, getProductByID } from "../src/database";
import { ProductService } from "../src/product-service";

jest.mock("../src/database.js", () => {
  const originalModule = jest.requireActual("../src/database.js");

  return {
    __esModule: true,
    ...originalModule,
    getAllProduct: jest.fn(),
  };
});

test.failing("mock modules getProductById", () => {
  ProductService.findById(1);
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
