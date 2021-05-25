import React from "react";
import Card from "./components/Card";

const products = [
  {
    title: "Product 1",
    alt: "Image-1",
    description: { stock: "In Stock", rating: "3.5/5" },
    badges: { badge1: "sport", badge2: "lifestyle" },
    button: "Add To Cart",
  },
  {
    title: "Product 2",
    alt: "Image-2",
    description: { stock: "In Stock", rating: "2.5/5" },
    badges: { badge1: "sport", badge2: "lifestyle" },
    button: "Add To Cart",
  },
  {
    title: "Product 3",
    alt: "Image-3",
    description: { stock: "In Stock", rating: "4/5" },
    badges: { badge1: "sport", badge2: "lifestyle" },
    button: "Add To Cart",
  },
  {
    title: "Product 4",
    alt: "Image-4",
    description: { stock: "In Stock", rating: "1.5/5" },
    badges: { badge1: "sport", badge2: "lifestyle" },
    button: "Add To Cart",
  },
  {
    title: "Product 5",
    alt: "Image-5",
    description: { stock: "In Stock", rating: "3.5/5" },
    badges: { badge1: "sport", badge2: "lifestyle" },
    button: "Add To Cart",
  },
  {
    title: "Product 6",
    alt: "Image-6",
    description: { stock: "In Stock", rating: "4.5/5" },
    badges: { badge1: "sport", badge2: "lifestyle" },
    button: "Add To Cart",
  },
];

function App() {
  return (
    <main className="container">
      {products.map((item) => (
        <Card
          title={item.title}
          src="https://source.unsplash.com/random/200x300"
          alt={item.alt}
          stock={item.description.stock}
          rating={item.description.rating}
          badge1={item.badges.badge1}
          badge2={item.badges.badge2}
          button={item.button}
        />
      ))}
    </main>
  );
}

export default App;
