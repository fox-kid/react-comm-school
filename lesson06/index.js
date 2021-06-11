// const root = document.querySelector("#root");

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

const blockListing = [
  { title: "Category 1", className: "category-1" },
  { title: "Category 2", className: "category-2" },
  { title: "Category 3", className: "category-3" },
  { title: "Category 3", className: "category-4" },
];

function Card(props) {
  return React.createElement("div", { className: "shopping-item" }, [
    React.createElement("h3", null, [props.title]),
    React.createElement("img", {
      src: "https://source.unsplash.com/random/200x300",
      alt: props.alt,
    }),
    React.createElement("div", { className: "description" }, [
      React.createElement("span", null, [props.description.stock]),
      React.createElement("span", null, [props.description.rating]),
    ]),
    React.createElement("div", { className: "badges" }, [
      React.createElement(
        "span",
        { className: "badge-1" },
        props.badges.badge1
      ),
      React.createElement(
        "span",
        { className: "badge-2" },
        props.badges.badge2
      ),
    ]),
    React.createElement("button", null, props.button),
  ]);
}

function Block(props) {
  return React.createElement(
    "span",
    {
      className: props.className,
    },
    props.title
  );
}

function Header() {
  return React.createElement("main", { className: "containter" }, [
    ...products.map((product) => React.createElement(Card, product)),
  ]);
}

function Footer() {
  return React.createElement("section", { className: "container" }, [
    React.createElement("div", { className: "block-listing" }, [
      ...blockListing.map((blockItem) => React.createElement(Block, blockItem)),
    ]),
    React.createElement("div", { className: "banner" }),
  ]);
}

function App() {
  return React.createElement("div", { idName: "root" }, [
    React.createElement(Header),
    React.createElement(Footer),
  ]);
}

ReactDOM.render(React.createElement(App), document.querySelector("body"));
