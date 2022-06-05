import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linksMapped = links.map(el => <a href={"#"+el} key={el}>{el}</a>)

  return <nav>
    {linksMapped}
  </nav>;
}

export default NavBar;
