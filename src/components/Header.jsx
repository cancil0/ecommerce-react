import { useLocation } from "react-router-dom";

import NavbarCategory from "./Navbar/NavbarCategory";
import MainNavigationBar from "./Navbar/MainNavigationBar";
import LoginNavigationBar from "./Navbar/LoginNavigationBar";

const Header = () => {
  const location = useLocation();

  if (location.pathname.startsWith("/login") || location.pathname.startsWith("/options")) {
    return <LoginNavigationBar />;
  }

  return (
    <>
      <MainNavigationBar />
      <NavbarCategory />
    </>
  );
};

export default Header;
