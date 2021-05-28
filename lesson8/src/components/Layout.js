import React from "react";

import LayoutItem from "./LayoutItem";

function Layout({ persons }) {
  return (
    <section className="layout-wrapper">
      {persons.map((person) => (
        <LayoutItem
          key={person.id}
          firstName={person.firstName}
          lastName={person.lastName}
          email={person.email}
          city={person.city}
        />
      ))}
    </section>
  );
}

export default Layout;
