import React from "react";
import { FloatingNav } from "./ui/floating-navbar";

const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

const Navbar = () => {
  return (
    <div>
      <FloatingNav navItems={navItems} />
    </div>
  );
};

export default Navbar;
