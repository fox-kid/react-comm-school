import React from "react";
import Bottom from "./components/Bottom";

const blockListing = [
  { title: "Category 1", className: "category-1" },
  { title: "Category 2", className: "category-2" },
  { title: "Category 3", className: "category-3" },
  { title: "Category 3", className: "category-4" },
];

function Footer() {
  return (
    <section className="container">
      <div className="block-listing">
        {blockListing.map((item) => (
          <Bottom title={item.title} className={item.className} />
        ))}
      </div>
      <div className="banner"></div>
    </section>
  );
}

export default Footer;
