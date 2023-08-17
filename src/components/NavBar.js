
import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const anchors = links.map((link) => (
    <a href={`#${link}`} key={link}>
      {link}
    </a>
  ));

  return (
    <nav>
      {/* display an <a> tag for each link here */}
      {anchors}
    </nav>
  );
}

export default NavBar;
