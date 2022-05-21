import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import LanguageSelector from "../LanguageSelector/LanguageSelector";

const MainNavigationBar = () => {
  const [name, setName] = useState();
  const { t } = useTranslation();

  useEffect(() => {
    setName(sessionStorage.getItem("name"));
  }, [name]);

  const navigate = useNavigate();

  const handleSelect = (value) => {
    if (value === "logout") {
      const isRememberMeExist = sessionStorage.getItem('rememberMe');
      const loginUserName = sessionStorage.getItem('loginUserName');
      sessionStorage.clear();
      if(isRememberMeExist){
        sessionStorage.setItem('rememberMe', true);
        sessionStorage.setItem('loginUserName', loginUserName);
      }
      navigate("/login");
    }
    if (value === "options") {
      navigate("/options");
    }
  };
 
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/home">
          E Commerce
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/home">
              {t('Home.HomeText')}
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder={t('Home.Search')}
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">{t('Home.Search')}</Button>
          </Form>
          <Nav>
            <LanguageSelector />
          </Nav>
          {!name && (
            <Nav>
              <Nav.Link as={Link} to="/login">
              {t('Home.Login')}
              </Nav.Link>
            </Nav>
          )}
          {name && (
            <Nav>
              <NavDropdown
                align={"start"}
                title={name}
                id="basic-nav-dropdown"
                onSelect={handleSelect}
              >
                <NavDropdown.Item eventKey="options">{t('Home.Options')}</NavDropdown.Item>
                <NavDropdown.Item eventKey="logout">{t('Home.Logout')}</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavigationBar;
