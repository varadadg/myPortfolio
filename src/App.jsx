import React from "react";

import Home from "./Home";
import { ScrollShadow } from "@nextui-org/react";
import { Route, Routes } from "react-router";
import { appRoutes } from "./Routes";
import { Link as Links } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Home", "LinkedIn", "Projects", "Behance"];
  return (
    <div>
      <Navbar onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <p className="font-bold text-inherit">HI! I am Varada</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link
              color="foreground"
              href="https://medium.com/@dev_Varada/empowering-spiritual-journeys-designing-a-tarot-app-for-guidance-growth-and-self-discovery-3d86f83b697a">
              PROJECTS
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="foreground"
              href="https://www.behance.net/gallery/213817249/MYSTIC-APP">
              BEHANCE
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link
              href="https://www.linkedin.com/in/varada-gond-44715a190/"
              aria-current="page">
              LET'S CONNECT
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="/">HOME</Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              {item === "Behance" ? (
                // External link for Behance
                <a
                  href="https://www.behance.net/gallery/213817249/MYSTIC-APP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full">
                  {item}
                </a>
              ) : item === "LinkedIn" ? (
                // External link for LinkedIn
                <a
                  href="https://www.linkedin.com/in/varada-gond-44715a190/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full">
                  {item}
                </a>
              ) : item === "Projects" ? (
                // External link for Medium article
                <a
                  href="https://medium.com/@dev_Varada/empowering-spiritual-journeys-designing-a-tarot-app-for-guidance-growth-and-self-discovery-3d86f83b697a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full">
                  {item}
                </a>
              ) : (
                // Internal navigation for Home and Projects
                <Links to={item === "Home" ? "/" : "#"} className="w-full">
                  {item}
                </Links>
              )}
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>

      <Routes>
        {appRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.component} />
        ))}

        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
