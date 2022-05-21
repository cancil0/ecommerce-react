import { useState, useEffect } from "react";
import CategoryService from "../../services/CategoryService";

import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const NavbarCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let categoryService = new CategoryService();
    categoryService.getAll().then((x) => {
      if (!x.isFailed) {
        setCategories(x.result);
      }
    });
  }, []);

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Container>
          <Nav className="justify-content-center">
            {categories
                ?.filter((x) => !x.parentCategoryId)
                .map((parentCategory) => {
                  return (
                    <NavDropdown
                      key={parentCategory.categoryId}
                      title={parentCategory.name}
                      id="basic-nav-dropdown"
                      disabled={categories.every(
                        (x) => x.parentCategoryId !== parentCategory.categoryId
                      )}
                    >
                      {categories
                        .filter(
                          (x) => x.parentCategoryId === parentCategory.categoryId
                        )
                        .map((childCategory) => {
                          return (
                            <NavDropdown.Item
                              key={childCategory.categoryId}
                              as={Link}
                              to={`home/${childCategory.categoryId}`}
                            >
                              {childCategory.name}
                            </NavDropdown.Item>
                          );
                        })}
                    </NavDropdown>
                  );
                })}
          </Nav>
        </Container>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarCategory;
