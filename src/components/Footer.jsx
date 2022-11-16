import React from "react";

//method for updating any current year
const curryear = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>Copyright @ {curryear}</p>
    </footer>
  );
}

export default Footer;
