export const categories = [
  { id: 0, name: "All" },
  { id: 1, name: "Boys" },
  { id: 2, name: "Girls" },
  // Add more categories as needed
];

export const products = [
  {
    id: 0,
    categoryId: 1,
    name: "Cool Sneakers",
    image: require("../image/distinct-mind-Js9auX5_9R8-unsplash.jpg"),
    price: 29.99,
    brand: "Boy's Brand A",
  },
  {
    id: 1,
    categoryId: 2,
    name: "Elegant Dress",
    image: require("../image/milad-fakurian-E8Ufcyxz514-unsplash.jpg"),
    price: 19.99,
    brand: "Girl's Brand B",
  },
  // Add more products as needed
];

export const newArrivals = [
  {
    id: 0,
    name: "Fresh for Boys",
    image: require("../image/milad-fakurian-PjG_SXDkpwQ-unsplash.jpg"),
    price: 39.99,
  },
  {
    id: 1,
    name: "Chic for Girls",
    image: require("../image/neom-I5j46lqAo-o-unsplash.jpg"),
    price: 49.99,
  },
  // Add more new arrivals as needed
];

export const featuredBrands = [
  {
    id: 0,
    name: "Trendsetter for Boys",
    image: require("../image/vighnesh-dudani-ZQSs0YZUNfA-unsplash.jpg"),
  },
  {
    id: 1,
    name: "Fashionista for Girls",
    image: require("../image/viktor-forgacs-UE_3Z53UsLc-unsplash.jpg"),
  },
  {
    id: 2,
    name: "Stylish for Boys",
    image: require("../image/and-machines-vqTWfa4DjEk-unsplash.jpg"),
  },
  {
    id: 3,
    name: "Elegant for Girls",
    image: require("../image/distinct-mind-Js9auX5_9R8-unsplash.jpg"),
  },
  // Add more featured brands as needed
];
