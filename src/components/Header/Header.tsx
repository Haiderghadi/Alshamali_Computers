// import "../../styles/Navbar.css";
// import Topbar from "./Topbar";
// import Icons from "./Icons";
// import Links from "./Links";
// const Header = () => {
//   return (
//     <div className="flex flex-col">
//       <Topbar />
//       <header className="bg-white shadow flex flex-row justify-between items-center px-4 py-4">
//         <div className="">
//           <img src="./shamali_logo.png" alt="logo" width={150} height={150} />
//         </div>
//         <Links />
//         <Icons />
//       </header>
//     </div>
//   );
// };

// export default Header;

import { useState } from "react";
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  Navbar,
  NavbarButton,
  NavbarLogo,
  NavBody,
  NavItems,
} from "../reusables/resizable-navbar";
import Topbar from "./Topbar";

export function Header() {
  const navItems = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "Shop",
      link: "#shop",
    },
    {
      name: "Software Solutions",
      link: "#solutions",
    },
    {
      name: "Services",
      link: "#services",
    },
    {
      name: "Partners",
      link: "#partners",
    },
    {
      name: "About Us",
      link: "#about",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="relative w-full pb-20">
        <Navbar>
          {/* Desktop Navigation */}
          <NavBody>
            <NavbarLogo />
            <NavItems items={navItems} />
            <div className="flex items-center gap-4">
              <NavbarButton variant="primary">Login</NavbarButton>
            </div>
          </NavBody>

          {/* Mobile Navigation */}
          <MobileNav>
            <MobileNavHeader>
              <NavbarLogo />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </MobileNavHeader>

            <MobileNavMenu
              isOpen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}
            >
              {navItems.map((item, idx) => (
                <a
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative text-neutral-600 dark:text-neutral-300"
                >
                  <span className="block">{item.name}</span>
                </a>
              ))}
              <div className="flex w-full flex-col gap-4">
                <NavbarButton
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant="primary"
                  className="w-full"
                >
                  Login
                </NavbarButton>
                <NavbarButton
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant="primary"
                  className="w-full"
                >
                  Book a call
                </NavbarButton>
              </div>
            </MobileNavMenu>
          </MobileNav>
        </Navbar>
      </div>
    </>
  );
}

export default Header;
