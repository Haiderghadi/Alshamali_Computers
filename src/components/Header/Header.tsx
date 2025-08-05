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
} from "../reusables/resizable-navbar";
import Icons from "./Icons";
import CustomNavItems from "./CustomNavItems";
import MobileMegaMenu from "./MobileMegaMenu";
import { navItems } from "../../constants";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileShopMenuOpen, setIsMobileShopMenuOpen] = useState(false);

  return (
    <>
      <div className="relative w-full pb-20">
        <Navbar>
          {/* Desktop Navigation */}
          <NavBody>
            <NavbarLogo />
            <CustomNavItems items={navItems} />
            <div className="flex items-center gap-4">
              <Icons />
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
              {/* Mobile MegaMenu */}
              <MobileMegaMenu
                isOpen={isMobileShopMenuOpen}
                onClose={() => setIsMobileShopMenuOpen(false)}
              />
              {navItems.map((item, idx) => (
                <div key={`mobile-link-${idx}`}>
                  {item.name === "Shop" ? (
                    <button
                      onClick={() =>
                        setIsMobileShopMenuOpen(!isMobileShopMenuOpen)
                      }
                      className="w-full flex items-center justify-between p-3 text-neutral-600 dark:text-neutral-300 hover:bg-gray-50 rounded-lg"
                    >
                      <span className="block">{item.name}</span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isMobileShopMenuOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  ) : (
                    <a
                      href={item.link}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block p-3 text-neutral-600 dark:text-neutral-300 hover:bg-gray-50 rounded-lg"
                    >
                      <span className="block">{item.name}</span>
                    </a>
                  )}
                </div>
              ))}

              <div className="flex w-full flex-col justify-center items-center gap-4">
                <Icons />
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
