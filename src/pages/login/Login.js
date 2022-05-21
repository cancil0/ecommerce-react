import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import LoginService from "../../services/LoginService";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useTranslation } from "react-i18next";
import { Col, Row } from "react-bootstrap";

const Login = ({ setToken }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [userName, setuserName] = useState(
    sessionStorage.getItem("loginUserName") ?? ""
  );
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(
    sessionStorage.getItem("rememberMe") === 'true'
  );
  const [validated, setValidated] = useState(false);
  const [usernameIsValid, setUsernameIsValid] = useState(
    sessionStorage.getItem("loginUserName") ?? false
  );
  const [passwordIsValid, setPasswordIsValid] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!usernameIsValid || !passwordIsValid) {
      setValidated(false);
      return;
    }
    setValidated(true);
    if (rememberMe) {
      sessionStorage.setItem("loginUserName", userName);
    } else {
      sessionStorage.removeItem("loginUserName");
    }
    let loginService = new LoginService();
    loginService
      .login({
        userName: userName,
        password: password,
      })
      .then((x) => {
        if (!x.isFailed && x.result) {
          setToken(x.result);
          navigate("/home");
        }
      });
  };

  const onChangeUsername = (event) => {
    const value = event.target.value;
    setuserName(value);
    if (value !== "" && value.length > 2) {
      setUsernameIsValid(true);
    } else {
      setUsernameIsValid(false);
    }
  };

  const onChangePassword = (event) => {
    const value = event.target.value;
    setPassword(value);
    if (value !== "" && value.length > 6) {
      setPasswordIsValid(true);
    } else {
      setPasswordIsValid(false);
    }
  };

  const onChangeRememberMe = (event) => {
    const isChecked = event.target.checked;
    if (isChecked) sessionStorage.setItem("rememberMe", true);
    else sessionStorage.removeItem("rememberMe");
    setRememberMe(isChecked);
  };

  const onClickForgotPass = () => {
    navigate("/login/forgotpassword");
  };

  return (
    <Container className="login col-md-2">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-2" controlid="formBasicUserName">
          <Form.Control
            isInvalid={!usernameIsValid && userName !== ""}
            isValid={usernameIsValid}
            type="text"
            value={userName}
            required
            onChange={onChangeUsername}
            placeholder={t("Login.UserNameorEmailorMobileNo")}
          />
        </Form.Group>
        <Form.Group className="mb-2" controlid="formBasicPassword">
          <Form.Control
            isInvalid={!passwordIsValid && password !== ""}
            isValid={passwordIsValid}
            type="password"
            value={password}
            onChange={onChangePassword}
            placeholder={t("Login.Password")}
          />
        </Form.Group>
        <Row>
          <Col>
            <Form.Group className="mb-2" controlid="formBasicCheckbox">
              <Form.Check
                checked={rememberMe}
                onChange={onChangeRememberMe}
                type="checkbox"
                label={t("Login.RememberMe")}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Text
                onClick={onClickForgotPass}
                className="mb-2 forgotpass"
                controlid="formForgotPassword"
              >
                {t("Login.ForgotPassword")}
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit">
          {t("Login.Login")}
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
